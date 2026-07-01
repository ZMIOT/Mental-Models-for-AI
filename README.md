# Mental Models for AI

一个长期维护的 AI 心智模型知识工程（Knowledge Repository），当前目标是写作一本面向工业 3D 视觉工程师的《Deep Learning Mental Models》。

本仓库是项目的唯一事实来源（Single Source of Truth）。项目不依赖 ChatGPT 或 Codex 的会话上下文，而是把所有重要结论沉淀到仓库文档中。

ChatGPT 作为 Lead Author，负责教学设计、知识体系、心智模型、类比、工业案例和章节评审。Codex 作为 Project Maintainer，负责项目结构、Markdown 维护、术语统一、知识图谱同步、目录维护和 Git 提交。

## 协作入口

- `PROJECT_CHARTER.md`: 项目最高层协作规范，定义角色、流程、文档优先级和交接格式。
- `BOOK_BIBLE.md`: 写作宪法，定义风格、章节模板和质量标准。
- `CURRICULUM.md`: 课程地图，定义分卷结构、章节顺序和章节边界。
- `Chapter01_SPEC.md`: Chapter 01 的章节规格，定义目标、边界和学习结果。
- `Chapter_Template.md`: 所有正式章节的共用 Markdown 模板。
- `Teaching_Checklist.md`: 每章进入发布前的教学质量检查清单。
- `DECISIONS.md`: 长期架构和教学决策记录。
- `CHANGELOG.md`: 项目版本演进历史。
- `WEB_CHAT_BRIEF.md`: ChatGPT 网页讨论后的结构化摘要。
- `CODEX_TASKS.md`: Codex 下一步需要执行的明确任务。
- `CODEX_REPORT.md`: Codex 完成任务后的回写报告，供 ChatGPT 继续评审。
- `CHATGPT_HANDOFF_PROMPT.md`: 可复制到 ChatGPT 网页端的项目启动提示词。
- `STATUS.md`: 章节和仓库状态。

## 标准工作流

1. 在 ChatGPT 网页端讨论课程地图、章节边界、教学思路、类比、案例和结构。
2. 将讨论结果沉淀到 `WEB_CHAT_BRIEF.md`。
3. 将可执行任务写入 `CODEX_TASKS.md`。
4. Codex 读取 `PROJECT_CHARTER.md`、`BOOK_BIBLE.md`、`CURRICULUM.md`、`KNOWLEDGE_MAP.md`、`WEB_CHAT_BRIEF.md` 和 `CODEX_TASKS.md` 后修改仓库。
5. Codex 更新 `STATUS.md` 和 `CODEX_REPORT.md`，并提交 commit。
6. ChatGPT 读取仓库最新状态继续评审。

## 章节开发阶段

正式章节不是第一步，而是课程开发流程的中后段：

```text
Phase 0: Curriculum
Phase 1: Chapter Spec
Phase 2: Teaching Design
Phase 3: Draft
Phase 4: Technical Review
Phase 5: Teaching Review
Phase 6: Final
```

内容进入正式章节前必须经过四层：

```text
Idea
Teaching Design
Book Content
Review
```

每章先设计，再写正文。Chapter 01 当前进入 Phase 2：Teaching Design。

## 目录结构

```text
.
├── README.md
├── PROJECT_CHARTER.md
├── BOOK_BIBLE.md
├── CURRICULUM.md
├── Chapter01_SPEC.md
├── Chapter01_TEACHING_DESIGN.md
├── Chapter_Template.md
├── Teaching_Checklist.md
├── AUTHOR.md
├── KNOWLEDGE_MAP.md
├── GLOSSARY.md
├── CASE_LIBRARY.md
├── DECISIONS.md
├── CHANGELOG.md
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
