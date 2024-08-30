<template>
  <div id="app">
    <component :is="layout">
      <RouterView />
    </component>
  </div>
</template>

<script>
import LoginLayout from '@/layouts/LoginLayout.vue'
export default {
  name: 'App',
  computed: {
    layout(){
      return this.$route.meta.layout || LoginLayout;
    }
  }
}
</script>