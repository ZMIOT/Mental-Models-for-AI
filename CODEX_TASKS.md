# Codex Tasks

Codex 每次工作前先读取本文件，并只执行这里写清楚的任务。不要让 Codex 从聊天记录猜需求。

## 编号规则

- 新任务编号由 Codex 自动维护。
- 追加任务时读取本文件中已有最大编号，并使用下一个连续编号。
- 不复用已经关闭的任务编号。
- 如果 ChatGPT 或人工输入的任务编号与现有编号冲突，Codex 应保留任务含义并自动顺延编号。

## 当前任务队列

### Task 001: 初始化项目骨架

- 状态: Done
- 输入: `Deep_Learning_Mental_Models_Collaboration_Guide.md`
- 目标:
  - 创建核心项目文件。
  - 建立 ChatGPT -> Codex -> ChatGPT 的文档交接渠道。
  - 初始化目录结构。
- 输出:
  - `README.md`
  - `BOOK_BIBLE.md`
  - `WEB_CHAT_BRIEF.md`
  - `CODEX_TASKS.md`
  - `CODEX_REPORT.md`
  - 其他项目基础文件

### Task 002: 等待 ChatGPT 设计 Chapter 01

- 状态: Superseded
- 输入:
  - `WEB_CHAT_BRIEF.md`
  - `BOOK_BIBLE.md`
  - `KNOWLEDGE_MAP.md`
- 目标:
  - 根据 ChatGPT 的章节设计创建 `Chapters/Chapter01_Dataset.md`。
  - 保持统一章节模板。
  - 同步更新 `STATUS.md`、`GLOSSARY.md` 和 `CASE_LIBRARY.md`。
- 验收标准:
  - Chapter 01 至少包含完整目录骨架。
  - 每个小节有明确写作提示。
  - 不引入未登记术语。
- 说明:
  - 本任务被 Curriculum-first 流程取代。正式章节写作前，必须先完成 `CURRICULUM.md`、`Chapter01_SPEC.md`、`Chapter_Template.md` 和 `Teaching_Checklist.md`。

### Task 003: 创建 PROJECT_CHARTER.md

- 状态: Done
- 输入:
  - 当前 ChatGPT Handoff Prompt
  - `BOOK_BIBLE.md`
  - 协作讨论结论（`WEB_CHAT_BRIEF.md` 最新内容）
- 目标:
  - 创建项目最高层协作规范 `PROJECT_CHARTER.md`。
  - 定义 ChatGPT、Codex、Git 仓库三者职责。
  - 定义项目启动流程、工作流程、输出规范及文档优先级。
- 验收标准:
  - 文档结构完整。
  - 能独立指导 ChatGPT 或 Codex 加入项目。
  - 不依赖聊天历史即可理解项目协作方式。
- 注意事项:
  - `PROJECT_CHARTER.md` 为最高层规范，不重复 `BOOK_BIBLE.md` 内容，只引用其职责。

### Task 004: 创建 DECISIONS.md

- 状态: Done
- 输入:
  - `WEB_CHAT_BRIEF.md` 最新讨论
- 目标:
  - 建立长期架构决策记录文档。
  - 提供统一 ADR（Architecture Decision Record）模板。
  - 记录目前已经达成的重要决策。
- 验收标准:
  - 至少包含 ADR 模板。
  - 至少记录当前已确认的重要项目决策。
- 注意事项:
  - 不记录日常讨论，仅记录影响长期架构的重要决定。

### Task 005: 创建 CHANGELOG.md

- 状态: Done
- 输入:
  - 当前仓库状态
- 目标:
  - 建立项目版本日志。
  - 定义版本号规范。
  - 初始化 V0.1 项目记录。
- 验收标准:
  - 包含版本历史模板。
  - 包含当前初始化版本说明。
- 注意事项:
  - `CHANGELOG.md` 仅记录项目演进，不记录讨论内容。

### Task 006: 升级 ChatGPT Handoff Prompt 为 PROJECT_CHARTER

- 状态: Done
- 输入:
  - 当前 ChatGPT Handoff Prompt
  - `WEB_CHAT_BRIEF.md` 最新结论
- 目标:
  - 增加 Lead Author 定义。
  - 增加文档优先级。
  - 增加工作流程。
  - 增加禁止事项。
  - 增加固定输出格式。
  - 增加 Self Review。
  - 增加 Teaching Checklist。
  - 增加文档冲突检测规则。
- 验收标准:
  - `PROJECT_CHARTER.md` 可作为后续所有 ChatGPT 会话的统一启动入口。
- 注意事项:
  - 保持与 `BOOK_BIBLE.md`、`KNOWLEDGE_MAP.md` 等文档一致，不重复维护相同内容。

### Task 007: 更新 README 项目定位

- 状态: Done
- 输入:
  - 当前 README
  - `WEB_CHAT_BRIEF.md` 最新结论
- 目标:
  - 将项目定位修改为长期维护的 Knowledge Repository。
  - 明确 Git 仓库为唯一事实来源。
  - 补充 ChatGPT 与 Codex 协作模式简介。
- 验收标准:
  - README 能让新参与者快速理解项目定位。
- 注意事项:
  - 不涉及章节内容，仅修改项目介绍。

### Task 008: 创建 CURRICULUM.md

- 状态: Done
- 输入:
  - 课程开发流程升级讨论
  - `PROJECT_CHARTER.md`
  - `BOOK_BIBLE.md`
  - `KNOWLEDGE_MAP.md`
- 目标:
  - 创建全书课程地图 `CURRICULUM.md`。
  - 定义 Part I 到 Part VI 的课程结构。
  - 明确 Chapter 01 到后续章节的概念顺序和边界。
- 验收标准:
  - 包含分卷结构。
  - 包含至少 Chapter 01 到 Chapter 07 的明确课程顺序。
  - 明确 Dataset、Sample、Feature、Label、Distribution 等章节边界。
- 注意事项:
  - `CURRICULUM.md` 不是正文，不写章节内容。

### Task 009: 创建 Chapter01_SPEC.md

- 状态: Done
- 输入:
  - `CURRICULUM.md`
  - Dataset 章节边界讨论
- 目标:
  - 创建 Chapter 01 的章节规格。
  - 明确 Dataset 的目标、边界、学习目标、前置知识和下一章。
  - 明确本章不讲 Feature、Label、Gradient、CNN 等后续内容。
- 验收标准:
  - 能独立指导 Chapter 01 后续教学设计。
  - 明确 Learning Objectives 和 Not Learning Objectives。
  - 明确 Ready Criteria。
- 注意事项:
  - 这是规格文件，不是正式正文。

### Task 010: 创建 Chapter_Template.md

- 状态: Done
- 输入:
  - `BOOK_BIBLE.md`
- 目标:
  - 创建所有正式章节共用模板。
  - 提供正式章节骨架和章节规格骨架。
- 验收标准:
  - 模板与 `BOOK_BIBLE.md` 的 14 节结构一致。
  - 明确正式章节不得突破对应 Spec。
- 注意事项:
  - `BOOK_BIBLE.md` 维护原则，`Chapter_Template.md` 维护可复制骨架。

### Task 011: 创建 Teaching_Checklist.md

- 状态: Done
- 输入:
  - 课程开发阶段讨论
  - `PROJECT_CHARTER.md`
  - `BOOK_BIBLE.md`
- 目标:
  - 创建每章发布前的教学质量检查清单。
  - 覆盖 Chapter Spec、Teaching Design、Draft、Technical Review、Teaching Review 和 Final。
- 验收标准:
  - 能用于每章发布前检查。
  - 同时覆盖技术准确性和教学清晰度。
- 注意事项:
  - 清单用于审校，不替代章节模板。

### Task 012: 等待 Chapter 01 教学设计

- 状态: Todo
- 输入:
  - `CURRICULUM.md`
  - `Chapter01_SPEC.md`
  - `Teaching_Checklist.md`
- 目标:
  - 等待 ChatGPT 确认 Chapter 01 主案例、核心类比和教学设计。
  - 进入 Phase 2，而不是直接写 Draft。
- 验收标准:
  - ChatGPT 输出可追加到 `WEB_CHAT_BRIEF.md` 的教学设计摘要。
  - ChatGPT 输出可追加到 `CODEX_TASKS.md` 的下一步任务草案。
- 注意事项:
  - 不直接写 `Chapters/Chapter01_Dataset.md`，除非 Chapter 01 Teaching Design 已确认。

## 新任务模板

```text
### Task NNN: 任务名称

- 状态: Todo
- 输入:
  -
- 目标:
  -
- 验收标准:
  -
- 注意事项:
  -
```
