<template>
  <div :class="['ant-pro-global-header-index-right', layout === 'topmenu' && `ant-pro-global-header-index-${theme}`]">
    <account class="ant-pro-global-header-index-action" />
    <select-lang class="ant-pro-global-header-index-action" />
  </div>
</template>

<script>
import Account from '../Account'
import SelectLang from '../SelectLang'

export default {
  name: 'RightContentRender',
  props: {
    theme: {
      type: String,
      required: true
    },
    layout: {
      type: String,
      required: true
    }
  },
  components: {
    Account,
    SelectLang
  }
}
</script>
