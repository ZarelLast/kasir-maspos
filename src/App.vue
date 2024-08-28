<template>
  <div id="app">
    <component :is="layout">
      <Navbar />
      <RouterView />
      <Button>Button</Button>
      <ButtonPrimary>Button Primary</ButtonPrimary>
      <ButtonLink>Button Link</ButtonLink>
      <ButtonDanger>Button Danger</ButtonDanger>
      <Product></Product>
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