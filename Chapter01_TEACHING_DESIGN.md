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

## 一句话心智模型

> AI 从来没有见过世界，它只见过 Dataset。

这不是章节总结，而是整章的灵魂。正文、图示、故事、实验和结尾都应该服务这句话。

本章只保留这一句作为唯一 One-line Mental Model。正文中可以有其他精彩句子，但不能出现另一个竞争性的核心观点。

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

正式推荐开场方式：悬疑 Hook，不提前揭示 Dataset。

第一页只让读者看到问题：

> 周一早上。
>
> 一台已经稳定运行三个月的焊接机器人，被搬到了另一条生产线。
>
> 上午九点。
>
> 第一次抓取，失败。
>
> 第二次，失败。
>
> 第三次，又失败。
>
> 工程师检查了相机、机器人、标定和模型版本。
>
> 都正常。
>
> 那么，到底是谁变了？

第二页才进入章节标题：

> Chapter 01: Dataset

也可以使用更短的页内对白：

> 昨天我还能识别。
>
> 今天为什么不会了？

故事目的：

- 不从定义开始。
- 不提前告诉读者“因为 Dataset 不好”。
- 先制造真实工业悬疑，再引出 Dataset。
- 把 Dataset 从文件夹拉回真实工业世界。

故事评分：

- 主案例：9.5/10。
- 原因：真实工业问题；能自然引出 Dataset、Distribution、Generalization；和工业 3D 视觉背景高度一致；后续章节可反复引用。

## 定义出现时机

前 5 页不要出现 Dataset 的正式定义。

先让读者经历：

1. 机器人失效。
2. 常规检查全部正常。
3. 真实世界变了。
4. AI 没有经历过这种变化。
5. 读者自己意识到：问题在 AI 的经验。

然后再给出定义：

> 我们把这种 AI 对世界经验的集合，称为 Dataset。

定义必须在读者已经需要它的时候出现。

## Coverage（经验覆盖）

本章采用：

> Coverage（经验覆盖）

不翻译为“覆盖率”。

原因：

- 覆盖率容易让读者误以为是数量比例。
- 工业现场中 Coverage 和 Coverage Rate 不是一回事。
- 1000 张图片如果全是同一角度，数量很多，但 Coverage 仍然很差。
- Coverage 指 Dataset 对真实世界变化空间的经验覆盖。

本章要明确：

> Coverage 不是数量，而是世界采样。

经典图示设计：

```text
真实世界
□□□□□□□□□□

Dataset A
■■□□□□□□□

Dataset B
■■■■■■■■■■
但全部来自同一角度、同一光照、同一批次
```

要传达的结论：

> Dataset B 看起来很多，但 Coverage 仍然可能很差。

这可以成为全书反复引用的核心图示。

图示阶段策略：

- Phase 2 使用 ASCII 黑白方格验证教学逻辑。
- Phase 3 Draft 继续使用可修改的 ASCII 图，不锁定视觉设计。
- Phase 5 Technical Review 再统一设计正式插图。

分工：

- ASCII 图负责验证教学逻辑。
- 正式插图负责提升阅读体验。

## 作者旁白：Dataset vs DataLoader

不把 Dataset vs DataLoader 放入正文主线。

推荐插入位置：

```text
故事
↓
心智模型
↓
Dataset 概念建立
↓
Sidebar: Dataset vs DataLoader
↓
继续正文
```

也就是说，Sidebar 应该放在正文第一次建立 Dataset 概念之后。

不要放在：

- 章节末尾。
- 代码部分。
- 本章开头。

原因：

- 第一章讲 Mental Model，不讲 PyTorch。
- DataLoader 会把读者带入框架管道，打断世界观建立。
- 正文必须保持聚焦：世界、经验、采样、Coverage。
- 读者第一次建立 Dataset 概念时，最容易把它和 DataLoader 混在一起，此时插入 Sidebar 认知成本最低。

建议放在 Sidebar：

```text
作者旁白

很多人第一次学习深度学习时，会把 Dataset 和 DataLoader 混在一起。

Dataset 回答的是：AI 看到了什么。

DataLoader 回答的是：这些数据如何送到 GPU。

第一章，我们只讨论世界，不讨论管道。
```

详细 DataLoader 讨论留到训练或工程章节。

## 为什么人类不需要 Dataset？

本节作为独立二级小节加入 Chapter 01 正文。

不要把它融入心智模型部分。

原因：

- 它承担的是建立人与 AI 的认知差异。
- 它不是单纯解释 Dataset。
- 它是本章从“Dataset 是经验”走向“AI 没有生活”的重要转折点。

核心问题：

> 为什么 AI 需要 Dataset，而人类好像不需要？

答案不是人类没有 Dataset，而是：

> 人类已经生活在世界里。

展开方式：

- 人从出生开始就在采样真实世界。
- 二十年的生活经历，本身就是一个巨大的 Dataset。
- 人看过不同光照、角度、遮挡、失败、噪声和异常。
- AI 没有生活。
- AI 不会自然走进工厂、摸过工件、看过产线变化。
- AI 的全部世界经验，只能来自 Dataset。

推荐镜像结构：

```text
人
↓
生活
↓
经验
↓
世界模型

AI
↓
Dataset
↓
经验
↓
世界模型
```

本节作用：

- 强化 Dataset = AI 的人生经历。
- 让读者理解为什么 Dataset 不是“训练材料”，而是 AI 的世界。
- 为后续 Sample、Feature、Distribution、Generalization 建立统一隐喻。

## 被替换的旧故事方向

旧故事方向是“现场突然失败，因为 AI 没见过今天的现场”。这个方向正确，但太早揭示答案。

新版本保留工业失败场景，但先做悬疑，后揭示 Dataset。

## Step 5: Teaching Flow

建议教学流：

1. 用悬疑式现场失败故事进入。
2. 不揭示原因，只让读者看到相机、机器人、标定、模型都正常。
3. 提问：到底是谁变了？
4. 让读者先排除硬件、程序和模型版本。
5. 引出真正变化的是“AI 面对的世界”。
6. 建立直觉：AI 没有见过世界，只见过 Dataset。
7. 正式给出延后定义：我们把这种 AI 对世界经验的集合称为 Dataset。
8. 区分数据数量和 Coverage（经验覆盖）。
9. 解释 Dataset 的几个关键维度：
   - 场景覆盖
   - 工况覆盖
   - 边界情况
   - 采样偏差
   - 失败样本
10. 用工业 3D 视觉案例说明：
   - 点云缺失
   - 反光
   - 遮挡
   - 批次变化
   - 夹具偏移
11. 插入“为什么人类不需要 Dataset？”：
   - 人不是不需要 Dataset，而是已经生活在世界里。
   - 人的二十年生活本身就是巨大的经验集合。
   - AI 没有生活，只能通过 Dataset 获得经验。
12. 插入作者旁白 Sidebar：Dataset vs DataLoader。
13. 埋伏笔：
   - Dataset 由 Sample 组成。
   - Dataset 中有 Feature 可以被学习。
   - Label 告诉 AI 某段经验是什么意思。
   - Distribution 决定训练现场和真实现场是否一致。
14. 收束到能力：
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

> Dataset 不是越多越好，而是 Coverage 要覆盖真实世界中会发生的变化。

不在本章展开：

- 复杂模型结构。
- 梯度推导。
- 深度学习框架细节。
- DataLoader 工程实现。

## Step 7: Draft Gate

进入正式初稿前必须确认：

- 主案例采用“稳定三个月的焊接机器人搬到另一条产线后失效”。
- 开场故事采用悬疑 Hook，不提前揭示 Dataset。
- “AI 从来没有见过世界，它只见过 Dataset”作为本章一句话心智模型。
- Coverage 首次写作 `Coverage（经验覆盖）`，之后统一简称 Coverage。
- Dataset vs DataLoader 不放正文主线，只放作者旁白 Sidebar。
- 加入“为什么人类不需要 Dataset？”小节。
- 前 5 页不出现 Dataset 的正式定义，定义延后到读者已经需要它的时候。
- 教学流是否通过 `Teaching_Checklist.md` 的 Phase 2 检查。

## Draft Gate Review 2026-07-01

状态：Needs Revision。

原因：

- Teaching Design 已达到较高成熟度。
- 但进入 Draft 前，必须先完成四项设计修订。

要求修订：

1. 明确 Coverage 图示采用 ASCII 黑白方格验证方案，正式插图后置。
2. 固定 Dataset vs DataLoader Sidebar 的插入位置。
3. 将“为什么人类不需要 Dataset？”升级为独立二级小节。
4. 明确本章唯一 One-line Mental Model，避免正文出现多个竞争性核心观点。

当前处理结果：

- 已明确 Coverage 图示阶段策略。
- 已固定 Sidebar 插入位置。
- 已确认“为什么人类不需要 Dataset？”为独立二级小节。
- 已确认唯一 One-line Mental Model。

后续动作：

- 需要再次进行 Draft Gate Review。
- 在 Draft Gate 重新确认 Ready 前，不进入 Phase 3 Draft。

## 当前建议

推荐主案例：

> 稳定运行三个月的焊接机器人，被搬到另一条产线后，准确率从 99% 下降到 60%。

原因：

- 真实工业问题，不是 AI 教科书问题。
- 可以自然讲到 Dataset、Distribution、Generalization。
- 和工业 3D 视觉、机器人、焊接场景贴近。
- 后续几十章都可以反复引用。
- 可以自然讲到反光、遮挡、批次差异、夹具变化和点云缺失。
- 不需要提前解释复杂模型结构。
- 后续可以连接 Sample、Feature、Distribution 和 Generalization。

推荐核心故事：

> 机器人昨天还能识别，今天为什么不会了？

推荐核心句：

> AI 从来没有见过世界，它只见过 Dataset。

## Phase 2 Ready Criteria

- 错误认知已明确。
- 一年后记忆句已明确。
- 能力目标已明确。
- 主案例已确认。
- 故事方向已确认。
- Coverage（经验覆盖）表述已确认。
- Dataset vs DataLoader 的 Sidebar 处理已确认。
- “为什么人类不需要 Dataset？”已确认加入设计。
- 正式定义延后出现已确认。
- Coverage ASCII 验证、正式插图后置已确认。
- Sidebar 插入位置已确认。
- “为什么人类不需要 Dataset？”独立二级小节已确认。
- 唯一 One-line Mental Model 已确认。
- 教学流已确认。
- 实验方向已确认。
- 不和 Chapter 02 Sample、Chapter 03 Feature、Chapter 04 Label 重叠。

## Design Review 2026-07-01

| 项目 | 评审结论 | 处理 |
| --- | --- | --- |
| 主案例 | 保留，但改成悬疑叙事，不提前揭示 Dataset。 | 已采用焊接机器人搬线失效案例。 |
| 开场故事 | 用“机器人突然失灵”作为 Hook，不从定义开始。 | 已改为悬疑 Hook。 |
| Coverage | 不翻译为“覆盖率”，首次使用 `Coverage（经验覆盖）`。 | 已更新术语策略和教学设计。 |
| Dataset vs DataLoader | 不放正文，改为作者旁白 Sidebar。 | 已加入 Sidebar 设计。 |
| 新增小节 | 增加“为什么人类不需要 Dataset？” | 已加入教学流。 |
| 定义位置 | 正式定义延后，先让读者自己得出需要定义的时刻。 | 已加入定义出现时机规则。 |
| 一句话心智模型 | 每章都要有一句话心智模型。 | Chapter 01 已确认。 |
