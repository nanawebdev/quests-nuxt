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
          style="border-radius: 50%;"
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
      <h2 class="list-title">
        Мои квесты
      </h2>
      <ul class="quests-list">
        <QuestPreview v-for="(n, index) in 20" :key="index" />
        <QuestPreview status="review" />
        <QuestPreview status="private" />
        <QuestPreview status="progress" />
      </ul>
    </div>

    <BottomSheet />
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

    for (let i = 0; i < openBottomSheetButtons.length; i++) {
      openBottomSheetButtons[i].addEventListener('click', () => {
        bottomSheet.classList.remove('_hidden')
      })
    }
  }
}
</script>
