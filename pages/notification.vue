<template>
  <div>
    <div class="notification">
      <p class="notification__text">
        Квесты удобнее смотреть в приложении, рекомендуем
      </p>
      <div class="notification__wrapper">
        <a class="notification__link">
          <span>Установить приложение</span>
        </a>
        <button class="notification__button">
          <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path
            d="M1 1l12 12m0-12L1 13"
            stroke="#fff"
            stroke-opacity=".5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          </svg>
        </button>
      </div>
    </div>

    <div class="notification">
      <p class="notification__text">
        Квесты удобнее смотреть в приложении, рекомендуем
      </p>
      <div class="notification__wrapper">
        <a class="notification__link">
          <span>Установить приложение</span>
        </a>
        <button class="notification__button">
          <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path
            d="M1 1l12 12m0-12L1 13"
            stroke="#fff"
            stroke-opacity=".5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          </svg>
        </button>
      </div>
    </div>

    <div class="notification">
      <p class="notification__text">
        Квесты удобнее смотреть в приложении, рекомендуем
      </p>
      <div class="notification__wrapper">
        <a class="notification__link">
          <span>Установить приложение</span>
        </a>
        <button class="notification__button">
          <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path
            d="M1 1l12 12m0-12L1 13"
            stroke="#fff"
            stroke-opacity=".5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notification:nth-child(2) {
  border-color: var(--news-color);
  color: var(--news-color);
  margin-top: 16px;
}

.notification:nth-child(2) .notification__link {
  background-color: var(--news-color);
}

.notification:nth-child(3) {
  border-color: var(--profile-color);
  color: var(--profile-color);
  margin-top: 16px;
}

.notification:nth-child(3) .notification__link {
  background-color: var(--profile-color);
}

</style>
