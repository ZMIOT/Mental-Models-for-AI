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

