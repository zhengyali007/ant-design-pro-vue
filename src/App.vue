<template>
  <a-locale-provider :locale="locale">
    <div id="app">
      <router-view/>
    </div>
  </a-locale-provider>
</template>

<script>
import i18n from '@/locales'
import { AppDeviceEnquire } from '@/utils/mixin'
import { mixin } from '@/store/i18n-mixin'

export default {
  mixins: [AppDeviceEnquire, mixin],
  data () {
    return {
      locale: {}
    }
  },
  created () {
    this.$watch('currentLang', () => {
      this.locale = i18n.getLocaleMessage(this.currentLang).antLocale
    })
  }
}
</script>
<style>
  #app {
    height: 100%;
  }
</style>
