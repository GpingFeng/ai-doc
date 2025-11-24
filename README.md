# AI 知识库文档

基于 VitePress 构建的 AI 知识库文档系统，支持 Markdown、自定义组件、SEO 优化等功能。

## ✨ 特性

- 🎨 **基于 Vue 3** - 使用 VitePress 官方框架
- 📝 **Markdown 增强** - 支持代码高亮、提示框、数学公式等
- 🎯 **SEO 友好** - 完整的 meta 标签、sitemap 支持
- 🔍 **全文搜索** - 内置本地搜索功能
- 🎨 **自定义组件** - 支持 Vue 组件扩展
- 📱 **响应式设计** - 完美适配移动端
- 🌙 **深色模式** - 自动切换亮/暗主题
- ⚡ **快速构建** - Vite 驱动，秒级热更新

## 📦 技术栈

- [VitePress](https://vitepress.dev/) - Vue 驱动的静态站点生成器
- [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Vite](https://vitejs.dev/) - 下一代前端构建工具

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:5173 查看文档

### 构建生产版本

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 📁 项目结构

```
ai-doc/
├── docs/                      # 文档源文件
│   ├── .vitepress/           # VitePress 配置
│   │   ├── config.mts        # 站点配置
│   │   ├── theme/            # 主题定制
│   │   │   ├── index.ts      # 主题入口
│   │   │   ├── style.css     # 自定义样式
│   │   │   └── components/   # 自定义组件
│   │   └── cache/            # 构建缓存（自动生成）
│   ├── public/               # 静态资源
│   ├── index.md              # 首页
│   ├── basics/               # 基础知识章节
│   ├── machine-learning/     # 机器学习章节
│   ├── deep-learning/        # 深度学习章节
│   ├── applications/         # 应用实践章节
│   └── resources/            # 工具资源章节
├── package.json              # 依赖配置
└── README.md                 # 项目说明
```

## 📝 撰写文档

### 创建新页面

在 `docs/` 目录下创建 `.md` 文件：

```markdown
---
title: 页面标题
description: 页面描述
---

# 页面标题

页面内容...
```

### Markdown 增强功能

#### 1. 自定义容器

```markdown
::: tip 提示
这是一个提示
:::

::: warning 警告
这是一个警告
:::

::: danger 危险
这是一个危险警告
:::

::: details 点击展开
这是一个可折叠的详情块
:::
```

#### 2. 代码块

````markdown
```python
def hello():
    print("Hello, AI!")
```
````

#### 3. 代码组

````markdown
::: code-group

```js [config.js]
export default {
  name: 'my-app',
}
```

```ts [config.ts]
export default {
  name: 'my-app',
}
```

:::
````

#### 4. 表格

```markdown
| 标题 1 | 标题 2 | 标题 3 |
| ------ | ------ | ------ |
| 内容 1 | 内容 2 | 内容 3 |
```

#### 5. 使用 Vue 组件

```markdown
<CustomCard title="标题">
  自定义内容
</CustomCard>
```

## 🎨 自定义主题

### 修改主题样式

编辑 `docs/.vitepress/theme/style.css`：

```css
:root {
  --vp-c-brand: #646cff;
  --vp-c-brand-light: #747bff;
}
```

### 添加自定义组件

1. 在 `docs/.vitepress/theme/components/` 创建组件
2. 在 `docs/.vitepress/theme/index.ts` 中注册

```typescript
import { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import CustomCard from './components/CustomCard.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CustomCard', CustomCard)
  },
} satisfies Theme
```

## 🔧 配置

主要配置文件：`docs/.vitepress/config.mts`

### 站点配置

```typescript
export default defineConfig({
  title: '站点标题',
  description: '站点描述',
  lang: 'zh-CN',
})
```

### 导航栏

```typescript
themeConfig: {
  nav: [
    { text: '首页', link: '/' },
    { text: '指南', link: '/guide/' },
  ]
}
```

### 侧边栏

```typescript
themeConfig: {
  sidebar: {
    '/guide/': [
      {
        text: '指南',
        items: [
          { text: '介绍', link: '/guide/introduction' }
        ]
      }
    ]
  }
}
```

## 🌐 部署

### 部署到 GitHub Pages

1. 修改 `docs/.vitepress/config.mts`：

```typescript
export default defineConfig({
  base: '/your-repo-name/',
})
```

2. 创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

### 部署到 Vercel

1. 导入 GitHub 仓库到 Vercel
2. 设置构建命令：`npm run build`
3. 设置输出目录：`docs/.vitepress/dist`

### 部署到 Netlify

1. 连接 GitHub 仓库
2. 构建命令：`npm run build`
3. 发布目录：`docs/.vitepress/dist`

## 📚 更多资源

- [VitePress 官方文档](https://vitepress.dev/)
- [Vue 3 文档](https://vuejs.org/)
- [Markdown 指南](https://www.markdownguide.org/)

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！
