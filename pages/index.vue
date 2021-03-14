<template>
  <ul class="quests-list">
    <QuestPreview v-for="(n, index) in 15" :key="index" />
  </ul>
</template>

<script>
export default {
  head: {
    title: 'Квесты',
    bodyAttrs: {
      class: 'main-page'
    }
  }
}
</script>
