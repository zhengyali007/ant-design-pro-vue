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
      >

      </a-modal>
    </div>
</template>

<script>
export default {
  name: 'iframeDialog',
  props: {
    title: { // 弹框标题
      type: String,
      default: '弹窗'
    },
    width: { // 弹框宽度
      type: Number,
      default: 100
    },
    height:{ // 弹框高度
      type: Number,
      default: 100,
    }
  },
  data() {
    return {
      visible: false, // 弹框是否可见
    }
  },
  methods: {
    //打开弹框方法 value为打开弹框时传入的值
    openDialog(value) {
      this.visible = true
    }
  }
}
</script>

<style scoped>

</style>