<template>
  <ul class="news-list">
    <NewsPreview v-for="(n, index) in 15" :key="index" />
  </ul>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'news'
    }
  }
}
</script>
