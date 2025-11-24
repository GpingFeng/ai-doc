# 快速参考

## 常用命令

```bash
# 开发
npm run dev              # 启动开发服务器 (http://localhost:5173)

# 构建
npm run build            # 构建生产版本
npm run preview          # 预览构建结果

# 清理
rm -rf node_modules      # 清理依赖
rm -rf docs/.vitepress/cache  # 清理缓存
```

## 目录结构速查

```
docs/
├── .vitepress/
│   ├── config.mts           # 主配置文件 ⚙️
│   └── theme/
│       ├── index.ts         # 主题入口（注册组件）
│       ├── style.css        # 全局样式
│       └── components/      # 自定义组件
├── public/                  # 静态资源
├── [章节名]/               # 内容目录
│   └── *.md                # Markdown 文件
└── index.md                # 首页
```

## 配置文件位置

| 配置项   | 文件路径                             |
| -------- | ------------------------------------ |
| 站点配置 | `docs/.vitepress/config.mts`         |
| 导航栏   | `config.mts` → `themeConfig.nav`     |
| 侧边栏   | `config.mts` → `themeConfig.sidebar` |
| 全局样式 | `docs/.vitepress/theme/style.css`    |
| SEO 配置 | `config.mts` → `head`                |

## Markdown 语法速查

### 自定义容器

```markdown
::: tip
提示内容
:::

::: warning
警告内容
:::

::: danger
危险警告
:::

::: details 点击展开
折叠内容
:::
```

### 代码块

````markdown
```python
# Python 代码
print("Hello")
```

```javascript
// JavaScript 代码
console.log('Hello')
```
````

### 代码组

````markdown
::: code-group

```python [Python]
code
```

```js [JavaScript]
code
```

:::
````

## 自定义组件速查

### CustomCard

```markdown
<CustomCard title="标题" icon="🎯" variant="primary">
内容
</CustomCard>
```

**variant 选项**: `default`, `primary`, `success`, `warning`, `danger`

### Badge

```markdown
<Badge type="info">标签</Badge>
```

**type 选项**: `info`, `tip`, `warning`, `danger`

### Timeline

```markdown
<Timeline :items="[
  { time: '时间', title: '标题', description: '描述' }
]" />
```

## 添加新页面（3 步）

### 1. 创建 Markdown 文件

```markdown
## <!-- docs/新章节/新页面.md -->

title: 页面标题
description: 页面描述

---

# 页面标题

内容...
```

### 2. 配置导航（可选）

```typescript
// config.mts
nav: [{ text: '新页面', link: '/新章节/新页面' }]
```

### 3. 配置侧边栏（可选）

```typescript
// config.mts
sidebar: {
  '/新章节/': [
    {
      text: '章节名',
      items: [
        { text: '新页面', link: '/新章节/新页面' }
      ]
    }
  ]
}
```

## 创建自定义组件（4 步）

### 1. 创建组件文件

```vue
<!-- docs/.vitepress/theme/components/MyComponent.vue -->
<template>
  <div class="my-component">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑
</script>

<style scoped>
.my-component {
  /* 样式 */
}
</style>
```

### 2. 注册组件

```typescript
// docs/.vitepress/theme/index.ts
import MyComponent from './components/MyComponent.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('MyComponent', MyComponent)
  },
}
```

### 3. 在 Markdown 中使用

```markdown
<MyComponent>
  内容
</MyComponent>
```

### 4. 重启开发服务器

```bash
# Ctrl+C 停止
npm run dev  # 重新启动
```

## 主题颜色自定义

```css
/* docs/.vitepress/theme/style.css */

:root {
  /* 品牌色 */
  --vp-c-brand-1: #646cff;
  --vp-c-brand-2: #747bff;
  --vp-c-brand-3: #535bf2;

  /* 其他颜色变量... */
}

.dark {
  /* 暗色模式颜色 */
}
```

## SEO 优化清单

- [ ] 设置页面 title 和 description
- [ ] 配置 sitemap.hostname
- [ ] 添加 og:image 和 twitter:image
- [ ] 使用语义化的标题层次
- [ ] 优化图片 alt 文本
- [ ] 添加内部链接
- [ ] 生成 sitemap（自动）

## 部署快速指南

### GitHub Pages

```bash
# 1. 推送到 GitHub
git push origin main

# 2. 在仓库设置中启用 GitHub Pages
# Settings > Pages > Source: GitHub Actions

# 3. 自动部署（已配置 workflow）
```

### Vercel (推荐)

1. 访问 vercel.com
2. Import GitHub 仓库
3. 一键部署 ✅

### Netlify

1. 访问 netlify.com
2. New site from Git
3. 连接仓库并部署 ✅

## 常见问题

### Q: 如何修改网站标题？

A: 编辑 `docs/.vitepress/config.mts`：

```typescript
export default defineConfig({
  title: '你的标题',
  description: '你的描述',
})
```

### Q: 如何添加自定义样式？

A: 编辑 `docs/.vitepress/theme/style.css`

### Q: 组件不显示？

A:

1. 检查组件是否已注册
2. 检查组件名称大小写
3. 重启开发服务器

### Q: 构建失败？

A:

```bash
# 清理并重新安装
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Q: 链接 404？

A:

1. 检查文件路径是否正确
2. 使用相对路径（`./` 或 `../`）
3. 确认文件名大小写匹配

## 有用的 CSS 变量

```css
/* 颜色 */
--vp-c-brand-1
--vp-c-brand-2
--vp-c-brand-3
--vp-c-bg
--vp-c-bg-soft
--vp-c-text-1
--vp-c-text-2

/* 间距 */
--vp-layout-max-width
--vp-sidebar-width

/* 字体 */
--vp-font-family-base
--vp-font-family-mono
```

## 键盘快捷键（开发时）

| 快捷键         | 功能           |
| -------------- | -------------- |
| `Ctrl/Cmd + S` | 保存并自动刷新 |
| `Ctrl/Cmd + K` | 打开搜索       |
| `Ctrl/Cmd + B` | 切换侧边栏     |

## 资源链接

- 📚 [VitePress 文档](https://vitepress.dev/)
- 🎨 [Vue 3 文档](https://vuejs.org/)
- ⚡ [Vite 文档](https://vitejs.dev/)
- 📝 [Markdown 指南](https://www.markdownguide.org/)
- 🎯 [项目 README](./README.md)
- 🚀 [部署指南](./DEPLOYMENT.md)
- 🤝 [贡献指南](./CONTRIBUTING.md)

## 项目文件说明

| 文件                 | 用途         |
| -------------------- | ------------ |
| `package.json`       | 依赖和脚本   |
| `README.md`          | 项目说明     |
| `DEPLOYMENT.md`      | 部署详细指南 |
| `CONTRIBUTING.md`    | 贡献规范     |
| `PROJECT_SUMMARY.md` | 项目总结     |
| `QUICK_REFERENCE.md` | 本文件       |
| `.gitignore`         | Git 忽略规则 |
| `.prettierrc`        | 代码格式化   |

---

**提示**: 收藏本页面以便快速查阅！ ⭐
