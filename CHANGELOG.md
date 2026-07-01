# Changelog

本文件记录项目版本演进，不记录日常讨论内容。

## 版本规范

当前项目使用 `V0.x` 记录早期知识工程阶段：

- `V0.1`: 项目协作结构建立。
- `V0.2`: 第一章创作流程进入可重复状态。
- `V0.3`: 核心知识图谱和术语系统稳定。
- `V1.0`: 第一版完整书稿达到可发布状态。

## [V0.1] - 2026-07-01

### Added

- 初始化项目仓库结构。
- 建立 ChatGPT 与 Codex 的文档交接渠道。
- 新增 `README.md`、`BOOK_BIBLE.md`、`WEB_CHAT_BRIEF.md`、`CODEX_TASKS.md` 和 `CODEX_REPORT.md`。
- 新增 `KNOWLEDGE_MAP.md`、`GLOSSARY.md` 和 `CASE_LIBRARY.md`。
- 新增 `PROJECT_CHARTER.md` 作为最高层协作规范。
- 新增 `DECISIONS.md` 记录长期项目决策。
- 新增 `CHATGPT_HANDOFF_PROMPT.md` 作为网页 ChatGPT 启动入口。

### Changed

- 将项目定位明确为长期维护的 Knowledge Repository。
- 将 ChatGPT 定位为 Lead Author。
- 将 Codex 定位为 Project Maintainer。
- 将任务编号改为 Codex 自动递增维护。

## [V0.2] - 2026-07-01

### Added

- 新增 `CURRICULUM.md`，定义全书课程地图、分卷结构和章节边界。
- 新增 `Chapter01_SPEC.md`，定义 Dataset 章节规格。
- 新增 `Chapter_Template.md`，提供正式章节和章节规格模板。
- 新增 `Teaching_Checklist.md`，覆盖 Phase 1 到 Phase 6 的教学质量检查。

### Changed

- 将项目流程升级为 Curriculum-first 课程开发流程。
- 将正式章节写作调整为 Phase 3，而不是下一步直接执行。
- 将 `PROJECT_CHARTER.md` 文档优先级加入 `CURRICULUM.md` 和 `ChapterNN_SPEC.md`。
- 将旧的 Chapter 01 直接写作任务标记为 Superseded。
- 将 `KNOWLEDGE_MAP.md` 和 `STATUS.md` 同步到新的 Part I 章节顺序。
- 将 Label、Distribution、Coverage、Augmentation 和 Generalization 加入 `GLOSSARY.md`。

## [V0.3] - 2026-07-01

### Added

- 在 `PROJECT_CHARTER.md` 中新增中文优先语言规范。
- 在 `BOOK_BIBLE.md` 中新增中文优先写作规则。
- 在 `GLOSSARY.md` 中新增术语使用规则。
- 在 `Teaching_Checklist.md` 中新增中文优先检查项。

### Changed

- 更新 `CHATGPT_HANDOFF_PROMPT.md`，要求网页端 ChatGPT 遵守中文优先。
- 更新 `Chapter01_SPEC.md`，将中文优先加入 Ready Criteria。

## [V0.4] - 2026-07-01

### Added

- 新增 `Chapter01_TEACHING_DESIGN.md`，进入 Chapter 01 Phase 2 教学设计。
- 在 `PROJECT_CHARTER.md` 中新增 Idea -> Teaching Design -> Book Content -> Review 四层流程。
- 在 `Teaching_Checklist.md` 中新增 Phase 2 教学设计检查项。
- 在 `DECISIONS.md` 中新增 ADR-007。

### Changed

- 将 Chapter 01 状态从 Spec Draft 更新为 Teaching Design。
- 更新 `CHATGPT_HANDOFF_PROMPT.md`，要求网页端 ChatGPT 判断内容能否进入书，而不是直接回答问题。

## [V0.5] - 2026-07-01

### Added

- 新增 `ONE_LINE_MENTAL_MODELS.md`，维护每章一句话心智模型。
- 在 `CASE_LIBRARY.md` 中新增并选定“焊接机器人换线失效”主案例。
- 在 `DECISIONS.md` 中新增 ADR-008 和 ADR-009。

### Changed

- 更新 `Chapter01_TEACHING_DESIGN.md`，吸收 Design Review。
- 将 Chapter 01 开场改为悬疑 Hook，不提前揭示 Dataset。
- 将 Coverage 固定为 `Coverage（经验覆盖）`，不翻译为“覆盖率”。
- 将 Dataset vs DataLoader 改为 Sidebar，而不是正文主线。
- 将 Chapter 01 状态更新为 Teaching Design Review。

## [V0.6] - 2026-07-01

### Added

- 新增 `AGENT_COMMUNICATION.md`，定义 Codex 与 ChatGPT 的 GitHub Issue 中转协议。
- 新增 `Scripts/github_issue_bridge.mjs`，支持创建 Author Review Issue 和拉取 Issue 评论。
- 新增 `.github/ISSUE_TEMPLATE/author_review.yml`。
- 新增 `Bridge/` 本地中转目录。
- 新增 `Prompts/github_issue_author_review.md`。

### Changed

- 将 GitHub Issue 中转流程写入 `PROJECT_CHARTER.md`、`README.md` 和 `CHATGPT_HANDOFF_PROMPT.md`。
- 新增 `Task 019` 和 `Task 020`。

## 版本记录模板

```text
## [Vx.y] - YYYY-MM-DD

### Added

-

### Changed

-

### Fixed

-

### Removed

-
```
