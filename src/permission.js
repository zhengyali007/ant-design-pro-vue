import Vue from 'vue'
import router from './router'
import store from './store'

import NProgress from 'nprogress' // progress bar
import '@/components/NProgress/nprogress.less' // progress bar custom style
import notification from 'ant-design-vue/es/notification'
import { setDocumentTitle, domTitle } from '@/utils/domUtil'
import { ACCESS_TOKEN } from '@/store/mutation-types'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['login', 'register', 'registerResult'] // no redirect whitelist 免登陆白名单
const defaultRoutePath = '/index' // 进入系统默认打开路由

// 路由导航钩子
// 1.进入路由之前 进行路由拦截
router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(`${to.meta.title} - ${domTitle}`))
  if (Vue.ls.get(ACCESS_TOKEN)) {
    // mock 测试不同角色返回不同的userinfo
    const id = Vue.ls.get(ACCESS_TOKEN) == 'admin token test' ? 1 : 2 // 1为admin用户 2为user用户
    /* has token */
    if (to.path === '/user/login') {
      next({ path: defaultRoutePath })
      NProgress.done()
    } else {
      if (store.getters.roles.length === 0) {
        store
          .dispatch('GetInfo',{id})
          .then(res => {
            const roles = res.result && res.result.role
            store.dispatch('GenerateRoutes', { roles }).then(() => {
              // 根据roles权限生成可访问的路由表
              // 动态添加可访问路由表
              router.addRoutes(store.getters.addRouters)
              // 请求带有 redirect 重定向时，登录自动重定向到该地址
              next({ path: defaultRoutePath})
              // const redirect = decodeURIComponent(from.query.redirect || to.path)
              // if (to.path === redirect) {
              //   // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
              //   next({ ...to, replace: true })
              // } else {
              //   // 跳转到目的路由
              //   next({ path: defaultRoutePath})
              //   // next({ path: redirect })
              // }
            })
          })
          .catch(() => {
            notification.error({
              message: '错误',
              description: '请求用户信息失败，请重试'
            })
            store.dispatch('Logout').then(() => {
              next({ path: '/user/login', query: { redirect: to.fullPath } })
            })
          })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.includes(to.name)) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next({ path: '/user/login', query: { redirect: to.fullPath } })
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})

// 2. 进入路由之后
router.afterEach(() => {
  NProgress.done() // finish progress bar
})
