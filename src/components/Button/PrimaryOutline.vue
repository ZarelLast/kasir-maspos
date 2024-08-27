<template>
  <button class="border-blue-400 p2 rouded-md text-blue-400 hover:border-blue-500 hover:text-blue-500" :type="type">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button'
    }
  }
}
</script>