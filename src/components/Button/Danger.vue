<template>
  <button class="transition duration-300 ease-in-out bg-red-400 p-2 rounded-md text-white hover:bg-red-500" :type="type">
    <slot/>
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
