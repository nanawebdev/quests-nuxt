<template>
  <div class="item-page">
    <nuxtLink to="/news" class="cross">
      <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1l12 12m0-12L1 13" stroke="inherit" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </nuxtLink>

    <QuestDescription />
    <div class="button-wrapper">
      <BaseButton>
        Начать прохождение
      </BaseButton>
    </div>
  </div>
</template>
<script>
export default {
  head: {
    bodyAttrs: {
      class: 'quest-page'
    }
  }
}
</script>
