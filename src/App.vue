<template>
  <div id="app">
    <component :is="layout">
      <RouterView />
      <ButtonPrimary>Button 1</ButtonPrimary>
      <ButtonLink>Button 2</ButtonLink>
      <ButtonDanger>Button 3</ButtonDanger>
      <div class="border bg-blue-400"> 200</div>
    </component>
  </div>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
export default {
  name: 'App',
  computed: {
    layout(){
      return DefaultLayout;
    }
  },
}
</script>