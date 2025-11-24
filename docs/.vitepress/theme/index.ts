// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

// 导入自定义组件
import CustomCard from './components/CustomCard.vue'
import Badge from './components/Badge.vue'
import Timeline from './components/Timeline.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 注册全局组件
    app.component('CustomCard', CustomCard)
    app.component('Badge', Badge)
    app.component('Timeline', Timeline)
  },
} satisfies Theme
