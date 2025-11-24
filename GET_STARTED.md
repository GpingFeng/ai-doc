# 🚀 开始使用

欢迎使用 AI 知识库文档系统！

## ✅ 当前状态

你的项目已经完全搭建完成并正在运行：

- ✅ VitePress 已安装并配置
- ✅ 自定义主题已创建
- ✅ 3 个自定义组件已就绪
- ✅ 开发服务器正在运行
- ✅ SEO 配置完成
- ✅ 自动部署已配置
- ✅ 文档完备

## 🎯 访问你的网站

开发服务器正在运行中：

```
🌐 本地地址: http://localhost:5173
```

在浏览器中打开上述地址即可查看你的知识库！

## 📝 接下来做什么？

### 1. 浏览示例内容

- **首页**: 查看 Hero 区域和特性展示
- **使用指南**: `/guide/quick-start` - 学习所有功能
- **基础知识**: `/basics/introduction` - 查看示例文档

### 2. 开始写作

编辑或创建 Markdown 文件：

```bash
# 创建新文档
touch docs/新章节/新页面.md

# 编辑配置
code docs/.vitepress/config.mts
```

保存后页面会自动刷新！⚡

### 3. 自定义主题

修改主题颜色和样式：

```bash
# 编辑样式
code docs/.vitepress/theme/style.css

# 修改配置
code docs/.vitepress/config.mts
```

### 4. 测试组件

在任意 Markdown 文件中使用组件：

```markdown
<CustomCard title="测试卡片" icon="🎯" variant="primary">
这是一个自定义卡片组件！
</CustomCard>
```

## 🎨 可用的自定义组件

### 1. CustomCard（卡片）

```markdown
<CustomCard title="标题" icon="🚀" variant="primary">
卡片内容
</CustomCard>
```

变体：`default`, `primary`, `success`, `warning`, `danger`

### 2. Badge（徽章）

```markdown
<Badge type="info">新功能</Badge>
<Badge type="tip">提示</Badge>
<Badge type="warning">注意</Badge>
<Badge type="danger">重要</Badge>
```

### 3. Timeline（时间线）

```markdown
<Timeline :items="[
  { time: '2024-01', title: '项目启动', description: '开始构建' },
  { time: '2024-06', title: '版本 1.0', description: '正式发布' }
]" />
```

## 📚 Markdown 增强功能

### 自定义容器

```markdown
::: tip 温馨提示
这是一个提示容器
:::

::: warning 注意事项
这是一个警告容器
:::

::: danger 重要警告
这是一个危险警告容器
:::

::: details 点击查看详情
这里是可折叠的详细内容
:::
```

### 代码高亮

````markdown
```python
def hello():
    print("支持多种语言的代码高亮")
```

```javascript
const hello = () => {
  console.log('自动行号显示')
}
```
````

### 代码组（多标签页）

````markdown
::: code-group

```python [Python]
print("Python 代码")
```

```javascript [JavaScript]
console.log('JavaScript 代码')
```

```typescript [TypeScript]
console.log('TypeScript 代码')
```

:::
````

## 🎯 关键配置文件

| 文件         | 用途                   | 位置                              |
| ------------ | ---------------------- | --------------------------------- |
| **主配置**   | 站点设置、导航、侧边栏 | `docs/.vitepress/config.mts`      |
| **主题入口** | 注册组件               | `docs/.vitepress/theme/index.ts`  |
| **样式文件** | 全局样式               | `docs/.vitepress/theme/style.css` |
| **首页**     | 网站首页               | `docs/index.md`                   |

## 🔧 常用命令

```bash
# 开发（已运行）
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview

# 停止开发服务器
# Ctrl + C 或 Cmd + C
```

## 📖 详细文档

项目包含完整的文档：

- 📘 **README.md** - 项目概述和快速开始
- 🚀 **DEPLOYMENT.md** - 详细的部署指南
- 🤝 **CONTRIBUTING.md** - 贡献规范和写作指南
- 📊 **PROJECT_SUMMARY.md** - 完整的项目总结
- ⚡ **QUICK_REFERENCE.md** - 快速参考手册
- 🎯 **GET_STARTED.md** - 本文件

## 🌟 核心特性

### ✅ SEO 优化

- ✅ 完整的 meta 标签
- ✅ Open Graph 支持
- ✅ Twitter Card 支持
- ✅ 自动生成 sitemap
- ✅ 语义化 HTML
- ✅ 清理 URL（无 .html 后缀）

### ✅ Markdown 支持

- ✅ 标准 Markdown 语法
- ✅ GitHub Flavored Markdown
- ✅ 代码高亮（行号）
- ✅ 自定义容器
- ✅ 代码组
- ✅ 表格支持
- ✅ Emoji 支持 🎉

### ✅ Vue 3 集成

- ✅ 在 Markdown 中使用 Vue 组件
- ✅ 自定义组件系统
- ✅ 响应式数据绑定
- ✅ 完整的 Vue 3 API

### ✅ 自定义能力

- ✅ 主题定制（颜色、样式）
- ✅ 自定义布局
- ✅ 自定义组件
- ✅ 插件系统
- ✅ Vite 配置

## 🚀 部署到生产环境

### 方式 1: GitHub Pages（免费）

```bash
# 1. 推送代码
git add .
git commit -m "Initial commit"
git push origin main

# 2. 在 GitHub 仓库设置中启用 Pages
# Settings > Pages > Source: GitHub Actions

# 3. 自动部署（已配置 workflow）
```

### 方式 2: Vercel（推荐，最简单）

1. 访问 [vercel.com](https://vercel.com)
2. 导入 GitHub 仓库
3. 一键部署 ✅

### 方式 3: Netlify

1. 访问 [netlify.com](https://netlify.com)
2. 连接 GitHub 仓库
3. 自动部署 ✅

详细部署指南请查看 `DEPLOYMENT.md`

## 📁 项目结构

```
ai-doc/
├── docs/                          # 📝 文档源文件
│   ├── .vitepress/               # ⚙️ VitePress 配置
│   │   ├── config.mts            # 主配置文件
│   │   └── theme/                # 🎨 主题定制
│   │       ├── index.ts          # 主题入口
│   │       ├── style.css         # 全局样式
│   │       └── components/       # 自定义组件
│   ├── public/                   # 🖼️ 静态资源
│   ├── guide/                    # 📚 使用指南
│   ├── basics/                   # 📖 基础内容
│   └── index.md                  # 🏠 首页
├── .github/workflows/            # 🤖 自动部署
├── package.json                  # 📦 依赖管理
└── README.md                     # 📄 项目说明
```

## 💡 最佳实践

### 内容组织

1. **清晰的目录结构**

   ```
   docs/
   ├── 主题1/
   │   ├── 章节1.md
   │   └── 章节2.md
   └── 主题2/
       ├── 章节1.md
       └── 章节2.md
   ```

2. **页面元数据**

   ```markdown
   ---
   title: 页面标题（用于浏览器标签和 SEO）
   description: 页面描述（用于搜索引擎）
   ---
   ```

3. **内部链接**
   ```markdown
   [相对链接](./other-page.md)
   [绝对链接](/basics/introduction)
   ```

### 组件使用

1. **合理使用组件增强内容**

   - 用 CustomCard 突出重要信息
   - 用 Badge 标记状态
   - 用 Timeline 展示时间线

2. **保持一致性**
   - 统一的颜色方案
   - 一致的格式规范
   - 相同的风格

### 性能优化

1. **图片优化**

   - 压缩图片大小
   - 使用 WebP 格式
   - 提供 alt 文本

2. **代码优化**
   - 避免过大的代码块
   - 使用代码折叠
   - 合理的代码示例

## 🎓 学习资源

- 📚 [VitePress 官方文档](https://vitepress.dev/)
- 🎨 [Vue 3 教程](https://vuejs.org/tutorial/)
- ⚡ [Vite 指南](https://vitejs.dev/guide/)
- 📝 [Markdown 语法](https://www.markdownguide.org/)

## ❓ 需要帮助？

- 📖 查看 [README.md](./README.md)
- ⚡ 查看 [QUICK_REFERENCE.md](./QUICK_REFERENCE.md)
- 🚀 查看 [DEPLOYMENT.md](./DEPLOYMENT.md)
- 🤝 查看 [CONTRIBUTING.md](./CONTRIBUTING.md)

## 🎉 开始创作吧！

你的 AI 知识库已经准备就绪，现在：

1. ✨ 浏览 http://localhost:5173
2. ✍️ 开始编写你的内容
3. 🎨 自定义主题和样式
4. 🚀 部署到生产环境

**祝你创作愉快！** 🚀

---

**提示**: 将本文件设为书签，随时查看！ ⭐
