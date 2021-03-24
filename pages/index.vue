<template>
  <div class="styleguide-lists">
    <h1>Список страниц</h1>
    <ul>
      <li>
        <NuxtLink to="/login">
          Логин
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/quests">
          Список квестов
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/registration">
          Регистрация
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/news-page">
          Страница новости
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/news">
          Список новостей
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/profile">
          Профиль
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/quest-page">
          Страница квеста
        </NuxtLink>
      </li>
    </ul>
    <h1>Элементы страниц</h1>
    <ul>
      <li>
        <NuxtLink to="/loader">
          Лоадер
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/bottomsheet">
          BottomSheet
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'styleguide'
}
</script>

<style scoped>
.styleguide-lists {
  padding: 16px;
}

li {
  margin-bottom: 8px;
}

a {
  display: block;
  color: white;
  text-decoration: none;
}
</style>
