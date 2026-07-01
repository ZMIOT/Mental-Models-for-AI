# Curriculum

本文件是《Deep Learning Mental Models》的课程地图（Syllabus）。它定义全书的学习路径、分卷结构、章节边界和概念推进顺序。

`CURRICULUM.md` 的作用不是写正文，而是回答：

- 这本书按什么顺序教学？
- 每章只负责解决什么问题？
- 哪些概念只做铺垫，留到后续章节展开？
- 新章节或新技术应该插入到哪里？

## 课程设计原则

1. 先建立世界观，再进入模型细节。
2. 先讲 AI 如何获得经验，再讲 AI 如何学习、表达、推理和部署。
3. 每章只承担一个主要概念，避免互相覆盖。
4. 后续章节可以回引用前章，但不能重新讲解前章的核心职责。
5. 复杂概念先埋伏笔，等进入对应章节再系统展开。
6. 章节顺序必须服务于工业 3D 视觉工程师的理解路径。

## 全书结构草案

### Part I: How AI Sees the World

目标：建立 AI 与真实世界之间的第一层关系。读者先理解数据、样本、特征、标签、分布和泛化，而不是直接进入模型结构。

| 章节 | 主题 | 核心问题 | 边界 |
| --- | --- | --- | --- |
| Chapter 01 | Dataset | AI 的经验从哪里来？ | 讲数据集作为经验集合，不展开 Sample、Feature、Label、Gradient、CNN。 |
| Chapter 02 | Sample | AI 每次学习的经验单位是什么？ | 讲单个样本的结构，不重复 Dataset 的整体设计。 |
| Chapter 03 | Feature | AI 从样本里抓住什么信号？ | 讲特征，不重新讲数据采集和标签系统。 |
| Chapter 04 | Label | AI 怎么知道什么是对？ | 讲监督信号，不展开 Loss 的数学机制。 |
| Chapter 05 | Distribution | 训练现场和真实现场为什么会不一样？ | 讲分布和偏移，不展开泛化策略。 |
| Chapter 06 | Augmentation | 如何扩展 AI 的经验范围？ | 讲数据增强，不展开模型正则化。 |
| Chapter 07 | Generalization | AI 为什么能处理没见过的情况？ | 讲泛化直觉，不展开具体网络架构。 |

### Part II: How AI Learns

目标：解释模型从经验中变好的过程。

| 章节 | 主题 | 核心问题 | 边界 |
| --- | --- | --- | --- |
| Chapter 08 | Model | 可学习函数是什么？ | 讲模型作为映射，不展开具体 CNN/Transformer 结构。 |
| Chapter 09 | Prediction | 模型输出到底是什么？ | 讲预测和不确定性，不展开 Loss。 |
| Chapter 10 | Loss | 什么在推动模型改变？ | 讲目标与惩罚，不展开优化算法细节。 |
| Chapter 11 | Gradient | 模型怎么知道往哪里改？ | 讲梯度直觉，不展开复杂反向传播推导。 |
| Chapter 12 | Optimization | 训练为什么会逐步变好？ | 讲优化过程，不展开部署问题。 |
| Chapter 13 | Overfitting | 模型为什么会背题？ | 讲过拟合机制和诊断，不重复 Dataset 设计。 |

### Part III: How AI Represents

目标：解释 AI 如何把复杂世界压缩成可比较、可组合、可迁移的表示。

| 章节 | 主题 | 核心问题 | 边界 |
| --- | --- | --- | --- |
| Chapter 14 | Representation | 表示为什么比原始数据更重要？ | 讲表示层，不展开具体网络结构。 |
| Chapter 15 | Embedding | 如何把对象放进可比较空间？ | 讲向量空间和相似性，不展开检索系统工程。 |
| Chapter 16 | Latent Space | AI 的内部空间是什么？ | 讲隐空间直觉，不展开生成模型细节。 |
| Chapter 17 | Attention | AI 如何决定看哪里？ | 讲注意力机制直觉，不完整展开 Transformer。 |
| Chapter 18 | Transformer | 为什么 Transformer 改变了 AI？ | 讲结构和心智模型，不回头重讲 Attention 基础。 |

### Part IV: How AI Sees

目标：把前面的心智模型落到视觉任务，尤其是工业 2D/3D 视觉。

| 章节 | 主题 | 核心问题 | 边界 |
| --- | --- | --- | --- |
| Chapter 19 | Image | 图像对 AI 来说是什么？ | 讲像素、局部结构和视觉输入。 |
| Chapter 20 | CNN | 为什么卷积适合图像？ | 讲卷积心智模型，不重讲 Feature。 |
| Chapter 21 | Detection | AI 如何找到目标？ | 讲检测任务结构，不展开训练数据管理。 |
| Chapter 22 | Segmentation | AI 如何理解区域和边界？ | 讲分割，不展开点云。 |
| Chapter 23 | Point Cloud | 点云对 AI 来说是什么？ | 讲 3D 点集和几何结构。 |
| Chapter 24 | Depth & RGBD | 深度如何改变视觉理解？ | 讲 RGBD 数据关系，不展开标定细节。 |
| Chapter 25 | 3D Vision Tasks | 工业 3D 视觉任务如何组织？ | 讲缺陷、定位、测量和抓取任务类型。 |

### Part V: How AI Works in the Factory

目标：解释 AI 从训练到工业现场稳定运行的工程问题。

| 章节 | 主题 | 核心问题 | 边界 |
| --- | --- | --- | --- |
| Chapter 26 | Evaluation | 怎么判断模型真的好？ | 讲指标和验证，不重复 Loss。 |
| Chapter 27 | Failure Modes | AI 在现场为什么失败？ | 讲失败类型和诊断路径。 |
| Chapter 28 | Deployment | 模型如何进入产线？ | 讲部署边界，不展开硬件细节。 |
| Chapter 29 | Monitoring | 模型上线后如何持续可信？ | 讲监控、漂移和回归检查。 |
| Chapter 30 | Human-in-the-loop | 人如何持续改进 AI？ | 讲反馈闭环和再训练。 |

### Part VI: Future Mental Models

目标：为 Foundation Model、机器人基础模型和未来 AI 系统预留扩展位置。

| 章节 | 主题 | 核心问题 | 边界 |
| --- | --- | --- | --- |
| Chapter 31 | Foundation Models | 大模型改变了什么？ | 讲基础模型心智模型，不替代前面基础章节。 |
| Chapter 32 | Multimodal AI | 多模态如何连接图像、语言和动作？ | 讲模态对齐，不展开单一视觉任务。 |
| Chapter 33 | Robotics AI | AI 如何进入机器人系统？ | 讲感知、决策和动作闭环。 |
| Chapter 34 | Industrial AI Systems | 如何看待完整工业 AI 系统？ | 讲系统观和长期维护。 |

## 章节边界规则

- Dataset 只讲经验集合，不讲 Feature 的提取机制。
- Sample 只讲单次经验单位，不讲 Dataset 策略。
- Feature 只讲信号，不讲 Label 的监督逻辑。
- Label 只讲目标定义，不讲 Loss 的优化作用。
- Loss 只讲目标和惩罚，不讲 Gradient 的计算细节。
- Gradient 只讲变化方向，不讲完整优化策略。
- Attention 只讲选择性关注，不完整替代 Transformer。
- Transformer 只讲结构整合，不重讲 Attention 基础。

## 维护规则

- 新增章节前，必须先更新本文件。
- 修改章节顺序时，必须同步检查 `KNOWLEDGE_MAP.md`。
- 创建正文前，必须先创建对应 `ChapterNN_SPEC.md`。
- `ChapterNN_SPEC.md` 必须声明本章讲什么、不讲什么、前置章节和下一章。

