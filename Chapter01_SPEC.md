# Chapter 01 Spec: Dataset

本文件是 Chapter 01 的章节规格，不是正文。正式写作前，必须先让本文件达到 Ready 状态。

## Chapter Name

Dataset

## Chapter Position

- Part: Part I - How AI Sees the World
- Previous Chapter: 无
- Next Chapter: Chapter 02 - Sample

## Core Mission

建立一个核心心智模型：

> Dataset 是 AI 的人生经历。

读者读完本章后，应理解 Dataset 不是一个文件夹，也不是简单的数据量，而是 AI 能够从中形成经验的世界样本集合。

## Why This Chapter Comes First

Dataset 是 AI 与真实世界的第一层接口。

在工业 3D 视觉中，现场失败往往不是因为模型“不够聪明”，而是因为 Dataset 没有覆盖真实世界中会发生的变化。先理解 Dataset，后续才能理解 Sample、Feature、Label、Distribution 和 Generalization。

## Learning Objectives

读完本章后，读者应该能够：

- 解释 Dataset 为什么是 AI 的经验集合。
- 区分“有很多数据”和“有好的 Dataset”。
- 判断一个 Dataset 是否覆盖真实工业现场。
- 理解 Coverage 对现场泛化能力的影响。
- 发现 Dataset 中的采样偏差、场景缺失和边界条件缺失。
- 为一个工业 3D 视觉任务设计 Dataset 的基本结构。
- 理解为什么现场失败常常不是 DataLoader 问题。

## Not Learning Objectives

本章不要求读者：

- 会写深度学习框架中的 DataLoader。
- 理解 CNN、Transformer 或任何具体模型结构。
- 掌握 Gradient、Loss 或 Optimization 的数学细节。
- 系统掌握 Label 设计。
- 系统掌握 Feature 提取。

## Chapter Boundary

### This Chapter Covers

- Dataset 作为经验集合的心智模型。
- Dataset 与真实世界之间的关系。
- 数据量、覆盖范围、场景多样性和边界情况。
- 工业现场 Dataset 的常见缺陷。
- 点云、RGBD、缺陷检测、抓取等场景中的 Dataset 直觉。

### This Chapter Does Not Cover

- Sample 的内部结构，只说明 Dataset 由 Sample 组成。
- Feature 的提取方式，只说明 Dataset 会影响可学习信号。
- Label 的设计细节，只说明 Dataset 可能包含标注。
- Distribution 的系统理论，只埋伏笔说明现场和训练数据可能不同。
- Augmentation 的具体方法，只埋伏笔说明可以扩展经验范围。
- Generalization 的完整机制，只说明 Dataset 会影响泛化。
- Gradient、CNN、Transformer、Attention 等模型内部机制。

## Prerequisites

无。

本章是全书第一个概念入口，只假设读者熟悉基本工业现场经验，例如相机采集、工件变化、光照变化、缺陷检测或机器人视觉任务。

## Key Mental Model

Dataset = AI 的人生经历。

一个人的判断来自过去见过什么、没见过什么、见过多少变化、是否见过极端情况。AI 也是一样。Dataset 决定了 AI 的经验范围。

## Industrial 3D Vision Anchor

候选主案例：

- 点云缺陷检测 Dataset。
- 结构光测量异常 Dataset。
- 抓取位姿估计 Dataset。
- RGBD 工件识别 Dataset。

推荐主线：

> 一个模型在实验室测试很好，但到现场后遇到反光、遮挡、不同批次工件、夹具变化和点云缺失就失败。问题不是模型突然变笨，而是它的人生经历里没有这些现场情况。

## Concepts Introduced

| 概念 | 本章处理方式 |
| --- | --- |
| Dataset | 系统讲解 |
| Sample | 只做铺垫，下一章展开 |
| Feature | 只做铺垫，不展开 |
| Label | 只做铺垫，不展开 |
| Distribution | 只做铺垫，后续章节展开 |
| Coverage | 系统讲解为 Dataset 质量核心 |
| Generalization | 只建立直觉，后续章节展开 |

## Suggested Section Intent

1. 故事：现场模型失败来自没见过真实变化。
2. 问题：Dataset 到底是不是“越多越好”？
3. 历史背景：从规则系统到数据驱动系统，经验变成核心资产。
4. 心智模型：Dataset 是 AI 的人生经历。
5. 图解：真实世界到 Dataset 的采样过程。
6. 数学直觉：覆盖范围比单纯数量更重要。
7. 最小代码：用简单样本分布展示训练范围和测试范围不一致。
8. 工业 3D 视觉案例：点云缺陷检测或结构光异常。
9. 常见失败案例：实验室成功，现场失败。
10. AI 实验：改变 Dataset 覆盖范围观察模型行为。
11. Mini Project：为一个缺陷检测任务设计 Dataset 清单。
12. 知识地图：Dataset -> Sample -> Feature -> Label -> Distribution。
13. 思考题：你的现场数据缺哪类人生经历？
14. 总结：Dataset 决定 AI 见过什么，也决定它容易在哪里失败。

## Open Questions

- 第一章主案例最终选择点云缺陷检测，还是结构光测量异常？
- 是否在本章引入 Coverage 的中文固定译名？
- 是否需要把 Dataset 和 DataLoader 的区别作为一个小节？

## Ready Criteria

- 章节边界清楚，不和 Chapter 02 Sample 重叠。
- 主案例已确定。
- 核心类比已确定。
- 本章新增术语已同步到 `GLOSSARY.md`。
- 本章知识关系已同步到 `KNOWLEDGE_MAP.md`。
- 章节设计遵守中文优先原则，除 Dataset、Sample、Feature、Coverage 等专用术语外，不使用不必要的英文。
- Teaching Checklist 已通过。
