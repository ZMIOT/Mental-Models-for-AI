# Case Library

本文件维护可跨章节复用的工业案例。

## 案例索引

| 案例 | 可支撑概念 | 状态 |
| --- | --- | --- |
| 焊接机器人换线失效 | Dataset, Coverage, Distribution, Generalization | Selected |
| 点云缺陷检测 | Dataset, Feature, Loss | Seed |
| 焊枪轨迹识别 | Sample, Model, Deployment | Seed |
| 抓取位姿估计 | Feature, Embedding, Prediction | Seed |
| 手眼标定误差传播 | Loss, Optimization, Deployment | Seed |
| RGBD 场景理解 | Dataset, Feature, Model | Seed |
| 双目深度估计 | Model, Loss, Optimization | Seed |
| 结构光测量异常 | Dataset, Feature, Failure Cases | Seed |

## 案例模板

```text
### 案例名称

- 场景:
- 输入:
- 输出:
- 相关概念:
- 常见误解:
- 可复用章节:
```

## 已选主案例

### 焊接机器人换线失效

- 场景: 一台稳定运行三个月的焊接机器人被搬到另一条生产线后，准确率从 99% 下降到 60%。
- 输入: 工件图像、点云、焊接位置、现场光照、夹具状态和生产线环境。
- 输出: 识别、定位或抓取结果。
- 相关概念: Dataset, Coverage, Distribution, Generalization。
- 常见误解: 模型失效一定是模型结构不够好。
- 可复用章节: Chapter 01 Dataset, Chapter 05 Distribution, Chapter 07 Generalization, Chapter 27 Failure Modes。
- 叙事要求: 第一章开场不提前揭示 Dataset，只保留悬疑 Hook：相机、机器人、标定、模型都正常，那么到底是谁变了？
