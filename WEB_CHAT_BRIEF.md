# Web Chat Brief

ChatGPT 网页端每次讨论结束后，将结果写入本文件。Codex 不需要阅读聊天记录，只读取这里的结构化摘要。

## 最新摘要

日期: 2026-07-01

### 今天讨论了什么

- 建立《Deep Learning Mental Models》的长期知识工程。
- 使用 GitHub 仓库作为 ChatGPT 与 Codex 的唯一事实来源。
- 明确 ChatGPT 负责思考、教学、类比、案例和评审；Codex 负责文件、重构、维护和提交。

### 已达成共识

- 仓库是唯一事实来源，不依赖聊天上下文。
- `WEB_CHAT_BRIEF.md` 是 ChatGPT 到 Codex 的上下文桥梁。
- `CODEX_TASKS.md` 是 Codex 的任务入口。
- `CODEX_REPORT.md` 是 Codex 回写给 ChatGPT 的结果报告。
- 每章使用统一模板。

### 新增想法

- 第一章建议从 Dataset 开始，因为它最容易连接真实工业现场。
- 案例库优先围绕点云、焊枪、抓取、手眼标定、RGBD、双目、结构光和缺陷检测展开。

### 待解决问题

- 确认第一章标题和开篇故事。
- 确认全书章节数量和一级目录。
- 确认是否采用中英双语术语表。

## 2026-07-01 摘要

### 今天讨论了什么

- 明确了《Deep Learning Mental Models》的长期定位：不是一本概念教材，而是一个长期维护的知识工程（Knowledge Repository）。
- 确定项目采用 Git 仓库作为唯一事实来源（Single Source of Truth），不依赖 ChatGPT 或 Codex 的会话上下文。
- 讨论了 ChatGPT 与 Codex 的职责划分，并确定采用“双 Agent 协作”模式。
- 确定项目采用持续创作方式，而不是一次性生成整本书。
- 讨论了书名、项目品牌及未来系列化扩展方向。
- 讨论了网页 ChatGPT 与 Codex 如何建立稳定协作机制，并设计了统一工作流。
- 评审了 ChatGPT Handoff Prompt，并提出进一步升级建议。

### 已达成共识

- Git 仓库是整个项目唯一事实来源。
- ChatGPT 负责教学设计、知识体系、心智模型、工业案例、章节评审，不负责 Git 管理及大规模文档维护。
- Codex 负责项目结构、Markdown 重构、术语统一、目录维护、知识图谱同步及 Git 提交。
- 每轮讨论结束必须沉淀为 `WEB_CHAT_BRIEF.md`。
- 每次需要 Codex 工作时必须生成 `CODEX_TASKS.md`。
- 所有章节必须遵循 `BOOK_BIBLE.md` 定义的统一模板。
- 所有术语必须遵循 `GLOSSARY.md`。
- 所有知识关系必须遵循 `KNOWLEDGE_MAP.md`。
- ChatGPT 不应依赖聊天历史，而应始终以仓库文档作为项目上下文。

### 修改了哪些理念

- 将项目定位从“写一本深度学习教材”升级为“构建长期维护的 AI 心智模型知识工程”。
- 将 ChatGPT 的定位由“聊天助手”升级为“Lead Author（首席作者）”。
- 将 Codex 的定位由“代码生成工具”升级为“项目维护者（Project Maintainer）”。
- 将 ChatGPT Handoff Prompt 升级为项目级协作规范，建议未来命名为 `PROJECT_CHARTER.md`。
- 将项目组织方式由章节驱动升级为“架构驱动”，强调 Book Bible、Knowledge Map 与 Glossary 的核心地位。

### 新增想法

- 建议新增 `PROJECT_CHARTER.md`，作为整个知识工程最高层协作规范。
- 建议新增 `DECISIONS.md`，记录重要教学与架构决策，避免长期项目出现理念漂移。
- 建议新增 `CHANGELOG.md`，维护项目版本演进历史。
- 建议在 ChatGPT Handoff Prompt 中增加：
  - Lead Author 角色定义；
  - 文档优先级；
  - 固定工作流程；
  - 禁止事项；
  - 固定输出格式；
  - Self Review；
  - Teaching Checklist；
  - 文档冲突检测机制。
- 建议整个项目未来发展为系列教材（Mental Models Series），当前仓库作为第一本《Deep Learning Mental Models》的基础。

### 待解决问题

- 确定 `PROJECT_CHARTER.md` 的最终结构及其与 `BOOK_BIBLE.md` 的边界。
- 确定第一章（Dataset）正式开始创作前需要哪些准备文档达到 Ready 状态。
- 建立章节版本管理规范（Draft / Review / Revision / Final）的具体流程。
- 制定 Mermaid 图、ASCII 图及正式插图的统一规范。
- 制定未来实验代码、Notebook 与章节之间的引用规范。

## 追加模板

```text
## YYYY-MM-DD 摘要

### 今天讨论了什么

-

### 已达成共识

-

### 修改了哪些理念

-

### 新增想法

-

### 待解决问题

-
```
