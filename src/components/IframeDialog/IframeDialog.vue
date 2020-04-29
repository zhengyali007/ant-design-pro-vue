/**
*******************
*   @author 郑亚莉
*   @date 2020-04-28
*   @description 嵌入iframe且自定义宽高的弹框组件
*******************
*/
<template>
    <div>
      <a-modal
        :title="title"
        :width="width"
        :visible="visible"
        :confirmLoading="confirmLoading"
        @cancel="handleCancel"
        @ok="handleOk"
      >
        <iframe class="iframe-style" :style="'height:'+ height + 'px'"  :src="url" frameborder="no"></iframe>
      </a-modal>
    </div>
</template>

<script>
export default {
  name: 'iframeDialog',
  props: {
  },
  data() {
    return {
      visible: false, // 弹框是否可见
      title: '弹框',// 弹框标题
      url: '',// 地址
      width: 600, // 弹框宽度
      height: 400,// 弹框高度
      okText: '确定', // 底部按钮确定文字
      confirmLoading: false,
    }
  },
  methods: {
    //打开弹框方法 value为打开弹框时传入的值
    openDialog(value) {
      this.visible = true
      // console.log(value)
      // 把传入的参数赋值到data里
      if(Object.keys(value).length) {
        Object.keys(value).forEach(item=>{
          this[item] = value[item]
        })
      }

    },
    //关闭弹框-确定操作
    handleOk () {
      this.$emit('handleOk')
      this.visible = false
    },
    // 关闭弹框-取消操作
    handleCancel () {
      this.visible = false
    }
  }
}
</script>

<style scoped>
.iframe-style {
  width: 100%;
  height: 100%;
}
</style>