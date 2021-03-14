<template>
  <button class="button" type="button" v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<script>
export default {
  inheritAttrs: false
}
</script>
