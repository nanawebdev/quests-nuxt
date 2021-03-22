<template>
  <div class="wrapper">
    <header></header>
    <main :class="pageClass">
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
      if (this.$route.path === '/news') {
        return 'news-list-page'
      }
      if (this.$route.path === '/profile') {
        return 'profile-page'
      }
      return ''
    },
    canShowNavigationPanel() {
      if (['/quests', '/news', '/profile'].includes(this.$route.path)) {
        return true
      }
      return false
    }
  }
}
</script>
