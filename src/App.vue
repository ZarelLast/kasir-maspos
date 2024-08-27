<template>
  <div id="app">
    <component :is="layout">
      <RouterView />
    </component>
  </div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>