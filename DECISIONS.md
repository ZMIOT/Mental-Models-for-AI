# Decisions

本文件记录影响项目长期方向的决策。日常讨论、临时任务和执行细节不写入这里。

## ADR 模板

```text
## ADR-NNN: 决策标题

- 日期: YYYY-MM-DD
- 状态: Accepted | Proposed | Superseded
- 背景:
  -
- 决策:
  -
- 影响:
  -
- 相关文件:
  -
```

## ADR-001: 使用 Git 仓库作为唯一事实来源

- 日期: 2026-07-01
- 状态: Accepted
- 背景:
  - 项目需要跨 ChatGPT 网页端和 Codex 长期协作。
  - 聊天历史和模型记忆都不适合作为长期项目事实来源。
- 决策:
  - Git 仓库是项目唯一事实来源。
  - 所有重要结论必须沉淀到仓库文档。
- 影响:
  - ChatGPT 和 Codex 都必须优先读取仓库文件。
  - 网页讨论必须通过 `WEB_CHAT_BRIEF.md` 交接。
  - Codex 执行必须通过 `CODEX_TASKS.md` 交接。
- 相关文件:
  - `PROJECT_CHARTER.md`
  - `WEB_CHAT_BRIEF.md`
  - `CODEX_TASKS.md`

## ADR-002: 采用双 Agent 协作模式

- 日期: 2026-07-01
- 状态: Accepted
- 背景:
  - ChatGPT 更适合教学设计、类比、知识体系和内容评审。
  - Codex 更适合维护仓库、重构 Markdown、同步文件和提交 Git。
- 决策:
  - ChatGPT 定位为 Lead Author。
  - Codex 定位为 Project Maintainer。
- 影响:
  - ChatGPT 不直接承担大规模文件维护。
  - Codex 不单方面改变教学哲学。
  - 双方通过仓库文档协作。
- 相关文件:
  - `PROJECT_CHARTER.md`
  - `COLLABORATION_GUIDE.md`

## ADR-003: 将项目定位为长期知识工程

- 日期: 2026-07-01
- 状态: Accepted
- 背景:
  - 一次性生成整本书难以保证长期一致性和出版质量。
  - 深度学习心智模型需要持续迭代、案例沉淀和术语统一。
- 决策:
  - 本项目定位为长期维护的 Knowledge Repository。
  - 当前仓库作为《Deep Learning Mental Models》的基础。
- 影响:
  - 项目采用持续创作、持续评审、持续重构的方式推进。
  - `BOOK_BIBLE.md`、`KNOWLEDGE_MAP.md` 和 `GLOSSARY.md` 成为长期稳定核心。
- 相关文件:
  - `README.md`
  - `PROJECT_CHARTER.md`
  - `BOOK_BIBLE.md`

## ADR-004: 项目采用架构驱动而非单纯章节驱动

- 日期: 2026-07-01
- 状态: Accepted
- 背景:
  - 只按章节推进容易导致术语漂移、案例重复和知识关系断裂。
  - 本书需要跨章节一致的心智模型和工业案例库。
- 决策:
  - 章节写作必须服从 `BOOK_BIBLE.md`、`KNOWLEDGE_MAP.md` 和 `GLOSSARY.md`。
  - 新章节、新术语和新案例必须同步维护相关核心文件。
- 影响:
  - Codex 执行章节任务时需要检查知识图谱、术语表和案例库。
  - ChatGPT 设计章节时需要明确章节在知识地图中的位置。
- 相关文件:
  - `BOOK_BIBLE.md`
  - `KNOWLEDGE_MAP.md`
  - `GLOSSARY.md`
  - `CASE_LIBRARY.md`

## ADR-005: 采用 Curriculum-first 课程开发流程

- 日期: 2026-07-01
- 状态: Accepted
- 背景:
  - 如果直接写 Chapter 01，后续章节容易重复讲 Dataset、Feature、Label 等概念。
  - 本项目本质上是在开发教材，而不只是写普通章节。
  - 教材需要 Syllabus 和章节规格先行。
- 决策:
  - 正式章节写作前必须先维护 `CURRICULUM.md`。
  - 每章正式正文前必须先创建对应 `ChapterNN_SPEC.md`。
  - 章节开发采用 Phase 0 到 Phase 6：Curriculum、Chapter Spec、Teaching Design、Draft、Technical Review、Teaching Review、Final。
- 影响:
  - `CURRICULUM.md` 成为课程顺序和章节边界的权威来源。
  - `ChapterNN_SPEC.md` 成为单章正文的前置约束。
  - 旧的“直接写 Chapter 01”任务被取代。
- 相关文件:
  - `PROJECT_CHARTER.md`
  - `CURRICULUM.md`
  - `Chapter01_SPEC.md`
  - `Teaching_Checklist.md`

## ADR-006: 采用中文优先语言策略

- 日期: 2026-07-01
- 状态: Accepted
- 背景:
  - 本书面向中文语境下的工业 3D 视觉工程师。
  - 不必要的英文会增加阅读负担，也会削弱教学表达。
  - 专用术语、代码、API 和文件名仍需要保留英文以保持准确性。
- 决策:
  - 正文、说明、任务、评审和模板采用中文优先。
  - Dataset、Sample、Feature、Embedding、Loss、Transformer、DataLoader、API 等专用术语可以保留英文。
  - 英文术语第一次进入正式内容时，应尽量给出中文解释或心智模型。
- 影响:
  - 章节正文和教学设计需要避免不必要的英文叙述。
  - `GLOSSARY.md` 需要维护专用术语的稳定解释。
  - 文件名和已有工程约定暂不强行中文化。
- 相关文件:
  - `PROJECT_CHARTER.md`
  - `BOOK_BIBLE.md`
  - `GLOSSARY.md`
  - `Teaching_Checklist.md`

## ADR-007: 采用作者式四层内容流程

- 日期: 2026-07-01
- 状态: Accepted
- 背景:
  - 项目已经进入创作阶段，但不能把即时回答直接写进书。
  - 本书目标是长期质量，而不是短期问答。
  - 每章需要先设计读者认知变化，再写正文。
- 决策:
  - 所有内容必须经过 Idea -> Teaching Design -> Book Content -> Review。
  - 禁止从 Idea 直接进入 Book Content。
  - 每章 Teaching Design 必须回答三个问题：改变哪个错误认知、一年后希望读者记住哪句话、读者获得什么能力。
  - 每章教学设计按 Chapter Goal、Misconception、Mental Model、Story、Teaching Flow、Experiment、Draft 推进。
- 影响:
  - Chapter 01 先创建 `Chapter01_TEACHING_DESIGN.md`，不直接创建正文。
  - `Teaching_Checklist.md` 增加 Phase 2 检查项。
  - ChatGPT 网页端讨论需要优先判断内容能否进入书。
- 相关文件:
  - `PROJECT_CHARTER.md`
  - `Chapter01_TEACHING_DESIGN.md`
  - `Teaching_Checklist.md`
  - `CHATGPT_HANDOFF_PROMPT.md`

## ADR-008: 每章维护一句话心智模型

- 日期: 2026-07-01
- 状态: Accepted
- 背景:
  - 本书希望成为十年后仍然值得读的教材。
  - 每章需要一个能长期留在读者记忆中的核心句。
  - 这句话不是总结，而是章节灵魂。
- 决策:
  - 每章必须设计一句话心智模型。
  - 一句话心智模型统一维护在 `ONE_LINE_MENTAL_MODELS.md`。
  - 正文、故事、图示、实验和总结都应该服务这句话。
- 影响:
  - Chapter 01 确认为：AI 从来没有见过世界，它只见过 Dataset。
  - Chapter 02、Chapter 03、Chapter 04 先记录 Proposed 版本。
  - 新建章节 Spec 时必须同步检查一句话心智模型。
- 相关文件:
  - `ONE_LINE_MENTAL_MODELS.md`
  - `Chapter01_TEACHING_DESIGN.md`
  - `PROJECT_CHARTER.md`

## ADR-009: Coverage 采用“经验覆盖”解释，不翻译为覆盖率

- 日期: 2026-07-01
- 状态: Accepted
- 背景:
  - “覆盖率”容易让读者误以为 Coverage 是数量比例。
  - 工业 Dataset 的关键不是数据条数，而是真实世界变化空间是否被采样到。
- 决策:
  - Coverage 第一次出现写作 `Coverage（经验覆盖）`。
  - 后续统一简称 Coverage。
  - 不将 Coverage 翻译为“覆盖率”。
- 影响:
  - `GLOSSARY.md` 更新 Coverage 解释。
  - Chapter 01 需要专门说明 Coverage 不是数量，而是世界采样。
  - Coverage 图示将成为全书可复用图示。
- 相关文件:
  - `GLOSSARY.md`
  - `Chapter01_SPEC.md`
  - `Chapter01_TEACHING_DESIGN.md`

## ADR-010: 采用 GitHub Issue 作为 Codex 与 ChatGPT 的中转层

- 日期: 2026-07-01
- 状态: Accepted
- 背景:
  - 用户不希望继续在 Codex 和 ChatGPT 网页端之间复制长文本。
  - 当前没有 OpenAI API key，因此不能使用 API Author Agent。
  - GitHub 已经是项目事实来源的一部分，适合承载设计评审时间线。
- 决策:
  - 采用 GitHub Issue 作为 Codex 与 ChatGPT 的中转层。
  - Codex 负责创建 Author Review Issue 和拉取 Issue 评论。
  - ChatGPT 网页端负责围绕 Issue 进行结构化作者评审。
  - Issue 评论必须先被 Codex 消化为仓库文件，不能直接进入正文。
- 影响:
  - 新增 `AGENT_COMMUNICATION.md`。
  - 新增 GitHub Issue 模板和 `Scripts/github_issue_bridge.mjs`。
  - 后续 Chapter 01 Draft Gate 评审应优先走 GitHub Issue。
- 相关文件:
  - `AGENT_COMMUNICATION.md`
  - `Scripts/github_issue_bridge.mjs`
  - `.github/ISSUE_TEMPLATE/author_review.yml`
  - `CODEX_TASKS.md`

## ADR-011: GitHub Issue watcher 只推进一步，不默认自动执行 Codex

- 日期: 2026-07-01
- 状态: Accepted
- 背景:
  - 用户希望 Codex 能轮询 GitHub Issue，一旦 ChatGPT 回复就继续推进。
  - Issue 评论属于外部输入，可能包含错误、冲突或不适合直接执行的内容。
  - 自动修改仓库需要安全边界。
- 决策:
  - watcher 负责发现 `needs-codex` Issue 的新回复。
  - watcher 负责保存回复并生成 `codex-next-prompt.md`。
  - watcher 不默认运行 `codex exec` 或直接修改仓库。
  - 自动执行 Codex 需要后续单独确认安全策略。
- 影响:
  - 新增 `Scripts/github_issue_watcher.mjs`。
  - Issue 状态流转增加 `codex-processing`。
  - Codex 的实际执行仍保持可审查。
- 相关文件:
  - `AGENT_COMMUNICATION.md`
  - `Scripts/github_issue_watcher.mjs`
  - `CODEX_TASKS.md`
