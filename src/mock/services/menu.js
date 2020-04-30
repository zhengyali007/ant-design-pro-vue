/**
 *******************
 *   @author 郑亚莉
 *   @date 2020-04-27
 *   @description 菜单列表mock数据
 *******************
 */

import Mock from 'mockjs2'
import { builder, getQueryParameters } from '../util'

const menu = (options) => {
  return builder({
    'data': [
      //首页
      {
        'key': '0',
        'icon': '',
        'title': '首页',
        'url': '/index',
        'menuType': 1,
        'type': 1,
        'btnType': 1,
        'description': '',
        'sort': 1
      },
      // 系统设置
      {
        'key': '1',
        'icon': 'dashboard',
        'title': '系统管理',
        'url': '/system', // type为路由时即为路径url，为按钮时即为按钮触发的api
        'type': 1, // 1路由 2按钮
        'menuType': 1, // 1内部路由 2内部嵌入iframe 3外部路由 （type为1时有效）
        'btnType': 1, // 1行按钮 2操作栏按钮 3行按钮和操作栏按钮（type为2时有效）
        'description': '这是系统设置菜单',
        'sort': 1,
        'children': [
          {
            'key': '2',
            'icon': '',
            'title': '菜单管理',
            'url': '/system/menu',
            'type': 1,
            'menuType': 1,
            'btnType': 1,
            'description': '菜单管理描述',
            'sort': 1,
            'children': [
              {
                'key': '3',
                'icon': 'add',
                'title': '新建',
                'url': '/system/menu/add', // api路径
                'menuType': 1,
                'type': 2,
                'btnType': 2,
                'sort': 1

              },
              {
                'key': '4',
                'parentId': 'system-menu',
                'icon': 'add',
                'title': '编辑',
                'url': '/system/menu/edit',
                'menuType': 1,
                'btnType': 1,
                'type': 2,
                'sort': 2
              },
              {
                'key': '5',
                'parentId': 'system-menu',
                'icon': 'add',
                'title': '删除',
                'btnType': 3,
                'url': '/system/menu/remove',
                'menuType': 1,
                'type': 2,
                'sort': 3
              }
            ]
          },
          {
            'key': '6',
            'icon': '',
            'title': '角色管理',
            'url': '/system/role',
            'menuType': 1,
            'type': 1,
            'btnType': 1,
            'description': '',
            'sort': 2
          }
        ]
      },
      // 示例
      {
        'key': '7',
        'icon': 'dashboard',
        'title': '示例',
        'url': '/example',
        'type': 1,
        'menuType': 1,
        'btnType': 1,
        'description': '这是示例菜单',
        'sort': 1,
        'children': [
          {
            'key': '8',
            'icon': '',
            'title': '表单页',
            'url': '/example/form',
            'type': 1,
            'menuType': 1,
            'btnType': 1,
            'description': '表单页',
            'sort': 1,
            'children': [
              {
                'key': '9',
                'parentId': 'system-menu',
                'icon': 'add',
                'title': '编辑',
                'url': '/example/form/edit',
                'menuType': 1,
                'btnType': 1,
                'type': 2,
                'sort': 2
              }
            ]
          },
          {
            'key': '10',
            'icon': '',
            'title': '列表页',
            'url': '/example/list',
            'menuType': 1,
            'type': 1,
            'btnType': 1,
            'description': '',
            'sort': 2
          },
          {
            'key': '11',
            'icon': '',
            'title': '详情页',
            'url': '/example/profile',
            'menuType': 1,
            'type': 1,
            'btnType': 1,
            'description': '',
            'sort': 2
          }
        ]
      }
    ]
  })
}

const checkedMenu = (options) => {
  const id = getQueryParameters(options).id
  let checked = []
  if (id == 'admin') { // admin
    checked = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  } else { // user
    checked = ['0', '10']
  }
  return builder({ data: checked })
}

Mock.mock(/\/menu\/list/, 'get', menu)
Mock.mock(/\/menu\/checkedMenu/, 'get', checkedMenu)
