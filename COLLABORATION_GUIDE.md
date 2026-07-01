# Deep Learning Mental Models ------ 项目协作规范（v1.0）

## 项目目标

本项目不是一次性的聊天记录，而是一个长期维护的知识工程。

目标：

- 写作一本出版质量的《Deep Learning Mental Models》
- 面向工业 3D 视觉工程师
- 使用 Git 仓库作为唯一事实来源（Single Source of Truth）
- ChatGPT 与 Codex 分工协作

## 总体架构

```text
                 Git Repository
          （唯一事实来源 / Source of Truth）
                        │
        ┌───────────────┴────────────────┐
        │                                │
  ChatGPT（网页）                    Codex
        │                                │
思考、推导、类比                  编写、重构、维护
知识体系设计                      修改 Markdown
教学设计                          统一术语
工业案例                          维护知识图谱
章节评审                          更新目录结构
```

原则：

> 不依赖聊天上下文，不依赖记忆，只依赖仓库中的文档。

## 双方职责

### ChatGPT

负责：

- 教学设计
- 心智模型
- 类比
- 工业案例
- 整体结构
- 内容评审
- 学习路线设计
- 知识图谱设计

不负责：

- 文件组织
- 大规模重构
- 批量修改
- Git 管理

### Codex

负责：

- 创建项目结构
- 维护 Markdown
- 重构章节
- 更新目录
- Mermaid 图
- 插图占位
- 自动检查风格一致性
- Git Commit
- 文档整理

不负责：

- 决定教学思路
- 创造类比
- 改变写作哲学

## 核心桥梁

- `WEB_CHAT_BRIEF.md`: 网页讨论结束后更新，作为 ChatGPT 到 Codex 的输入。
- `CODEX_TASKS.md`: 只写 Codex 下一步需要执行的任务。
- `CODEX_REPORT.md`: Codex 完成任务后回写给 ChatGPT 的报告。
- `STATUS.md`: 记录章节状态。

## 长期原则

1. Git 仓库是真实来源。
2. ChatGPT 不依赖聊天历史，而依赖仓库文档。
3. 每次讨论结束必须沉淀到 `WEB_CHAT_BRIEF.md`。
4. 每次 Codex 工作前必须更新 `CODEX_TASKS.md`。
5. 所有章节保持统一模板和统一术语。

