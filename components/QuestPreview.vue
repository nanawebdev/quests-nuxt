<template>
  <li>
    <component :is="isLink ? 'a' : 'div'" class="preview-quest">
      <div class="image-wrapper">
        <img
          class="preview-quest-avatar"
          width="60"
          height="60"
          alt="аватар квеста"
          src="/images/wind-of-change.png"
        >
        <div class="quest-status" :class="'quest-status-'+status">
          {{ statusText }}
        </div>
      </div>
      <div class="preview-text">
        <h3 class="preview-title">
          Ветер перемен
        </h3>
        <div>
          <div class="episodes-wrapper">
            <svg class="episodes-icon" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.667 2.667h10.666M2.667 5.332h6.666M2.667 8H12m-9.333 2.666h6.666m-6.666 2.667h10.666"
                stroke="currentColor"
                stroke-opacity=".25"
                stroke-linecap="round"
              />
            </svg>
            <p class="episodes">
              Эпизодов: <span class="episodes-quantity">3</span>
            </p>
          </div>
        </div>
        <p class="quest-description">
          Что будет если каждый из нас возьмёт пистолет и выстрелит
          вверх?
        </p>
        <div class="divider"></div>
      </div>

      <button v-if="hasOpenBottomsheetButton" type="button" class="open-bottomsheet js-open-bottomsheet">
        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#fff" fill-opacity="0" d="M0 0h24v24H0z" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19 14a2 2 0 110-4 2 2 0 010 4zm-7 0a2 2 0 110-4 2 2 0 010 4zm-7 0a2 2 0 110-4 2 2 0 010 4z"
            fill="#fff"
            fill-opacity=".5"
          />
        </svg>
      </button>
    </component>
  </li>
</template>

<script>
export default {
  props: {
    hasOpenBottomsheetButton: {
      type: Boolean,
      default: true
    },
    status: {
      type: String,
      default: 'private' // progress, review
    },
    isLink: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    statusText() {
      if (this.status === 'private') {
        return 'Приватный'
      }
      if (this.status === 'progress') {
        return 'В процессе'
      }
      if (this.status === 'review') {
        return 'На проверке'
      }

      return ''
    }
  }
  // mounted() {
  //   const openBottomSheetButtons = document.querySelectorAll('.js-open-bottomsheet')
  //   const bottomSheet = document.querySelector('.bottomsheet-wrapper')

  //   for (i = 0; i < openBottomSheetButtons.length; i++) {
  //     openBottomSheetButtons[i].addEventListener('click', function() {
  //       bottomSheet.style.display = 'block'
  //     })
  //   }
}
</script>
