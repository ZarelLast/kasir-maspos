<template>
  <button
    class="transition duration-300 ease-in-out font-base text-sm bg-blue-600 p-2 rounded-md text-white hover:bg-blue-500"
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