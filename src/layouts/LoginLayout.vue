<template>
  <div class="bg-blue-600 w-full h-screen">
    <Navbar class="py-12" />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'LoginLayout',
};
</script>