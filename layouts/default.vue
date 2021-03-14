<template>
  <div class="wrapper">
    <header></header>
    <main :class="pageClass">
      <Nuxt />

      <NavigationPanel v-if="canShowNavigationPanel" />
    </main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  computed: {
    pageClass() {
      if (this.$route.path === '/profile') {
        return 'profile-page'
      }
      if (this.$route.path === '/news') {
        return 'news-list-page'
      }
      return ''
    },
    canShowNavigationPanel() {
      if (['/', '/news', '/profile'].includes(this.$route.path)) {
        return true
      }
      return false
    }
  }
}
</script>
