<template>
  <div class="bottomsheet-wrapper _hidden">
    <button class="close-bottomsheet" type="button"></button>
    <div class="bottomsheet">
      <QuestPreview :is-link="false" :status="''" />
      <div class="actions-wrapper">
        <button type="button" class="bottomsheet-action">
          Отправить на проверку
        </button>
        <button type="button" class="bottomsheet-action">
          Опубликовать приватно
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const bottomSheet = document.querySelector('.bottomsheet-wrapper')
    const closeBottomsheet = document.querySelector('.close-bottomsheet')
    closeBottomsheet.addEventListener('click', () => {
      bottomSheet.classList.add('_hidden')
    })
  }
}
</script>
