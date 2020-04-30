// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

// 静态路由表
export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/index/index',
    children: [
      // 自定义路由
      // 0. 首页
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/index/Index'),
        meta: { title: '首页', keepAlive: true, icon: bxAnaalyse, permission: [ 'index' ] }
      },
      // 1. 系统设置
      {
        path: 'system',
        name: 'system',
        redirect: '/menu/menuList',
        component: PageView,
        meta: { title: '系统管理', keepAlive: true, icon: 'control', permission: [ 'system' ] },
        children: [
          {
            path: 'menu',
            name: 'menu',
            component: () => import('@/views/system/menu/MenuList'),
            meta: { title: '菜单列表', icon: 'unordered-list', keepAlive: false, permission: [ 'system' ] }
          },
          {
            path: 'role/:pageNo([1-9]\\d*)?',
            name: 'role',
            component: () => import('@/views/system/role/RoleList'),
            meta: { title: '角色列表', icon: 'team', keepAlive: false, permission: [ 'system' ] }
          }
        ]
      },
      // 2. 示例
      {
        path: 'example',
        name: 'example',
        redirect: '/example/iframe',
        component: PageView,
        meta: { title: '示例', keepAlive: true, icon: 'highlight', permission: [ 'example' ] },
        children: [
          // 2.1 嵌入iframe示例
          {
            path: 'iframe',
            name: 'iframe',
            component: () => import('@/views/example/iframePage/IframePage'),
            meta: { title: '嵌入iframe示例', icon: 'sliders', keepAlive: false, permission: [ 'iframe' ] }
          },
          // 2.2 表单示例
          {
            path: '/form',
            redirect: '/form/base-form',
            component: RouteView,
            meta: { title: '表单页', icon: 'form', permission: [ 'form' ] },
            children: [
              {
                path: '/form/base-form',
                name: 'BaseForm',
                component: () => import('@/views/example/form/BasicForm'),
                meta: { title: '基础表单', keepAlive: true, permission: [ 'form' ] }
              },
              {
                path: '/form/step-form',
                name: 'StepForm',
                component: () => import('@/views/example/form/stepForm/StepForm'),
                meta: { title: '分步表单', keepAlive: true, permission: [ 'form' ] }
              },
              {
                path: '/form/advanced-form',
                name: 'AdvanceForm',
                component: () => import('@/views/example/form/advancedForm/AdvancedForm'),
                meta: { title: '高级表单', keepAlive: true, permission: [ 'form' ] }
              }
            ]
          },
          // 2.3 表格示例
          {
            path: '/list',
            name: 'list',
            component: RouteView,
            redirect: '/list/table-list',
            meta: { title: '列表页', icon: 'table', permission: [ 'table' ] },
            children: [
              {
                path: '/list/table-list/:pageNo([1-9]\\d*)?',
                name: 'TableListWrapper',
                hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
                component: () => import('@/views/example/list/TableList'),
                meta: { title: '查询表格', keepAlive: true, permission: [ 'table' ] }
              },
              {
                path: '/list/tree-list',
                name: 'TreeList',
                component: () => import('@/views/example/list/TreeList'),
                meta: { title: '树目录表格', keepAlive: true }
              },
              {
                path: '/list/edit-table',
                name: 'EditList',
                component: () => import('@/views/example/list/TableInnerEditList'),
                meta: { title: '内联编辑表格', keepAlive: true }
              },
              {
                path: '/list/basic-list',
                name: 'BasicList',
                component: () => import('@/views/example/list/StandardList'),
                meta: { title: '标准列表', keepAlive: true, permission: [ 'table' ] }
              },
              {
                path: '/list/card',
                name: 'CardList',
                component: () => import('@/views/example/list/CardList'),
                meta: { title: '卡片列表', keepAlive: true, permission: [ 'table' ] }
              }
            ]
          },
          // 2.4 详情页示例
          {
            path: '/profile',
            name: 'profile',
            component: () => import('@/views/example/profile/Index'),
            meta: { title: '详情页', icon: 'profile', permission: [ 'profile' ] }
          }
        ]
      },
      // 异常页
      {
        path: '/exception',
        name: 'exception',
        component: RouteView,
        redirect: '/exception/403',
        hidden: true,
        meta: { title: '异常页', icon: 'warning', permission: [ 'exception' ] },
        children: [
          {
            path: '/exception/403',
            name: 'Exception403',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403'),
            meta: { title: '403', permission: [ 'exception' ] }
          },
          {
            path: '/exception/404',
            name: 'Exception404',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
            meta: { title: '404', permission: [ 'exception' ] }
          },
          {
            path: '/exception/500',
            name: 'Exception500',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/500'),
            meta: { title: '500', permission: [ 'exception' ] }
          }
        ]
      },

      // 个人设置
      {
        path: '/account',
        component: RouteView,
        redirect: '/account/center',
        name: 'account',
        hidden: true,
        meta: { title: '个人页', icon: 'user', keepAlive: true, permission: [ 'user' ] },
        children: [
          {
            path: '/account/center',
            name: 'center',
            component: () => import('@/views/account/center/Index'),
            meta: { title: '个人中心', keepAlive: true, permission: [ 'user' ] }
          },
          {
            path: '/account/settings',
            name: 'settings',
            component: () => import('@/views/account/settings/Index'),
            meta: { title: '个人设置', hideHeader: true, permission: [ 'user' ] },
            redirect: '/account/settings/base',
            hideChildrenInMenu: true,
            children: [
              {
                path: '/account/settings/base',
                name: 'BaseSettings',
                component: () => import('@/views/account/settings/BaseSetting'),
                meta: { title: '基本设置', hidden: true, permission: [ 'user' ] }
              },
              {
                path: '/account/settings/security',
                name: 'SecuritySettings',
                component: () => import('@/views/account/settings/Security'),
                meta: { title: '安全设置', hidden: true, keepAlive: true, permission: [ 'user' ] }
              },
              {
                path: '/account/settings/custom',
                name: 'CustomSettings',
                component: () => import('@/views/account/settings/Custom'),
                meta: { title: '个性化设置', hidden: true, keepAlive: true, permission: [ 'user' ] }
              },
              {
                path: '/account/settings/binding',
                name: 'BindingSettings',
                component: () => import('@/views/account/settings/Binding'),
                meta: { title: '账户绑定', hidden: true, keepAlive: true, permission: [ 'user' ] }
              },
              {
                path: '/account/settings/notification',
                name: 'NotificationSettings',
                component: () => import('@/views/account/settings/Notification'),
                meta: { title: '新消息通知', hidden: true, keepAlive: true, permission: [ 'user' ] }
              }
            ]
          }
        ]
      }

    ]
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
