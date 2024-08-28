<template>
  <button
    class="transition duration-300 ease-in-out font-medium text-sm bg-blue-100 p-2 rounded-md text-blue-600 hover:bg-blue-400 hover:text-white"
    :type="type">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button',
    },
  }
}
</script>