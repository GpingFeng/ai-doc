# 贡献指南

感谢你对 AI 知识库的关注！本文档将指导你如何为项目做出贡献。

## 开始之前

在开始贡献之前，请：

1. ⭐ Star 本项目
2. 🔍 浏览现有内容，了解文档风格
3. 📖 阅读本贡献指南

## 如何贡献

### 报告问题

发现错误或有改进建议？请：

1. 检查是否已有相关 Issue
2. 创建新 Issue，包含：
   - 清晰的标题
   - 详细的描述
   - 相关截图（如适用）
   - 建议的解决方案（可选）

### 改进内容

#### 1. Fork 项目

```bash
# Fork 项目到你的账户
# 克隆到本地
git clone https://github.com/your-username/ai-doc.git
cd ai-doc
```

#### 2. 创建分支

```bash
# 创建新分支
git checkout -b feature/your-feature-name
# 或
git checkout -b fix/your-fix-name
```

分支命名规范：

- `feature/xxx` - 新功能或新内容
- `fix/xxx` - 修复错误
- `docs/xxx` - 文档改进
- `style/xxx` - 样式调整

#### 3. 安装依赖

```bash
npm install
```

#### 4. 开发

```bash
# 启动开发服务器
npm run dev
```

访问 http://localhost:5173 查看实时预览。

#### 5. 提交更改

```bash
# 添加更改
git add .

# 提交（使用有意义的提交信息）
git commit -m "feat: 添加机器学习算法详解"
# 或
git commit -m "fix: 修复代码示例错误"
```

提交信息规范：

- `feat`: 新功能
- `fix`: 修复错误
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建/工具相关

#### 6. 推送并创建 Pull Request

```bash
# 推送到你的 fork
git push origin feature/your-feature-name
```

在 GitHub 上创建 Pull Request，描述你的更改。

## 内容编写指南

### 文档结构

```markdown
---
title: 页面标题
description: 页面描述（用于 SEO）
---

# 页面标题

简短介绍...

## 主要章节

内容...

### 子章节

内容...

## 总结

总结要点...

## 相关链接

- [相关页面 1](./link1)
- [相关页面 2](./link2)
```

### 写作风格

1. **简洁明了**

   - 使用简单的语言
   - 避免冗长的句子
   - 一个段落一个观点

2. **结构清晰**

   - 使用层次化的标题
   - 合理使用列表
   - 添加目录导航

3. **示例丰富**

   - 提供代码示例
   - 使用实际案例
   - 添加图表说明

4. **准确性**
   - 确保技术信息准确
   - 引用可靠来源
   - 标注不确定内容

### Markdown 规范

#### 标题

```markdown
# 一级标题（每页只有一个）

## 二级标题

### 三级标题

#### 四级标题
```

#### 强调

```markdown
**粗体** 用于重要概念
_斜体_ 用于术语
`代码` 用于代码片段
```

#### 列表

```markdown
有序列表：

1. 第一项
2. 第二项
3. 第三项

无序列表：

- 项目 A
- 项目 B
- 项目 C
```

#### 代码块

````markdown
```python
# 总是指定语言
def hello_world():
    print("Hello, World!")
```
````

支持的语言：`python`, `javascript`, `typescript`, `bash`, `json`, `yaml`, `markdown` 等

#### 链接

```markdown
[链接文本](./relative-path.md)
[外部链接](https://example.com)
```

#### 表格

```markdown
| 列 1   | 列 2   | 列 3   |
| ------ | ------ | ------ |
| 内容 1 | 内容 2 | 内容 3 |
```

#### 自定义容器

```markdown
::: tip 提示
有用的提示信息
:::

::: warning 注意
需要注意的事项
:::

::: danger 警告
危险或重要警告
:::

::: details 详细信息
可折叠的详细内容
:::
```

#### 自定义组件

```markdown
<CustomCard title="标题" icon="🎯" variant="primary">

卡片内容...

</CustomCard>

<Badge type="info">标签</Badge>

<Timeline :items="[
  { time: '2023-01', title: '标题', description: '描述' }
]" />
```

### 代码示例规范

#### 1. 完整可运行

```python
# ✅ 好的示例 - 包含导入和完整代码
import numpy as np

def calculate_mean(data):
    return np.mean(data)

data = [1, 2, 3, 4, 5]
result = calculate_mean(data)
print(f"平均值: {result}")
```

```python
# ❌ 不好的示例 - 缺少导入
result = np.mean(data)  # np 未定义
```

#### 2. 添加注释

```python
# 创建线性回归模型
model = LinearRegression()

# 训练模型
model.fit(X_train, y_train)

# 评估性能
score = model.score(X_test, y_test)
```

#### 3. 错误处理

```python
try:
    result = risky_operation()
except ValueError as e:
    print(f"错误: {e}")
```

### 图片和媒体

#### 添加图片

```markdown
![图片描述](/images/example.png)
```

图片要求：

- 使用描述性文件名
- 压缩图片大小（< 500KB）
- 提供替代文本
- 使用 WebP 格式（推荐）

#### 图片存放位置

```
docs/
└── public/
    └── images/
        ├── basics/
        ├── machine-learning/
        └── deep-learning/
```

### SEO 优化

#### 页面元数据

```markdown
---
title: 具体、描述性的标题
description: 简洁的描述，包含关键词（150-160字符）
keywords: 关键词1, 关键词2, 关键词3
---
```

#### 标题优化

- H1: 每页一个，包含主要关键词
- H2-H6: 层次化组织，包含相关关键词
- 避免重复标题

#### 链接

- 使用描述性链接文本
- 避免"点击这里"
- 内部链接使用相对路径

## 测试

提交前请测试：

### 1. 本地开发测试

```bash
npm run dev
```

检查：

- 页面正常渲染
- 链接可点击
- 代码高亮正确
- 组件显示正常

### 2. 构建测试

```bash
npm run build
npm run preview
```

确保生产构建无错误。

### 3. 检查清单

- [ ] Markdown 语法正确
- [ ] 代码示例可运行
- [ ] 链接有效
- [ ] 图片加载正常
- [ ] 无拼写错误
- [ ] 格式一致
- [ ] 响应式适配

## 代码规范

### TypeScript/JavaScript

```typescript
// 使用 TypeScript
interface User {
  name: string
  age: number
}

// 使用 const/let，避免 var
const userName = 'AI'
let userAge = 25

// 使用箭头函数
const greet = (name: string) => `Hello, ${name}!`
```

### Vue 组件

```vue
<script setup lang="ts">
// 使用 script setup
interface Props {
  title: string
  icon?: string
}

defineProps<Props>()
</script>

<template>
  <!-- 清晰的模板结构 -->
  <div class="component">
    <h3>{{ title }}</h3>
  </div>
</template>

<style scoped>
/* 使用 scoped 样式 */
.component {
  padding: 16px;
}
</style>
```

### CSS

```css
/* 使用 CSS 变量 */
.element {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
}

/* 使用语义化类名 */
.card-title {
} /* ✅ */
.ct {
} /* ❌ */
```

## 版本管理

### 语义化版本

- **主版本号**：不兼容的 API 更改
- **次版本号**：向后兼容的功能新增
- **修订号**：向后兼容的问题修正

### 更新日志

重大更改请在 Pull Request 中说明：

```markdown
## 更改内容

- 添加了 XXX 功能
- 修复了 XXX 问题
- 改进了 XXX 性能

## 影响范围

- 影响的页面：XXX
- 可能的兼容性问题：XXX
```

## 审核流程

1. **自动检查**

   - 构建是否成功
   - 代码风格检查
   - 链接有效性

2. **人工审核**

   - 内容准确性
   - 写作质量
   - 与现有内容的一致性

3. **反馈**

   - 审核者提供反馈
   - 根据反馈修改
   - 再次审核直到通过

4. **合并**
   - PR 被合并到主分支
   - 自动部署到生产环境

## 社区准则

### 行为规范

- 尊重他人
- 建设性反馈
- 包容不同观点
- 禁止骚扰和歧视

### 沟通方式

- Issue: 报告问题、提出建议
- Pull Request: 代码/内容贡献
- Discussions: 一般讨论、问答

## 获得帮助

遇到问题？

1. 查看 [README](./README.md)
2. 搜索现有 Issue
3. 创建新 Issue
4. 联系维护者

## 贡献者

感谢所有贡献者！

你的名字也可以出现在这里：[贡献者列表](https://github.com/yourusername/ai-doc/graphs/contributors)

## 许可证

通过贡献，你同意你的贡献将在 MIT 许可证下发布。

---

再次感谢你的贡献！🎉
