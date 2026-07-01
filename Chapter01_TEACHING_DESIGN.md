# Chapter 01 Teaching Design: Dataset

本文件是 Chapter 01 的教学设计蓝图，不是正文。

本章当前处于 Phase 2：Teaching Design。只有当本文件达到 Ready 状态后，才进入 Phase 3：Draft。

## 设计原则

本章不回答“什么是 Dataset”这个孤立问题。

本章要判断：哪些内容值得进入书，哪些只是临时解释，哪些应该留给后续章节。

所有内容必须经过四层：

```text
Idea
↓
Teaching Design
↓
Book Content
↓
Review
```

## 本章最想改变的错误认知

错误认知：

> Dataset 就是一堆图片、一堆点云，或者一个训练文件夹。

真正要改变的是：

> Dataset 是 AI 对真实世界的一次采样，是 AI 全部经验的来源。

本章成功的标准不是读者会解释 Dataset 的定义，而是读者以后看到模型现场失败时，会先问：

- 它见过这种工况吗？
- 它见过这种变化吗？
- 它的 Dataset 覆盖了真实现场吗？
- 它的人生经历里有没有这个场景？

## 一年后希望读者记住的一句话

> AI 从来没有见过世界，它只见过 Dataset。

这句话是本章的记忆钉子。后续讲 Sample、Feature、Label、Distribution、Generalization 时，都可以回到这句话。

## 本章结束后读者应该获得的能力

读者不只是“知道 Dataset 是什么”，而是能够：

- 判断一个工业 Dataset 为什么会失败。
- 发现 Dataset 中缺失的现场变化。
- 区分数据数量问题和数据覆盖问题。
- 重新设计一个更接近真实现场的 Dataset。
- 用 Dataset 的角度解释模型为什么在实验室好、到现场差。

## Step 1: Chapter Goal

让读者完成一次认知转变：

从：

> Dataset = 数据文件集合

变成：

> Dataset = AI 的人生经历

进一步变成：

> Dataset 决定 AI 见过什么，也决定 AI 没见过什么。

## Step 2: Misconception

本章主要纠正这些误解：

- Dataset 越大越好。
- Dataset 只是训练前的准备工作。
- 现场失败主要是模型结构不够先进。
- 只要 DataLoader 能跑，Dataset 就没问题。
- 实验室测试集表现好，就说明真实现场也会好。

本章不纠正这些误解，留给后续章节：

- Feature 是模型自动学出来的，所以不重要。
- Label 只是给图片打名字。
- Distribution shift 只是测试集没划好。
- Generalization 是模型自己的能力，和 Dataset 关系不大。

## Step 3: Mental Model

核心心智模型：

> Dataset 是 AI 的人生经历。

展开方式：

- 人的判断来自经历。
- 经历有范围，有偏差，也有盲区。
- AI 没有直接生活在真实世界里。
- AI 只能通过 Dataset 间接接触世界。
- Dataset 没出现过的变化，AI 很难凭空理解。

这个心智模型后续可以复用：

- Sample：一次具体经历。
- Feature：经历中被抓住的信号。
- Label：别人告诉 AI 这段经历是什么意思。
- Distribution：经历来自怎样的世界。
- Generalization：面对没经历过的新情况还能不能判断。

## Step 4: Story

候选开场故事：

> 今天早上，一台产线上的机器人突然开始抓错工件。
>
> 昨天它还工作得很好。实验室测试也通过了。模型没有报错，程序没有崩溃，相机也还在采集图像。
>
> 但今天换了一批工件，表面反光变了，夹具位置有一点偏移，点云多了一片缺失。
>
> 工程师第一反应是：模型是不是不够好？
>
> 但真正的问题可能更简单，也更根本：
>
> 这个 AI 的人生经历里，从来没有见过今天这样的现场。

故事目的：

- 不从定义开始。
- 先让读者感到“现场失败”和 Dataset 有关。
- 把 Dataset 从文件夹拉回真实工业世界。

## Step 5: Teaching Flow

建议教学流：

1. 用现场失败故事进入。
2. 提问：模型明明测试过，为什么现场还会失败？
3. 建立直觉：AI 没见过世界，只见过 Dataset。
4. 区分数据量和经验覆盖。
5. 解释 Dataset 的几个关键维度：
   - 场景覆盖
   - 工况覆盖
   - 边界情况
   - 采样偏差
   - 失败样本
6. 用工业 3D 视觉案例说明：
   - 点云缺失
   - 反光
   - 遮挡
   - 批次变化
   - 夹具偏移
7. 埋伏笔：
   - Dataset 由 Sample 组成。
   - Dataset 中有 Feature 可以被学习。
   - Label 告诉 AI 某段经验是什么意思。
   - Distribution 决定训练现场和真实现场是否一致。
8. 收束到能力：
   - 读者可以检查自己的 Dataset 是否像真实现场。

## Step 6: Experiment

实验目标：

让读者看到“覆盖范围”比“数量”更关键。

实验设计：

- 构造一个二维 toy dataset。
- 训练数据只覆盖一部分输入空间。
- 测试数据包含训练中没见过的区域。
- 比较两种 Dataset：
  - 数据量较多但覆盖范围窄。
  - 数据量较少但覆盖范围更接近真实测试分布。
- 观察模型在未覆盖区域的失败。

实验要传达的直觉：

> Dataset 不是越多越好，而是要覆盖真实世界中会发生的变化。

不在本章展开：

- 复杂模型结构。
- 梯度推导。
- 深度学习框架细节。
- DataLoader 工程实现。

## Step 7: Draft Gate

进入正式初稿前必须确认：

- 主案例是否采用点云缺陷检测，还是结构光测量异常。
- 开场故事是否使用“机器人抓错工件”。
- “AI 从来没有见过世界，它只见过 Dataset”是否作为本章核心记忆句。
- Coverage 是否继续保留英文，还是确定中文译名。
- 本章是否加入一个小节专门区分 Dataset 和 DataLoader。
- 教学流是否通过 `Teaching_Checklist.md` 的 Phase 2 检查。

## 当前建议

推荐主案例：

> 点云缺陷检测 Dataset。

原因：

- 和工业 3D 视觉读者贴近。
- 可以自然讲到点云缺失、反光、遮挡、批次差异和边界情况。
- 不需要提前解释复杂模型结构。
- 后续可以连接 Sample、Feature、Distribution 和 Generalization。

推荐核心故事：

> 机器人在实验室表现正常，但现场突然抓错工件，因为它从未在 Dataset 中见过当天的工况。

推荐核心句：

> AI 从来没有见过世界，它只见过 Dataset。

## Phase 2 Ready Criteria

- 错误认知已明确。
- 一年后记忆句已明确。
- 能力目标已明确。
- 主案例已确认。
- 故事方向已确认。
- 教学流已确认。
- 实验方向已确认。
- 不和 Chapter 02 Sample、Chapter 03 Feature、Chapter 04 Label 重叠。

