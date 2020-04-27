/**
 *******************
 *   @author 郑亚莉
 *   @date 2020-04-27
 *   @description 菜单列表接口
 *******************
 */

import { axios } from '@/utils/request'

const api = {
  list: '/menu/list',
}

export default api

export function getMenuList (parameter) {
  return axios({
    url:'/menu/list',
    method: 'get',
    params: parameter
  })
}