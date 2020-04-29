/**
*******************
*   @author 郑亚莉
*   @date 2020-04-28
*   @description  页面嵌入iframe示例
*******************
*/
<template>
    <div style="height: 100%">
      <div class="table-operator">
        <a-button type="primary" @click="btnClick">iframe弹框示例</a-button>
      </div>
      <iframe class="iframe-style" :src="url" frameborder="no"></iframe>
      <iframe-model ref="iframeModel" @handleOk="handleOK"/>
    </div>
</template>

<script>
import IframeModel from '../../components/IframeDialog/IframeDialog'
export default {
  name: 'IframePage',
  components:{
    IframeModel
  },
  data(){
    return {
      url: 'https://picsum.photos/',
      height: '90%',
      width: '100%',
    }
  },
  mounted() {
  },
  methods:{
    btnClick() {
      let value = {}
      value = {
        title: 'iframe弹框示例', // 弹框标题，可选，默认为"弹框"
        width: 800,  // 弹框宽度（px），可选，默认为600
        height: 600,// 弹框高度（px），可选，默认为400
        url: 'https://www.tapd.cn/', // iframe地址，必选，不写则显示空白
        okText: '保存', // 确定按钮文字，可选，默认为"确定"
      }
      this.$refs.iframeModel.openDialog(value)
    },
    handleOK() {
      console.log('ok')
    }
  }
}
</script>

<style scoped>
.iframe-style {
  width: 100%;
  height: calc(100vh - 380px);
}
</style>