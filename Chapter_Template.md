# Chapter Template

本文件是所有正式章节的共用模板。`BOOK_BIBLE.md` 定义模板原则，本文件提供可复制的章节骨架。

每一章必须先有 `ChapterNN_SPEC.md`，再进入正式章节正文。

## 文件命名

- 章节规格：`ChapterNN_SPEC.md`
- 正式章节：`Chapters/ChapterNN_Title.md`

## 正式章节模板

```markdown
# Chapter NN: Title

## 1. 故事

写一个具体场景，让读者从熟悉的工业现场进入本章问题。

## 2. 问题

提出本章要解决的核心问题。

## 3. 历史背景

解释这个概念为什么出现，以及它解决了什么旧问题。

## 4. 心智模型

给出本章最重要的类比或直觉。

## 5. 图解

使用 Mermaid、ASCII 图或图片占位解释概念结构。

## 6. 数学直觉

只给必要数学直觉，不用公式堆叠制造门槛。

## 7. 最小代码

用最小代码说明一个核心概念。代码服务理解，不服务框架教学。

## 8. 工业 3D 视觉案例

把概念落到点云、RGBD、结构光、缺陷检测、抓取、手眼标定或机器人视觉场景。

## 9. 常见失败案例

说明这个概念在现场最容易如何被误解，以及误解会造成什么失败。

## 10. AI 实验

设计一个读者可以动手验证的实验。

## 11. Mini Project

设计一个小项目，把本章概念转化为工程动作。

## 12. 知识地图

说明本章概念连接到哪些前后章节。

## 13. 思考题

给出帮助读者迁移到自己现场的问题。

## 14. 总结

用少量要点收束本章，不引入新的大概念。
```

## 章节规格模板

```markdown
# Chapter NN Spec: Title

## Chapter Name

## Chapter Position

- Part:
- Previous Chapter:
- Next Chapter:

## Core Mission

## Why This Chapter Comes Here

## Learning Objectives

## Not Learning Objectives

## Chapter Boundary

### This Chapter Covers

### This Chapter Does Not Cover

## Prerequisites

## Key Mental Model

## Industrial 3D Vision Anchor

## Concepts Introduced

## Suggested Section Intent

## Open Questions

## Ready Criteria
```

## 使用规则

- 正式章节不得突破对应 `ChapterNN_SPEC.md` 的边界。
- 如果写作中发现边界不合理，先修改 Spec，再修改正文。
- 每章只服务一个核心概念。
- 不用本章正文承担后续章节的主要教学任务。

