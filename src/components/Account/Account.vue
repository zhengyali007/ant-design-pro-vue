<template>
  <a-dropdown placement="bottomRight">
    <template v-slot:overlay>
      <a-menu class="drop-down menu">
        <a-menu-item key="info">
          <a-icon type="user" />
          <span>个人信息</span>
        </a-menu-item>
        <a-menu-item key="setting">
          <a-icon type="setting" />
          <span>个人设置</span>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="logout">
          <a-icon type="logout" />
          <span>退出登录</span>
        </a-menu-item>
      </a-menu>
    </template>
    <span class="account">
      <a-avatar size="small" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" class="antd-pro-global-header-index-avatar" />
      <span>Serati Ma</span>
    </span>
  </a-dropdown>
</template>

<script>
export default {
  name: 'Account'
}
</script>

<style scoped>

</style>
