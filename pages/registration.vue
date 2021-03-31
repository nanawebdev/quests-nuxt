<template>
  <section class="registration-page-wrapper">
    <div>
      <div class="page-title">
        <h2 class="title">
          Регистрация
        </h2>
        <span class="subtitle">Проверь правильность данных</span>
      </div>

      <div class="registration-user-data">
        <div class="registration-avatar">
          <div class="image-wrapper">
            <img
              class="user-avatar"
              width="60"
              height="60"
              alt="Аватар пользователя"
              src="/quests-nuxt/images/user-image.jpg"
            >
          </div>
        </div>

        <div class="registration-name-input">
          <span class="title">Имя</span>
          <input
            type="text"
            aria-label="имя пользователя"
            placeholder="Ilnurri Zakiryanov"
            class="input"
          >
        </div>
      </div>

      <div class="registration-key-input">
        <input
          type="text"
          aria-label="имя пользователя"
          placeholder="Адрес ключа ETH-кошелька"
          class="input"
        >
        <div class="subtitle">
          <div class="subtitle-text">
            Для вывода вознаграждения необходимо иметь Ether-кошелёк. Ты можешь
            пропустить это поле и добавить адрес позже.
          </div>
        </div>
      </div>
    </div>

    <div class="terms-of-use-wrapper">
      <div>
        <input type="checkbox" class="reg-checkbox">
        <p class="terms-of-use-text">
          Принимаю <a href="#">пользовательское соглашение</a>
          и подтверждаю, что ознакомлен и согласен с политикой
          конфиденциальности
        </p>
      </div>
      <BaseButton disabled>
        Продолжить
      </BaseButton>
    </div>
  </section>
</template>
<script>
export default {
  head: {
    bodyAttrs: {
      class: 'registration-page'
    }
  }
}
</script>
