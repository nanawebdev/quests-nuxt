<template>
  <div class="item-page">
    <nuxtLink to="/news" class="cross">
      <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1l12 12m0-12L1 13" stroke="inherit" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </nuxtLink>

    <NewsDescription />

    <section class="lists">
      <div class="list-wrapper">
        <h2 class="list-title">
          Ещё квесты
        </h2>
        <ul class="quests-list">
          <QuestPreview v-for="(n, index) in 3" :key="index" />
          <!-- <QuestPreview /> -->
        </ul>
      </div>

      <div class="list-wrapper">
        <h2 class="list-title">
          Ещё новости
        </h2>
        <ul class="news-list">
          <NewsPreview v-for="(n, index) in 4" :key="index" />
          <!-- <NewsPreview /> -->
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  head: {
    bodyAttrs: {
      class: 'news-page'
    }
  }
}
</script>
