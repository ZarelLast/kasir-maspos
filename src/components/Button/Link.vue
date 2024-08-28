<template>
  <button
    class="transition duration-300 ease-in-out font-base text-sm border border-blue-400 p-2 rounded-md text-blue-400 hover:bg-blue-400 hover:text-white hover:border-white"
    :type="type">
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