# 快速开始

本指南将帮助你快速上手使用本文档系统。

## 基本使用

### Markdown 语法

本文档支持完整的 Markdown 语法：

```markdown
# 一级标题

## 二级标题

### 三级标题

**粗体文本**
_斜体文本_
`代码`

- 列表项 1
- 列表项 2
```

### 自定义组件

#### CustomCard 卡片组件

<CustomCard title="普通卡片" icon="📦">

这是一个普通卡片的内容。

</CustomCard>

<CustomCard title="主要卡片" icon="⭐" variant="primary">

这是一个主要样式的卡片。

</CustomCard>

<CustomCard title="成功卡片" icon="✅" variant="success">

这是一个成功样式的卡片。

</CustomCard>

<CustomCard title="警告卡片" icon="⚠️" variant="warning">

这是一个警告样式的卡片。

</CustomCard>

<CustomCard title="危险卡片" icon="🔥" variant="danger">

这是一个危险样式的卡片。

</CustomCard>

#### Badge 徽章组件

使用徽章标记内容状态：

- 信息 <Badge type="info">Info</Badge>
- 提示 <Badge type="tip">Tip</Badge>
- 警告 <Badge type="warning">Warning</Badge>
- 危险 <Badge type="danger">Danger</Badge>

#### Timeline 时间线组件

<Timeline :items="[
  { time: '2023-01', title: '项目启动', description: '开始构建 AI 知识库' },
  { time: '2023-06', title: '初版发布', description: '完成基础内容编写' },
  { time: '2024-01', title: '大更新', description: '添加更多高级主题' },
  { time: '2024-11', title: '持续维护', description: '持续更新和优化' }
]" />

### 自定义容器

::: tip 提示
这是一个提示容器
:::

::: warning 警告
这是一个警告容器
:::

::: danger 危险
这是一个危险警告容器
:::

::: details 点击展开查看详情
这是一个可折叠的详情容器，可以放置大量内容。
:::

### 代码组

::: code-group

```python [Python]
def greet(name):
    return f"Hello, {name}!"

print(greet("AI"))
```

```javascript [JavaScript]
function greet(name) {
  return `Hello, ${name}!`
}

console.log(greet('AI'))
```

```typescript [TypeScript]
function greet(name: string): string {
  return `Hello, ${name}!`
}

console.log(greet('AI'))
```

:::

### 表格

| 功能     | 支持 | 说明       |
| -------- | ---- | ---------- |
| Markdown | ✅   | 完整支持   |
| Vue 组件 | ✅   | 自定义组件 |
| 代码高亮 | ✅   | 多语言支持 |
| 搜索     | ✅   | 本地搜索   |
| SEO      | ✅   | 完整优化   |

## 开发指南

### 添加新页面

1. 在 `docs/` 目录创建 `.md` 文件
2. 在 `config.mts` 中配置导航和侧边栏
3. 开始编写内容

### 自定义组件

1. 在 `docs/.vitepress/theme/components/` 创建 Vue 组件
2. 在 `docs/.vitepress/theme/index.ts` 注册组件
3. 在 Markdown 中使用

### 样式定制

编辑 `docs/.vitepress/theme/style.css` 修改全局样式。

## 最佳实践

<CustomCard icon="💡" variant="primary">

**内容组织**

- 使用清晰的标题层次结构
- 合理使用自定义容器突出重点
- 代码示例要完整可运行

</CustomCard>

<CustomCard icon="🎨" variant="success">

**视觉设计**

- 使用自定义组件增强视觉效果
- 保持页面排版简洁
- 合理使用颜色和图标

</CustomCard>

<CustomCard icon="⚡" variant="warning">

**性能优化**

- 图片使用适当的格式和大小
- 避免过大的代码块
- 合理使用懒加载

</CustomCard>
