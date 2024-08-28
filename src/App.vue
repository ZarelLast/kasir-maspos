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
      <CartItem></CartItem>
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