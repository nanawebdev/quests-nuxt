<template>
  <div class="bottomsheet-wrapper _hidden">
    <div class="bottomsheet">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const overlay = document.querySelector('.overlay')
    const bottomSheet = document.querySelector('.bottomsheet-wrapper')

    overlay.addEventListener('click', () => {
      overlay.classList.add('_hidden')
      bottomSheet.classList.add('_hidden')
    })
  }
}
</script>
