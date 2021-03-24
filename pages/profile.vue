<template>
  <div>
    <div class="profile-wrapper">
      <div class="user-info">
        <img
          class="user-avatar"
          width="60"
          height="60"
          alt="Аватар пользователя"
          src="/quests-nuxt/images/user-image.jpg"
        >

        <div class="name-wrapper">
          <h3 class="user-name">
            ilnurri Zakiryanov
          </h3>
          <span class="user-plan">Базовый план «Free Way»</span>
        </div>
      </div>
      <div class="cash-wrapper">
        <div class="divider"></div>
        <h3 class="cash">
          Кошелёк
        </h3>
        <div class="cash-info">
          <div class="cash-item">
            <span>0</span>
            <span>ETH</span>
          </div>
          <div class="dot">
            •
          </div>
          <div class="cash-item">
            <span>0</span>
            <span>₽</span>
          </div>
        </div>
      </div>
    </div>

    <div class="user-quests">
      <div class="add-new-element-wrapper">
        <div class="list-title">
          Мои квесты
        </div>
        <div>
          <button class="button-add">
            <svg
              class="icon-plus"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1V15M1 8H15"
                stroke="white"
                stroke-opacity="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <ul class="quests-list">
        <QuestPreview v-for="(n, index) in 2" :key="index" />
        <QuestPreview status="review" />
        <QuestPreview status="private" />
        <QuestPreview status="progress" />
      </ul>
    </div>

    <BottomSheet>
      <QuestPreview :is-link="false" :status="'progress'" :has-open-bottomsheet-button="false" />
      <div class="actions-wrapper">
        <button type="button" class="bottomsheet-action">
          Отправить на проверку
        </button>

        <button type="button" class="bottomsheet-action">
          Опубликовать приватно
        </button>
      </div>
    </BottomSheet>
  </div>
</template>

<script>
import BottomSheet from '@/components/BottomSheet.vue'
import QuestPreview from '@/components/QuestPreview.vue'

export default {
  components: {
    BottomSheet,
    QuestPreview
  },
  head: {
    bodyAttrs: {
      class: 'profile'
    }
  },
  mounted() {
    const openBottomSheetButtons = document.querySelectorAll('.js-open-bottomsheet')
    const bottomSheet = document.querySelector('.bottomsheet-wrapper')
    const overlay = document.querySelector('.overlay')

    for (let i = 0; i < openBottomSheetButtons.length; i++) {
      openBottomSheetButtons[i].addEventListener('click', () => {
        bottomSheet.classList.remove('_hidden')
        overlay.classList.remove('_hidden')
      })
    }
  }
}
</script>
