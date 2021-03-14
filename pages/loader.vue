<template>
  <div class="loaders-container">
    <div class="loader-container">
      <Loader />
    </div>
    <div class="loader-container">
      <Loader type="news" />
    </div>
    <div class="loader-container">
      <Loader type="profile" />
    </div>
    <div class="loader-container">
      <Loader type="quest" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loaders-container {
  display: flex;
}

.loader-container {
  width: 100px;
  height: 100px;
  position: relative;
  outline: 1px solid red;
  margin-right: 12px;
}
</style>
