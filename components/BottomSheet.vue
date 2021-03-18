<template>
  <div class="bottomsheet-wrapper _hidden">
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
    const overlay = document.querySelector('.overlay')
    const bottomSheet = document.querySelector('.bottomsheet-wrapper')

    overlay.addEventListener('click', () => {
      overlay.classList.add('_hidden')
      bottomSheet.classList.add('_hidden')
    })
  }
}
</script>
