import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'AI 知识库',
  description: '全面的人工智能知识库，涵盖机器学习、深度学习、自然语言处理等领域',
  lang: 'zh-CN',

  // SEO 优化配置
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'AI,人工智能,机器学习,深度学习,神经网络,自然语言处理,计算机视觉',
      },
    ],
    ['meta', { name: 'author', content: 'AI Knowledge Base' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'AI 知识库 - 全面的人工智能学习资源' }],
    [
      'meta',
      {
        property: 'og:description',
        content: '全面的人工智能知识库，涵盖机器学习、深度学习、自然语言处理等领域',
      },
    ],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],

  // 主题配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '使用指南', link: '/guide/quick-start' },
      { text: '基础知识', link: '/basics/introduction' },
      {
        text: '更多主题',
        items: [
          { text: '机器学习', link: '/machine-learning/' },
          { text: '深度学习', link: '/deep-learning/' },
          { text: '应用实践', link: '/applications/' },
        ],
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '使用指南',
          items: [{ text: '快速开始', link: '/guide/quick-start' }],
        },
      ],
      '/basics/': [
        {
          text: 'AI 基础知识',
          items: [{ text: '什么是人工智能', link: '/basics/introduction' }],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/yourusername/ai-knowledge-base' }],

    // 搜索配置
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                },
              },
            },
          },
        },
      },
    },

    // 页脚
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2025 AI 知识库',
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },

    // 文档页脚配置
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    // 外部链接图标
    externalLinkIcon: true,

    // 大纲配置
    outline: {
      label: '页面导航',
      level: [2, 3],
    },
  },

  // Markdown 配置
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },

  // 站点地图配置（SEO）
  sitemap: {
    hostname: 'https://your-domain.com',
  },

  // 启用最后更新时间
  lastUpdated: true,

  // 清理 URL
  cleanUrls: true,
})
