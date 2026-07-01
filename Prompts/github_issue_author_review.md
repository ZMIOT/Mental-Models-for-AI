# Author Review Issue Prompt

将本模板复制到 `Bridge/to_chatgpt/current_prompt.md`，再由 `Scripts/github_issue_bridge.mjs` 创建 GitHub Issue。

## 评审目标

请以《Deep Learning Mental Models》的 Lead Author 身份，对当前设计做出版级 Design Review。

## 必读文件

- `PROJECT_CHARTER.md`
- `BOOK_BIBLE.md`
- `CURRICULUM.md`
- `Chapter01_SPEC.md`
- `Chapter01_TEACHING_DESIGN.md`
- `ONE_LINE_MENTAL_MODELS.md`
- `Teaching_Checklist.md`

## 当前阶段

Chapter 01 当前处于 Phase 2：Teaching Design Review。

不得直接写正文。只评审是否可以进入 Phase 3 Draft。

## 需要 ChatGPT 判断的问题

1. Chapter 01 Draft Gate 是否可以通过？
2. Coverage 图示应该先用黑白方格，还是直接设计正式插图？
3. Dataset vs DataLoader 的 Sidebar 应该放在哪个位置？
4. “为什么人类不需要 Dataset？”应该作为独立二级小节，还是融入心智模型部分？

## 输出格式

请按以下结构输出：

### Design Review

### Accepted Decisions

### Requested Changes

### Draft Gate

- 状态: Ready | Needs Revision | Blocked
- 原因:

### WEB_CHAT_BRIEF.md 追加内容

### CODEX_TASKS.md 任务草案

