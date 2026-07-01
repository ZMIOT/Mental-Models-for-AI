# Codex Report

Codex 完成任务后在这里回写结果，供 ChatGPT 网页端继续评审。

## 2026-07-01 初始化报告

### 完成内容

- 创建项目基础目录和核心 Markdown 文件。
- 建立三段式沟通渠道:
  - `WEB_CHAT_BRIEF.md`: ChatGPT 讨论摘要。
  - `CODEX_TASKS.md`: Codex 执行任务。
  - `CODEX_REPORT.md`: Codex 回写结果。
- 将项目定位、写作原则、章节模板、术语表、知识图谱和案例库初始化为可维护版本。

### 当前建议

- 下一步让 ChatGPT 先产出 Chapter 01 的教学设计，而不是直接让 Codex 写完整章节。
- Chapter 01 建议围绕 Dataset 展开，从工业现场采样偏差、标注、点云/图像数据组织切入。

### 需要 ChatGPT 决策

- 第一章开篇故事。
- 第一章核心类比。
- 全书章节数量和目录粒度。

## 2026-07-01 协作规范升级报告

### 完成内容

- 追加 ChatGPT 网页端讨论摘要到 `WEB_CHAT_BRIEF.md`。
- 创建 `PROJECT_CHARTER.md`，作为最高层协作规范。
- 创建 `DECISIONS.md`，记录长期架构和教学决策。
- 创建 `CHANGELOG.md`，记录项目版本演进。
- 更新 `README.md` 的项目定位为长期维护的 Knowledge Repository。
- 升级 `CHATGPT_HANDOFF_PROMPT.md`，加入 Lead Author、文档优先级、固定输出格式、Self Review 和冲突检测要求。
- 更新 `CODEX_TASKS.md`，加入 Codex 自动递增任务编号规则。

### 编号处理

- 用户提供的新任务从 `Task 001` 开始编号，但仓库中已有 `Task 001` 和 `Task 002`。
- Codex 已按自动递增规则将其顺延为 `Task 003` 至 `Task 007`。

### 下一步建议

- ChatGPT 可以基于 `PROJECT_CHARTER.md` 重新启动网页会话。
- 下一轮应优先决定 Chapter 01 Dataset 的开篇故事、核心类比和工业 3D 视觉案例。

## 2026-07-01 课程开发流程升级报告

### 完成内容

- 创建 `CURRICULUM.md`，定义全书课程地图和章节边界。
- 创建 `Chapter01_SPEC.md`，明确 Chapter 01 Dataset 的目标、边界、学习目标和 Ready Criteria。
- 创建 `Chapter_Template.md`，提供正式章节和章节规格模板。
- 创建 `Teaching_Checklist.md`，覆盖 Chapter Spec、Teaching Design、Draft、Technical Review、Teaching Review 和 Final。
- 更新 `PROJECT_CHARTER.md`，加入 Curriculum-first 流程和 Phase 0 到 Phase 6。
- 更新 `README.md`、`BOOK_BIBLE.md` 和 `CHATGPT_HANDOFF_PROMPT.md`，避免直接进入正文写作。
- 更新 `KNOWLEDGE_MAP.md` 和 `STATUS.md`，让 Chapter 02 从 Feature 改为 Sample，与 `CURRICULUM.md` 保持一致。
- 更新 `GLOSSARY.md`，登记 Label、Distribution、Coverage、Augmentation 和 Generalization。
- 更新 `CODEX_TASKS.md`，将旧的 Chapter 01 直接写作任务标记为 Superseded，并新增 `Task 008` 到 `Task 012`。

### 关键流程变化

正式章节开发顺序调整为：

```text
PROJECT_CHARTER
↓
BOOK_BIBLE
↓
CURRICULUM
↓
KNOWLEDGE_MAP
↓
Chapter_SPEC
↓
Teaching Design
↓
Draft
↓
Technical Review
↓
Teaching Review
↓
Revision
↓
Final
```

### 下一步建议

- ChatGPT 先评审 `CURRICULUM.md` 中 Part I 的章节顺序和边界。
- ChatGPT 再确认 `Chapter01_SPEC.md` 的主案例：点云缺陷检测或结构光测量异常。
- 只有 Chapter 01 Teaching Design 确认后，才创建正式正文 `Chapters/Chapter01_Dataset.md`。

## 2026-07-01 中文优先语言规范报告

### 完成内容

- 在 `PROJECT_CHARTER.md` 中新增项目级语言规范。
- 在 `BOOK_BIBLE.md` 中新增中文优先写作规则。
- 在 `GLOSSARY.md` 中新增术语使用规则。
- 在 `Chapter_Template.md` 和 `Teaching_Checklist.md` 中加入中文优先要求。
- 在 `CHATGPT_HANDOFF_PROMPT.md` 中提醒 ChatGPT 网页端遵守中文优先。
- 在 `Chapter01_SPEC.md` 的 Ready Criteria 中加入中文优先检查。
- 在 `DECISIONS.md` 中新增 ADR-006。

### 规则摘要

- 正文、说明、任务和评审优先使用中文。
- Dataset、Sample、Feature、Embedding、Loss、Transformer、DataLoader、API 等专用术语可以保留英文。
- 文件名、代码、命令和已有工程约定暂不强行中文化。

## 2026-07-01 Chapter 01 教学设计启动报告

### 完成内容

- 创建 `Chapter01_TEACHING_DESIGN.md`，作为 Chapter 01 的 Phase 2 教学设计蓝图。
- 在 `PROJECT_CHARTER.md` 中加入 Idea -> Teaching Design -> Book Content -> Review 四层流程。
- 在 `Teaching_Checklist.md` 中强化 Phase 2 检查项。
- 更新 `CHATGPT_HANDOFF_PROMPT.md`，提醒 ChatGPT 不把临时回答直接写成正文。
- 更新 `STATUS.md`，将 Chapter 01 状态改为 Teaching Design。
- 新增 `Task 014`、`Task 015` 和 `Task 016`。
- 新增 ADR-007 和 V0.4 版本记录。

### Chapter 01 当前教学设计核心

- 错误认知：Dataset 就是一堆图片、一堆点云，或者一个训练文件夹。
- 核心新认知：Dataset 是 AI 对真实世界的一次采样，是 AI 全部经验的来源。
- 一年后记忆句：AI 从来没有见过世界，它只见过 Dataset。
- 能力目标：读者能够判断一个工业 Dataset 为什么会失败，并知道如何重新设计它。

### 下一步建议

- 评审 `Chapter01_TEACHING_DESIGN.md`。
- 确认主案例、开场故事、Coverage 译名和是否加入 Dataset/DataLoader 区分小节。
- 评审通过后，再决定是否进入 Phase 3 Draft。

## 2026-07-01 Chapter 01 Design Review 吸收报告

### 完成内容

- 更新 `Chapter01_TEACHING_DESIGN.md`，吸收 Design Review。
- 更新 `Chapter01_SPEC.md`，同步主案例、Coverage 和 Draft Gate。
- 更新 `GLOSSARY.md`，固定 `Coverage（经验覆盖）`。
- 新增 `ONE_LINE_MENTAL_MODELS.md`，维护每章一句话心智模型。
- 更新 `CASE_LIBRARY.md`，新增并选定“焊接机器人换线失效”案例。
- 更新 `PROJECT_CHARTER.md`、`Teaching_Checklist.md`、`Chapter_Template.md`、`README.md` 和 `CHATGPT_HANDOFF_PROMPT.md`，加入一句话心智模型规则。
- 新增 `Task 017` 和 `Task 018`。
- 新增 ADR-008、ADR-009 和 V0.5 版本记录。

### 关键评审结论

- Chapter 01 主案例：焊接机器人搬线后准确率从 99% 下降到 60%。
- 开场方式：悬疑 Hook，不提前揭示 Dataset。
- Coverage：首次写作 `Coverage（经验覆盖）`，之后简称 Coverage，不翻译为“覆盖率”。
- Dataset vs DataLoader：不放正文主线，改为作者旁白 Sidebar。
- 新增小节：为什么人类不需要 Dataset？
- 定义策略：前 5 页不出现 Dataset 正式定义，先让读者自己需要这个定义。
- 一句话心智模型：AI 从来没有见过世界，它只见过 Dataset。

### 下一步建议

- 确认 Chapter 01 Draft Gate。
- 决定 Coverage 图示采用临时黑白方格还是正式插图。
- 决定 Sidebar 和“为什么人类不需要 Dataset？”在正文中的准确位置。

## 2026-07-01 GitHub Issue Bridge 报告

### 完成内容

- 创建 `AGENT_COMMUNICATION.md`，定义 Codex 与 ChatGPT 的 GitHub Issue 中转协议。
- 创建 `Bridge/` 本地中转目录。
- 创建 `Prompts/github_issue_author_review.md`。
- 创建 `.github/ISSUE_TEMPLATE/author_review.yml`。
- 创建 `Scripts/github_issue_bridge.mjs`。
- 更新 `PROJECT_CHARTER.md`、`README.md` 和 `CHATGPT_HANDOFF_PROMPT.md`。
- 新增 ADR-010、V0.6 版本记录、`Task 019` 和 `Task 020`。

### 使用方式

设置 `GITHUB_TOKEN` 后，可运行：

```powershell
node Scripts/github_issue_bridge.mjs create --prompt Bridge/to_chatgpt/current_prompt.md --title "Author Review: Chapter 01 Draft Gate" --labels author-review,needs-chatgpt,chapter-01,draft-gate
node Scripts/github_issue_bridge.mjs fetch --issue 12
```

### 当前限制

- 当前本机尚未设置 `GITHUB_TOKEN`，所以还不能实际创建 Issue。
- 该方案不需要 OpenAI API。
- ChatGPT 网页端仍需要能够打开 GitHub Issue 并在其中回复，或由用户将 Issue 链接交给 ChatGPT。

## 2026-07-01 GitHub Issue Watcher 报告

### 完成内容

- 创建 `Scripts/github_issue_watcher.mjs`。
- 支持 `once` 模式和 `watch` 轮询模式。
- watcher 会查找带 `needs-codex` 标签的 open Issue。
- 发现新人工评论后，写入：
  - `Bridge/from_chatgpt/issue-<number>-latest.md`
  - `Bridge/from_chatgpt/codex-next-prompt.md`
- watcher 会尽量把 Issue 标签从 `needs-codex` 切到 `codex-processing`。
- 更新 `AGENT_COMMUNICATION.md`，定义 Issue 状态流转。
- 新增 ADR-011、V0.7 版本记录、`Task 021` 和 `Task 022`。

### 使用方式

检查一次：

```powershell
node Scripts/github_issue_watcher.mjs once --label needs-codex
```

持续轮询：

```powershell
node Scripts/github_issue_watcher.mjs watch --label needs-codex --interval 60
```

### 当前安全策略

- watcher 不自动运行 `codex exec`。
- watcher 只负责发现回复并生成下一步提示词。
- 自动执行 Codex 修改需要后续单独确认。

## 2026-07-01 Issue #1 Teaching Design Review 消化报告

### 完成内容

- 将 Lead Author 的 Issue #1 评审发布到 GitHub Issue。
- watcher 成功抓取 Issue #1 最新回复并生成 `codex-next-prompt.md`。
- 更新 `Chapter01_TEACHING_DESIGN.md`。
- 更新 `Chapter01_SPEC.md`。
- 更新 `STATUS.md`，将 Chapter 01 状态改为 Teaching Design Revision。
- 更新 `WEB_CHAT_BRIEF.md`、`CODEX_TASKS.md` 和 `CHANGELOG.md`。

### Draft Gate 结论

- 状态：Needs Revision。
- 原因：Teaching Design 已成熟，但需要完成 Coverage 图示策略、Sidebar 位置、人类与 Dataset 小节和唯一 One-line Mental Model 的修订后，再进行 Draft Gate Review。

### 已完成修订

- Coverage 图示 Phase 2 使用 ASCII 黑白方格。
- 正式插图后置到 Phase 5 Technical Review。
- Dataset vs DataLoader Sidebar 放在 Dataset 概念建立之后。
- “为什么人类不需要 Dataset？”作为独立二级小节。
- Chapter 01 唯一 One-line Mental Model 固定为：“AI 从来没有见过世界，它只见过 Dataset。”

### 下一步建议

- 再次发起 Chapter 01 Draft Gate Review。
- 如果下一轮评审为 Ready，再进入 Phase 3 Draft。
