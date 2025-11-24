# 什么是人工智能

人工智能（Artificial Intelligence，AI）是计算机科学的一个分支，旨在创建能够执行通常需要人类智能才能完成的任务的系统。

<CustomCard title="快速了解" icon="🤖" variant="primary">

这是一个示例页面，展示了如何使用自定义组件和 Markdown 增强功能。

</CustomCard>

## 定义

人工智能是指由机器展现的智能行为，包括但不限于：

- 学习和适应能力
- 问题解决能力
- 推理和规划能力
- 感知和理解能力
- 自然语言处理能力

## AI 的三个层次

### 弱人工智能 <Badge type="info">当前阶段</Badge>

也称为**专用人工智能**，专注于完成特定任务。

::: tip 提示
当前我们使用的几乎所有 AI 系统都属于弱人工智能。
:::

### 强人工智能 <Badge type="warning">研究中</Badge>

也称为**通用人工智能**，具有类人的认知能力。

### 超人工智能 <Badge type="danger">理论阶段</Badge>

超越人类智能的 AI 系统。

## 应用领域

| 领域     | 应用示例               |
| -------- | ---------------------- |
| 医疗健康 | 疾病诊断、药物研发     |
| 金融     | 风险评估、量化交易     |
| 交通     | 自动驾驶、智能交通管理 |
| 教育     | 个性化学习、智能辅导   |

## 示例代码

```python
from sklearn.linear_model import LinearRegression
import numpy as np

# 准备数据
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])

# 创建和训练模型
model = LinearRegression()
model.fit(X, y)

# 预测
prediction = model.predict([[6]])
print(f"预测结果: {prediction[0]}")
```

## 下一步

继续探索其他章节内容...
