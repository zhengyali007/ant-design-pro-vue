import Mock from 'mockjs2'
import { builder, getBody } from '../util'

const info = (options) => {
  const id = getBody(options).id
  console.log('options', id)
  let userInfo = {}
  let roleObj = {}
  if (id == 1) { // 1为admin用户
    userInfo = {
      'id': '1',
      'name': 'zhengyali1',
      'username': 'admin',
      'password': '',
      'avatar': '/avatar2.jpg',
      'status': 1,
      'telephone': '',
      'lastLoginIp': '27.154.74.117',
      'lastLoginTime': 1534837621348,
      'creatorId': 'admin',
      'createTime': 1497160610259,
      'merchantCode': 'TLif2btpzg079h15bk',
      'deleted': 0,
      'roleId': 'admin',
      'role': {}
    }
    roleObj = {
      'id': 'admin',
      'name': '管理员',
      'describe': '拥有所有权限',
      'status': 1,
      'creatorId': 'system',
      'createTime': 1497160610259,
      'deleted': 0,
      'permissions': [
        {
          'roleId': 'admin',
          'permissionId': 'index',
          'permissionName': '首页',
          'actions': [], // 后端控制前端页面所有的按钮，传不传都行，可以保留字段 （目前没有做到根据后端传过来的按钮列表来渲染页面按钮）
          'actionEntitySet': []
        },
        {
          'roleId': 'admin',
          'permissionId': 'system',
          'permissionName': '系统管理',
          'actionEntitySet': [
            {
              'action': 'query',
              'describe': '查询',
              'defaultCheck': false
            },
            {
              'action': 'add',
              'describe': '新增',
              'defaultCheck': false
            }, {
              'action': 'delete',
              'describe': '删除',
              'defaultCheck': false
            }, {
              'action': 'edit',
              'describe': '修改',
              'defaultCheck': false
            }, {
              'action': 'enable',
              'describe': '是否禁用',
              'defaultCheck': false
            }]
        },
        {
          'roleId': 'admin',
          'permissionId': 'example',
          'permissionName': '示例',
          'actionEntitySet': [
            {
              'action': 'query',
              'describe': '查询',
              'defaultCheck': false
            },
            {
              'action': 'add',
              'describe': '新增',
              'defaultCheck': false
            },
            {
              'action': 'edit',
              'describe': '修改',
              'defaultCheck': false
            }, {
              'action': 'delete',
              'describe': '删除',
              'defaultCheck': false
            }]
        },
        {
          'roleId': 'admin',
          'permissionId': 'iframe',
          'permissionName': 'iframe示例',
          'actionEntitySet': null
        },
        {
          'roleId': 'admin',
          'permissionId': 'exception',
          'permissionName': '异常页面权限',
          'actionEntitySet': null
        },
         {
          'roleId': 'admin',
          'permissionId': 'profile',
          'permissionName': '详情页页权限',
          'actionEntitySet': [
            {
            'action': 'add',
            'describe': '新增',
            'defaultCheck': false
          }, {
            'action': 'query',
            'describe': '查询',
            'defaultCheck': false
          }, {
            'action': 'get',
            'describe': '详情',
            'defaultCheck': false
          }, {
            'action': 'edit',
            'describe': '修改',
            'defaultCheck': false
          }, {
            'action': 'delete',
            'describe': '删除',
            'defaultCheck': false
          }]
        },
        {
          'roleId': 'admin',
          'permissionId': 'table',
          'permissionName': '表格权限',
          'actionEntitySet': [
            {
            'action': 'add',
            'describe': '新增',
            'defaultCheck': false
          }, {
            'action': 'import',
            'describe': '导入',
            'defaultCheck': false
          }, {
            'action': 'get',
            'describe': '详情',
            'defaultCheck': false
          }, {
            'action': 'edit',
            'describe': '修改',
            'defaultCheck': false
          }]
        },
        {
          'roleId': 'admin',
          'permissionId': 'form',
          'permissionName': '表单权限',
          'actionEntitySet': [
            {
            'action': 'add',
            'describe': '新增',
            'defaultCheck': false
          }, {
            'action': 'get',
            'describe': '详情',
            'defaultCheck': false
          }, {
            'action': 'query',
            'describe': '查询',
            'defaultCheck': false
          }, {
            'action': 'edit',
            'describe': '修改',
            'defaultCheck': false
          }, {
            'action': 'delete',
            'describe': '删除',
            'defaultCheck': false
          }]
        },
        {
          'roleId': 'admin',
          'permissionId': 'link',
          'permissionName': 'link',
          'actionEntitySet': null
        },
      ]
    }
  } else { // user用户
    userInfo = {
      'id': '2',
      'name': 'zhengyali2',
      'username': 'user',
      'password': '',
      'avatar': '/avatar2.jpg',
      'status': 1,
      'telephone': '',
      'lastLoginIp': '27.154.74.117',
      'lastLoginTime': 1534837621348,
      'creatorId': 'admin',
      'createTime': 1497160610259,
      'merchantCode': 'TLif2btpzg079h15bk',
      'deleted': 0,
      'roleId': 'user',
      'role': {}
    }
    roleObj = {
      'id': 'user',
      'name': '普通用户',
      'describe': '拥有部分权限',
      'status': 1,
      'creatorId': 'system',
      'createTime': 1497160610259,
      'deleted': 0,
      'permissions': [
        {
          'roleId': 'user',
          'permissionId': 'index',
          'permissionName': '首页',
          'actionEntitySet': []
        },
        {
          'roleId': 'user',
          'permissionId': 'example',
          'permissionName': '示例',
          'actionEntitySet': [
            {
              'action': 'query',
              'describe': '查询',
              'defaultCheck': false
            },
            {
              'action': 'add',
              'describe': '新增',
              'defaultCheck': false
            },
            {
              'action': 'edit',
              'describe': '修改',
              'defaultCheck': false
            }, {
              'action': 'delete',
              'describe': '删除',
              'defaultCheck': false
            }]
        },
        {
          'roleId': 'admin',
          'permissionId': 'exception',
          'permissionName': '异常页面权限',
          'actionEntitySet': null
        },
        {
          'roleId': 'admin',
          'permissionId': 'profile',
          'permissionName': '详情页页权限',
          'actionEntitySet': [
            {
              'action': 'add',
              'describe': '新增',
              'defaultCheck': false
            }, {
              'action': 'query',
              'describe': '查询',
              'defaultCheck': false
            }, {
              'action': 'get',
              'describe': '详情',
              'defaultCheck': false
            }, {
              'action': 'edit',
              'describe': '修改',
              'defaultCheck': false
            }, {
              'action': 'delete',
              'describe': '删除',
              'defaultCheck': false
            }]
        }
       ]
    }
  }
  userInfo.role = roleObj
  return builder(userInfo)
}


Mock.mock(/\/api\/user\/info/, 'get', info)
