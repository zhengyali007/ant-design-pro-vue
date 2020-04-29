<template>
  <a-modal
    title="操作"
    :width="400"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <a-tree
      checkable
      @expand="onExpand"
      :expandedKeys="expandedKeys"
      :autoExpandParent="autoExpandParent"
      v-model="checkedKeys"
      @select="onSelect"
      :selectedKeys="selectedKeys"
      :treeData="treeData"
    />
  </a-modal>
</template>

<script>

import { getPermissions } from '@/api/manage'
import { actionToObject } from '@/utils/permissions'
import pick from 'lodash.pick'

export default {
  name: 'RoleModal',
  data () {
    return {
      visible:false,
      confirmLoading: false,
      expandedKeys: [],
      autoExpandParent: true,
      checkedKeys: ['2','3'],
      selectedKeys: [],
      treeData:[],
    }
  },
  watch: {
    checkedKeys(val) {
      console.log('onCheck', val)
    },
  },
  created () {

  },
  methods: {
    openModal(data) {
      if(data) {
        this.treeData = data
      }
      this.visible = true
    },
    onExpand(expandedKeys) {
      console.log('onExpand', expandedKeys)
      // if not set autoExpandParent to false, if children expanded, parent can not collapse.
      // or, you can remove all expanded children keys.
      this.expandedKeys = expandedKeys
      this.autoExpandParent = false
    },
    onCheck(checkedKeys) {
      console.log('onCheck', checkedKeys)
      this.checkedKeys = checkedKeys
    },
    onSelect(selectedKeys, info) {
      console.log('onSelect', info)
      this.selectedKeys = selectedKeys
    },

    handleOk () {
      this.visible = false
    },
    close () {
      this.visible = false
    },
    handleCancel () {
      this.close()
    },

    // loadPermissions () {
    //   const that = this
    //   getPermissions().then(res => {
    //     const result = res.result
    //     that.permissions = result.map(permission => {
    //       const options = actionToObject(permission.actionData)
    //       permission.checkedAll = false
    //       permission.selected = []
    //       permission.indeterminate = false
    //       permission.actionsOptions = options.map(option => {
    //         return {
    //           label: option.describe,
    //           value: option.action
    //         }
    //       })
    //       return permission
    //     })
    //   })
    // }

  }
}
</script>

<style scoped>

</style>
