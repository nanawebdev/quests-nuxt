<template>
  <div class="bottomsheet-wrapper">
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
