# 部署指南

本文档介绍如何将 AI 知识库部署到各种平台。

## GitHub Pages 部署

### 自动部署（推荐）

项目已配置 GitHub Actions 自动部署工作流。

**步骤：**

1. 推送代码到 GitHub 仓库

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/ai-doc.git
git push -u origin main
```

2. 在 GitHub 仓库设置中启用 GitHub Pages

   - 进入 Settings > Pages
   - Source 选择 "GitHub Actions"

3. 修改配置文件

如果仓库名不是 `yourusername.github.io`，需要修改 `docs/.vitepress/config.mts`：

```typescript
export default defineConfig({
  base: '/your-repo-name/', // 仓库名
  // ... 其他配置
})
```

4. 推送更改

```bash
git add .
git commit -m "Update base path"
git push
```

### 手动部署

```bash
# 构建
npm run build

# 推送到 gh-pages 分支
cd docs/.vitepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:yourusername/ai-doc.git main:gh-pages

cd -
```

## Vercel 部署

Vercel 提供了最简单的部署方式，支持自动部署。

**步骤：**

1. 访问 [Vercel](https://vercel.com)
2. 点击 "Import Project"
3. 导入 GitHub 仓库
4. 配置构建设置：
   - Framework Preset: `Other`
   - Build Command: `npm run build`
   - Output Directory: `docs/.vitepress/dist`
5. 点击 "Deploy"

**环境变量（可选）：**

不需要额外的环境变量。

**自定义域名：**

1. 在 Vercel 项目设置中添加域名
2. 配置 DNS 记录
3. 等待 SSL 证书生成

## Netlify 部署

Netlify 也提供简单的部署流程和免费的 CDN。

**步骤：**

1. 访问 [Netlify](https://netlify.com)
2. 点击 "New site from Git"
3. 连接 GitHub 仓库
4. 配置构建设置：
   - Build command: `npm run build`
   - Publish directory: `docs/.vitepress/dist`
5. 点击 "Deploy site"

**netlify.toml 配置（推荐）：**

在项目根目录创建 `netlify.toml`：

```toml
[build]
  command = "npm run build"
  publish = "docs/.vitepress/dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Cloudflare Pages 部署

Cloudflare Pages 提供极快的全球 CDN。

**步骤：**

1. 访问 [Cloudflare Pages](https://pages.cloudflare.com)
2. 创建新项目
3. 连接 GitHub 仓库
4. 配置构建设置：
   - Build command: `npm run build`
   - Build output directory: `docs/.vitepress/dist`
5. 部署

## 自托管服务器

### Nginx 配置

```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /var/www/ai-doc;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 启用 gzip 压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # 缓存静态资源
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Docker 部署

创建 `Dockerfile`：

```dockerfile
FROM node:20-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

创建 `nginx.conf`：

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
}
```

构建和运行：

```bash
# 构建镜像
docker build -t ai-doc .

# 运行容器
docker run -d -p 8080:80 ai-doc
```

### Docker Compose

创建 `docker-compose.yml`：

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - '8080:80'
    restart: unless-stopped
```

运行：

```bash
docker-compose up -d
```

## 性能优化建议

### 1. 启用 CDN

- 使用 Cloudflare、AWS CloudFront 或其他 CDN 服务
- 配置适当的缓存策略

### 2. 图片优化

```bash
# 使用 imagemin 压缩图片
npm install -g imagemin-cli
imagemin docs/public/*.{jpg,png} --out-dir=docs/public/optimized
```

### 3. 启用 Gzip/Brotli 压缩

大多数托管平台默认启用，自托管需要配置服务器。

### 4. 配置缓存头

```nginx
# 对于 Nginx
location ~* \.(js|css|png|jpg|jpeg|gif|ico)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

## 环境变量配置

VitePress 支持环境变量：

创建 `.env` 文件：

```bash
VITE_APP_TITLE=AI 知识库
VITE_API_URL=https://api.example.com
```

在代码中使用：

```typescript
const title = import.meta.env.VITE_APP_TITLE
```

## 监控和分析

### Google Analytics

在 `docs/.vitepress/config.mts` 中添加：

```typescript
export default defineConfig({
  head: [
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX' }],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');`,
    ],
  ],
})
```

### Plausible Analytics（隐私友好）

```typescript
head: [
  [
    'script',
    {
      defer: '',
      'data-domain': 'your-domain.com',
      src: 'https://plausible.io/js/script.js',
    },
  ],
]
```

## 故障排除

### 构建失败

1. 检查 Node.js 版本（需要 18+）
2. 清除缓存：`rm -rf node_modules package-lock.json && npm install`
3. 检查 Markdown 语法错误

### 404 错误

1. 确保 `base` 配置正确
2. 检查服务器重写规则
3. 验证文件路径大小写

### 样式丢失

1. 检查 `base` 路径
2. 验证静态资源路径
3. 检查 CDN 配置

## 持续集成/持续部署 (CI/CD)

### GitHub Actions（已配置）

工作流文件位于 `.github/workflows/deploy.yml`

### GitLab CI

创建 `.gitlab-ci.yml`：

```yaml
image: node:20

pages:
  stage: deploy
  script:
    - npm install
    - npm run build
    - mv docs/.vitepress/dist public
  artifacts:
    paths:
      - public
  only:
    - main
```

## 备份策略

1. **代码备份**：Git 仓库已提供版本控制
2. **定期备份**：设置自动备份脚本
3. **多平台部署**：在多个平台部署以提高可用性

## 安全建议

1. **HTTPS**：始终使用 HTTPS
2. **CSP 头**：配置内容安全策略
3. **定期更新**：保持依赖包更新
4. **访问控制**：如需限制访问，使用身份验证

## 性能监控

推荐工具：

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)

## 更多资源

- [VitePress 部署指南](https://vitepress.dev/guide/deploy)
- [Vercel 文档](https://vercel.com/docs)
- [Netlify 文档](https://docs.netlify.com/)
- [GitHub Pages 文档](https://docs.github.com/pages)
