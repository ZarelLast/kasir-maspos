<template>
  <div id="app">
    <component :is="layout">
      <RouterView />
    </component>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
</script>