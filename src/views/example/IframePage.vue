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
        <a-button type="primary">iframe弹框示例</a-button>
        <a-button type="primary">固定iframe视图大小的页面示例</a-button>
      </div>
      <iframe class="iframe-style" :src="url" frameborder="no"></iframe>
    </div>
</template>

<script>
export default {
  name: 'IframePage',
  data(){
    return {
      url: 'https://picsum.photos/',
      height: '90%',
      width: '100%',
    }
  },
  mounted() {
    this.openDialog()
  },
  methods:{
    openDialog() {
      // console.log(this.$dialog)
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