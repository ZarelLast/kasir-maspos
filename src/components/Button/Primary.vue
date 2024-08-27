<template>
  <button class="bg-blue-400 p2 rouded-md text-white hover:bg-blue-500" :type="type">
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