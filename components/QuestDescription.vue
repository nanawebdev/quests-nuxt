<template>
  <section class="main-description">
    <div class="main-image-wrapper">
      <img class="main-image" width="640" height="359" src="/quests-nuxt/images/quest-image.jpg" alt="фото новости">
    </div>
    <div class="main-text">
      <span class="author-name">Иванов Иван</span>
      <h1 class="title">
        Новая история: «Ветер перемен»
      </h1>
      <p class="description">
        Описание квеста, которое должно заинтересовать нормального пацана. <br>Если
        ты
        игноришь это словесное благословение, то чужды тебе приключения,<br> веселье и пивной БОХ.
      </p>

      <div class="episodes-info-wrapper">
        <div class="episodes-info">
          <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#fff" fill-opacity=".01" d="M0 0h16v16H0z" />
            <path
              d="M8 4v4l2.667 2.667m4-2.667A6.667 6.667 0 111.333 8a6.667 6.667 0 0113.334 0z"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p class="info-item">
            Эпизодов: <span class="episodes-quantity"> 10</span>, <span> ≈ 25
            </span>
            мин
            чтения
          </p>
        </div>

        <div class="episodes-info">
          <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#fff" fill-opacity=".01" d="M0 0h16v16H0z" />
            <path
              clip-rule="evenodd"
              d="M8 1.333c-2.667 0-5.333 2-5.333 5.334 0 2.222 1.777 4.889 5.333 8 3.556-3.111 5.333-5.778 5.333-8 0-3.333-2.666-5.333-5.333-5.333zm0 7.334a2 2 0 100-4 2 2 0 000 4z"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p class="info-item">
            Эпизодов в реальности: <span class="life-episodes-quantity"> 3 </span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
