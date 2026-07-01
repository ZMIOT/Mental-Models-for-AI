# Mental Models for AI

一本面向工业 3D 视觉工程师的深度学习心智模型书。

本仓库是项目的唯一事实来源。ChatGPT 负责思考、教学设计、类比、案例和评审；Codex 负责文件组织、Markdown 维护、重构、目录更新、图示占位和提交记录。

## 协作入口

- `BOOK_BIBLE.md`: 写作宪法，定义风格、章节模板和质量标准。
- `WEB_CHAT_BRIEF.md`: ChatGPT 网页讨论后的结构化摘要。
- `CODEX_TASKS.md`: Codex 下一步需要执行的明确任务。
- `CODEX_REPORT.md`: Codex 完成任务后的回写报告，供 ChatGPT 继续评审。
- `STATUS.md`: 章节和仓库状态。

## 标准工作流

1. 在 ChatGPT 网页端讨论教学思路、类比、案例和结构。
2. 将讨论结果沉淀到 `WEB_CHAT_BRIEF.md`。
3. 将可执行任务写入 `CODEX_TASKS.md`。
4. Codex 读取 `BOOK_BIBLE.md`、`KNOWLEDGE_MAP.md`、`WEB_CHAT_BRIEF.md` 和 `CODEX_TASKS.md` 后修改仓库。
5. Codex 更新 `STATUS.md` 和 `CODEX_REPORT.md`，并提交 commit。
6. ChatGPT 读取仓库最新状态继续评审。

## 目录结构

```text
.
├── README.md
├── BOOK_BIBLE.md
├── AUTHOR.md
├── KNOWLEDGE_MAP.md
├── GLOSSARY.md
├── CASE_LIBRARY.md
├── STATUS.md
├── WEB_CHAT_BRIEF.md
├── CODEX_TASKS.md
├── CODEX_REPORT.md
├── COLLABORATION_GUIDE.md
├── Chapters/
├── Figures/
├── Experiments/
├── Projects/
├── References/
└── Scripts/
```

