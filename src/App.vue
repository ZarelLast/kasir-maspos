<template>
  <div id="app" class="bg-stone-100 w-screen h-screen">
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
import Cart from '@/views/cart'
export default {
  name: 'App',
  computed: {
    layout(){
      return DefaultLayout;
    }
  }
}
</script>