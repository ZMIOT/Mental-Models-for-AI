# Project Charter

本文件是《Deep Learning Mental Models》知识工程的最高层协作规范。它定义项目身份、参与角色、文档优先级和固定工作流。

具体写作风格由 `BOOK_BIBLE.md` 维护；课程顺序和章节边界由 `CURRICULUM.md` 维护；单章写作前必须先建立对应 `ChapterNN_SPEC.md`。

## 项目身份

《Deep Learning Mental Models》是一个长期维护的 AI 心智模型知识工程，当前目标是写作一本面向工业 3D 视觉工程师的深度学习心智模型书。

项目不追求一次性生成整本书，而是按照课程开发流程，通过持续讨论、沉淀、重构、评审和版本管理，让内容逐步达到出版质量。

## 唯一事实来源

Git 仓库是唯一事实来源（Single Source of Truth）。

- 不依赖 ChatGPT 网页会话历史。
- 不依赖 Codex 会话历史。
- 不依赖任何 Agent 的长期记忆。
- 任何重要结论必须沉淀到仓库文档。

## 角色定义

### ChatGPT: Lead Author

ChatGPT 是项目的 Lead Author，负责内容方向与教学质量。

职责：

- 教学设计
- 心智模型设计
- 类比设计
- 工业案例设计
- 章节结构评审
- 知识体系设计
- 学习路线设计
- 输出 `WEB_CHAT_BRIEF.md` 追加内容
- 输出 `CODEX_TASKS.md` 任务草案

不负责：

- Git 管理
- 大规模文件重构
- 批量 Markdown 修改
- 在未沉淀到仓库的情况下改变项目方向

### Codex: Project Maintainer

Codex 是项目的 Project Maintainer，负责仓库维护与执行。

职责：

- 创建和维护项目结构
- 维护 Markdown 文件
- 重构章节
- 统一术语
- 同步知识图谱
- 更新目录与状态
- 维护 Mermaid 图和图示占位
- 更新 `CODEX_REPORT.md`
- 提交并推送 Git commit

不负责：

- 单方面改变写作哲学
- 单方面决定教学主线
- 在缺少 `WEB_CHAT_BRIEF.md` 或 `CODEX_TASKS.md` 输入时猜测重大方向

### Git Repository: Source of Truth

仓库负责承载长期记忆。所有参与者必须以仓库文件为准。

## 文档优先级

当文档之间出现冲突时，按以下顺序处理：

1. `PROJECT_CHARTER.md`: 项目协作宪章和最高层流程。
2. `BOOK_BIBLE.md`: 写作宪法、章节模板和内容质量标准。
3. `CURRICULUM.md`: 课程地图、章节顺序和章节边界。
4. `KNOWLEDGE_MAP.md`: 知识关系和章节概念位置。
5. `GLOSSARY.md`: 术语唯一解释。
6. `CASE_LIBRARY.md`: 工业案例库。
7. `ChapterNN_SPEC.md`: 单章规格，定义本章目标、边界和学习结果。
8. `Chapter_Template.md`: 正式章节骨架。
9. `Teaching_Checklist.md`: 教学质量检查清单。
10. `STATUS.md`: 章节和项目状态。
11. `WEB_CHAT_BRIEF.md`: ChatGPT 最新讨论沉淀。
12. `CODEX_TASKS.md`: Codex 当前执行任务。
13. `CODEX_REPORT.md`: Codex 执行回写。
14. 章节正文和其他辅助材料。

冲突不能静默处理。发现冲突时，必须在相关输出中说明冲突位置，并提出需要更新的文件。

## 固定工作流

1. ChatGPT 读取仓库入口文档。
2. 用户与 ChatGPT 讨论课程地图、章节边界、教学设计、结构、类比和案例。
3. ChatGPT 输出可追加到 `WEB_CHAT_BRIEF.md` 的摘要。
4. ChatGPT 输出可追加到 `CODEX_TASKS.md` 的任务草案。
5. Codex 读取 `PROJECT_CHARTER.md`、`BOOK_BIBLE.md`、`CURRICULUM.md`、`KNOWLEDGE_MAP.md`、`GLOSSARY.md`、`WEB_CHAT_BRIEF.md` 和 `CODEX_TASKS.md`。
6. Codex 执行任务并维护相关文件。
7. Codex 更新 `STATUS.md`、`CODEX_REPORT.md`、必要时更新 `DECISIONS.md` 和 `CHANGELOG.md`。
8. Codex 提交并推送 Git commit。
9. ChatGPT 读取最新仓库状态继续评审。

## 语言规范

本项目采用中文优先原则：

- 能用中文表达的正文、说明、评审和任务描述，必须优先使用中文。
- 专用术语可以保留英文，例如 Dataset、Sample、Feature、Embedding、Loss、Transformer、DataLoader、API。
- 英文术语第一次进入正式内容时，应尽量给出中文解释或心智模型。
- 不为了显得专业而使用不必要的英文。
- 文件名、代码、命令、API、缩写和已有约定可以保留英文。
- 如果中文译名尚未稳定，可以暂时保留英文，并在 `GLOSSARY.md` 标记“译名待确认”。

## Curriculum-first 开发流程

正式章节不能直接开写。所有章节必须经过以下阶段：

| Phase | 名称 | 产物 | 目的 |
| --- | --- | --- | --- |
| Phase 0 | 课程设计（Curriculum） | `CURRICULUM.md` | 确定全书顺序、分卷结构和章节边界。 |
| Phase 1 | 章节设计（Chapter Spec） | `ChapterNN_SPEC.md` | 确定单章目标、边界、前后关系和学习目标。 |
| Phase 2 | 教学设计（Teaching Design） | `WEB_CHAT_BRIEF.md` / `CODEX_TASKS.md` | 确定核心类比、主案例、失败案例和实验方向。 |
| Phase 3 | 初稿（Draft） | `Chapters/ChapterNN_Title.md` | 写正式正文。 |
| Phase 4 | 技术审校（Technical Review） | Review notes / `CODEX_REPORT.md` | 检查技术准确性、术语和知识关系。 |
| Phase 5 | 教学审校（Teaching Review） | Review notes / revisions | 检查教学顺序、类比、案例和读者体验。 |
| Phase 6 | 最终版（Final） | Final chapter | 达到可发布质量。 |

所有内容必须先通过作者筛选。项目不追求快速回答问题，而是判断一个想法是否值得进入书。

内容进入正式章节前必须经过四层：

```text
Idea
↓
Teaching Design
↓
Book Content
↓
Review
```

禁止从 Idea 直接进入 Book Content。

每章进入 Phase 2 时，必须先回答三个问题：

1. 这一章最想改变读者的哪个错误认知？
2. 如果读者一年后只记住一句话，希望是哪一句？
3. 这一章结束后，读者应该获得什么能力？

每章教学设计固定顺序：

1. Chapter Goal
2. Misconception
3. Mental Model
4. Story
5. Teaching Flow
6. Experiment
7. Draft

工作流顺序：

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

## ChatGPT 固定输出格式

每轮网页讨论结束后，ChatGPT 必须输出两部分。

第一部分：`WEB_CHAT_BRIEF.md` 追加内容

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

第二部分：`CODEX_TASKS.md` 任务草案

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

任务编号可以由 ChatGPT 暂写为 `NNN`。Codex 追加到仓库时必须根据当前最大编号自动顺延。

## Codex 固定输出要求

Codex 执行任务时必须：

- 保留既有文档边界。
- 遵守中文优先语言规范。
- 不把讨论记录混入决策文档。
- 不把写作规范重复复制到多个文件。
- 不直接创建正式章节，除非对应 `ChapterNN_SPEC.md` 已经 Ready。
- 不把临时回答直接写成正文；必须先进入 Teaching Design。
- 任务完成后更新 `CODEX_TASKS.md` 状态。
- 重要架构决策写入 `DECISIONS.md`。
- 项目版本演进写入 `CHANGELOG.md`。
- 执行结果写入 `CODEX_REPORT.md`。

## 禁止事项

- 禁止依赖未沉淀到仓库的聊天上下文做长期决策。
- 禁止在章节中引入未登记或冲突的核心术语。
- 禁止绕过 `BOOK_BIBLE.md` 修改章节模板。
- 禁止绕过 `CURRICULUM.md` 和 `ChapterNN_SPEC.md` 直接写正式章节。
- 禁止从 Idea 直接进入 Book Content。
- 禁止在可清楚使用中文表达时大量使用英文叙述。
- 禁止把日常讨论写入 `DECISIONS.md`。
- 禁止把任务执行细节写入 `WEB_CHAT_BRIEF.md`。
- 禁止在没有说明原因的情况下改变文档优先级。

## Self Review

ChatGPT 在输出交接内容前应检查：

- 是否能让 Codex 不读聊天记录也能执行。
- 是否区分了讨论结论和执行任务。
- 是否存在与 `BOOK_BIBLE.md`、`GLOSSARY.md` 或 `KNOWLEDGE_MAP.md` 的冲突。
- 是否存在与 `CURRICULUM.md` 或对应 `ChapterNN_SPEC.md` 的边界冲突。
- 是否把待决问题明确列出。

Codex 在提交前应检查：

- 是否完成任务验收标准。
- 是否更新了相关状态文件。
- 是否没有重复维护同一规则。
- 是否保留了 ChatGPT 的教学意图。

## Teaching Checklist

章节设计进入 Codex 执行前，ChatGPT 应尽量提供：

- 章节在 `CURRICULUM.md` 中的位置。
- 对应 `ChapterNN_SPEC.md` 的边界。
- 本章要改变的错误认知。
- 本章一年后仍希望读者记住的一句话。
- 本章结束后读者获得的能力。
- 章节核心问题。
- 章节心智模型。
- 工业 3D 视觉案例。
- 常见误解或失败案例。
- 最小代码或实验方向。
- 需要新增或确认的术语。
- 需要更新的知识地图关系。

## 文档冲突处理

如果发现文档之间冲突：

1. 明确列出冲突文件和冲突内容。
2. 判断冲突属于协作流程、写作规范、知识关系、术语解释还是任务状态。
3. 根据文档优先级提出修正方向。
4. 只在任务允许时修改冲突文件；否则写入 `CODEX_REPORT.md` 等待确认。
