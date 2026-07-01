# Agent Communication

本文件定义 Codex 与 ChatGPT 之间的 GitHub Issue 中转协议。

目标不是让用户复制大段内容，而是让 Codex 主导流程：

```text
Codex
↓
GitHub Issue
↓
ChatGPT 网页端作者评审
↓
GitHub Issue 评论
↓
Codex 读取并执行
```

## 为什么使用 GitHub Issue

- GitHub 是项目事实来源的一部分。
- Issue 天然有时间线、标题、标签、评论和链接。
- ChatGPT 网页端可以围绕一个 Issue 做作者评审。
- Codex 可以通过脚本或 GitHub API 拉取 Issue 评论。
- 用户不需要在两个聊天窗口之间复制整段内容。

## 角色分工

### Codex

- 创建 Author Review Issue。
- 在 Issue 中写入需要 ChatGPT 评审的问题、上下文文件和输出格式。
- 拉取 ChatGPT 在 Issue 中的回复。
- 将回复沉淀到仓库文件。
- 更新 `WEB_CHAT_BRIEF.md`、`CODEX_TASKS.md`、`CODEX_REPORT.md` 和相关项目文件。

### ChatGPT

- 阅读 GitHub Issue 和仓库上下文。
- 以 Lead Author 身份做设计评审。
- 不直接写正文。
- 按 Issue 中要求输出结构化评审。
- 将回复写回 Issue 评论。

### 用户

- 只负责启动或确认关键阶段。
- 不再复制长段评审内容。
- 在 Draft Gate、章节方向或重大决策上做最终判断。

## Issue 标签

建议使用这些标签：

- `author-review`: 需要 ChatGPT 做作者评审。
- `needs-chatgpt`: 等待 ChatGPT 回复。
- `needs-codex`: 等待 Codex 消化回复。
- `codex-processing`: Codex 已抓取回复，正在消化。
- `done`: 本轮 Issue 已完成。
- `needs-user`: 需要用户做最终判断。
- `draft-gate`: 和 Draft Gate 有关。
- `chapter-01`: Chapter 01 相关。
- `decision`: 可能影响长期架构或教学路线。

## Issue 状态流转

```text
needs-chatgpt
↓ ChatGPT 回复
needs-codex
↓ watcher 抓取评论
codex-processing
↓ Codex 消化并提交
done 或 needs-user
```

说明：

- ChatGPT 回复 Issue 后，应将标签从 `needs-chatgpt` 改为 `needs-codex`。
- 如果 ChatGPT 网页端无法改标签，用户或 Codex 可以手动补标签。
- `Scripts/github_issue_watcher.mjs` 只处理带 `needs-codex` 的 open Issue。
- watcher 抓到新评论后，会生成本地 `codex-next-prompt.md`，并尽量把 Issue 标签切换为 `codex-processing`。
- Codex 执行完成后，再把 Issue 更新为 `done` 或 `needs-user`。

## Issue 标题规范

```text
Author Review: Chapter 01 Draft Gate
Author Review: Chapter 01 Coverage Diagram
Author Review: Curriculum Part I Boundary
```

## Issue 正文格式

```text
## 评审目标

-

## 必读文件

-

## 当前阶段

-

## 需要 ChatGPT 判断的问题

1.
2.
3.

## 输出格式

请输出：

1. Design Review
2. Accepted Decisions
3. Requested Changes
4. Draft Gate 判断
5. WEB_CHAT_BRIEF.md 追加内容
6. CODEX_TASKS.md 任务草案
```

## Codex 消化规则

Codex 拉取 Issue 回复后：

1. 不直接把回复全文塞进正文。
2. 先判断哪些内容进入 `WEB_CHAT_BRIEF.md`。
3. 重要长期决策进入 `DECISIONS.md`。
4. 具体执行项进入 `CODEX_TASKS.md`。
5. Chapter 设计进入对应 `ChapterNN_TEACHING_DESIGN.md`。
6. 如果回复要求进入 Draft，但 Draft Gate 未通过，Codex 必须阻止直接写正文。

## 本地 Bridge 目录

```text
Bridge/
  to_chatgpt/
    current_prompt.md
  from_chatgpt/
    issue-<number>-latest.md
  state/
    github_issue_bridge_state.json
```

这些文件是运行中间产物，默认不提交。正式结论必须沉淀到仓库核心文档。

## 最小工作流

1. Codex 生成 `Bridge/to_chatgpt/current_prompt.md`。
2. 运行：

```powershell
node Scripts/github_issue_bridge.mjs create --prompt Bridge/to_chatgpt/current_prompt.md --title "Author Review: Chapter 01 Draft Gate" --labels author-review,needs-chatgpt,chapter-01,draft-gate
```

3. 用户把 Issue 链接发给 ChatGPT 网页端，要求它按 Issue 回复。
4. ChatGPT 在 Issue 中留下评论。
5. 运行：

```powershell
node Scripts/github_issue_bridge.mjs fetch --issue 12
```

6. Codex 读取 `Bridge/from_chatgpt/issue-12-latest.md` 并执行。

## 轮询驱动工作流

如果希望 Codex 自动等待 ChatGPT 回复，使用 watcher：

```powershell
node Scripts/github_issue_watcher.mjs watch --label needs-codex --interval 60
```

只检查一次：

```powershell
node Scripts/github_issue_watcher.mjs once --label needs-codex
```

watcher 发现新回复后会写入：

```text
Bridge/from_chatgpt/issue-<number>-latest.md
Bridge/from_chatgpt/codex-next-prompt.md
```

下一步可以让 Codex 读取 `codex-next-prompt.md` 执行。

当前安全策略：

- watcher 不自动运行 `codex exec`。
- watcher 只负责“发现回复并生成下一步提示词”。
- 自动执行 Codex 需要单独开启，避免 Issue 评论直接触发无人值守文件修改。

## 环境变量

脚本需要：

```text
GITHUB_TOKEN
```

Token 需要能够读取和创建本仓库 Issue。

可选：

```text
GITHUB_REPOSITORY=ZMIOT/Mental-Models-for-AI
```

如果不设置，脚本会尝试从 `git remote origin` 推断仓库。
