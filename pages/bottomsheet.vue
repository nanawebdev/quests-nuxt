<template>
  <div class="main-wrapper">
    <div class="container">
      <div class="bottomsheet-wrapper">
        <div class="bottomsheet">
          <div class="bottomsheet-info-wrapper">
            <h3 class="bottomsheet-title">
              Квест опубликован приватно
            </h3>
            <p class="bottomsheet-description">
              Такой квест не требует проверки
              редакции и готов к прохождению
            </p>
            <div class="quest-link-wrapper">
              Ссылка на квест:
              <a class="quest-link">waym.app/302903902</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="bottomsheet-wrapper">
        <div class="bottomsheet">
          <QuestPreview :is-link="false" :status="'progress'" :has-open-bottomsheet-button="false" />
          <div class="actions-wrapper">
            <button type="button" class="bottomsheet-action">
              Отправить на проверку
            </button>

            <div class="quest-link-wrapper">
              Ссылка на квест:
              <a class="quest-link">waym.app/302903902</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="bottomsheet-wrapper">
        <div class="bottomsheet">
          <QuestPreview :is-link="false" :status="'progress'" :has-open-bottomsheet-button="false" />
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
    </div>
  </div>
</template>

<style lang="scss" scoped>
h3 {
  margin: 0;
}

.main-wrapper {
  display: flex;
  flex-direction: column;
}

.container {
  position: relative;
  margin-bottom: 40px;
  height: 310px;
}

.bottomsheet-wrapper {
  position: absolute;
}
</style>
