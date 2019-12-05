<template>
  <pro-layout
    title="Ant Design Pro"
    :menus="menus"
    :collapsed="collapsed"
    :theme="theme"
    :layout="layout"
    :contentWidth="contentWidth"
    :auto-hide-header="autoHideHeader"
    :mediaQuery="query"
    :isMobile="isMobile"
    :handleMediaQuery="handleMediaQuery"
    :handleCollapse="handleCollapse"
    :logo="logoRender"
    :i18nRender="i18nRender"
    :rightContentRender="rightContentRender"
    :footerRender="footerRender"
  >
    <router-view />
  </pro-layout>
</template>

<script>
import ProLayout from '@ant-design-vue/pro-layout'
import { asyncRouterMap } from '../config/router.config'
import { i18nRender } from '../locales'
import { RightContentRender, FooterRender } from '../components/BaseLayoutComponents'
import LogoSvg from '../assets/logo.svg?inline'

export default {
  name: 'BasicLayout',
  data () {
    return {
      // base
      menus: [],
      // 侧栏收起状态
      collapsed: false,
      // 自动隐藏头部栏
      autoHideHeader: false,
      // 媒体查询
      query: {},
      // 布局类型
      layout: 'sidemenu', // 'sidemenu', 'topmenu'
      // 定宽: true / 流式: false
      contentWidth: true,
      // 主题 'dark' | 'light'
      theme: 'dark',
      // 是否手机模式
      isMobile: false
    }
  },
  created () {
    this.menus = asyncRouterMap.find(item => item.path === '/').children
  },
  methods: {
    i18nRender,
    handleMediaQuery (val) {
      this.query = val
      if (this.isMobile && !val['screen-xs']) {
        this.isMobile = false
        return
      }
      if (!this.isMobile && val['screen-xs']) {
        this.isMobile = true
        this.collapsed = false
      }
    },
    handleCollapse (val) {
      this.collapsed = val
    },
    logoRender () {
      return <LogoSvg />
    },
    rightContentRender (h, props) {
      return <RightContentRender theme={this.theme} />
    },
    footerRender () {
      return <FooterRender />
    }
  },
  components: {
    ProLayout
  }
}
</script>

<style lang="less" scoped>
@import "BasicLayout.less";
</style>
