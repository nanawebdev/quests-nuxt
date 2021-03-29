<template>
  <div class="wrapper">
    <header></header>
    <main :class="pageClass">
      <Notification v-if="canShowNotification" />
      <Nuxt />

      <NavigationPanel v-if="canShowNavigationPanel" />
      <div class="overlay _hidden"></div>
    </main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  computed: {
    pageClass() {
      if (this.$route.path.startsWith('/profile')) {
        return 'profile-page'
      }
      return ''
    },
    canShowNavigationPanel() {
      if (['/quests', '/news', '/profile'].some(v => this.$route.path.startsWith(v))) {
        return true
      }
      return false
    },
    canShowNotification() {
      if (['/quests', '/news', '/profile'].some(v => this.$route.path.startsWith(v))) {
        return true
      }
      return false
    }
  }
}
</script>
