<template>
  <div class="mx-auto w-4/5">
    <div class="flex-col px-4 bg-white rounded-md sm:border-y-2 hidden sm:flex sm:flex-row">
      <div class="py-3 flex flex-col sm:flex-row sm:gap-12 mx-auto w-full sm:py-0 sm:items-center flex-1">
        <div class="py-3 grow-0">
          <p class="font-semibold text-base mx-auto text-right">No</p>
        </div>
        <div class="py-3 flex justify-between grow-0">
          <p class="font-semibold text-base w-[180px]">IMAGE</p>
        </div>
        <div class="py-3 flex justify-between grow ">
          <p class="font-semibold text-base">PRODUCT</p>
        </div>
        <div class="py-3 flex justify-end grow ">
          <p class="font-semibold text-base">QTY</p>
        </div>
        <div class="py-3 flex justify-center grow ">
          <p class="font-semibold text-base">TOTAL</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-4 sm:gap-0">
      <CartItem v-for="item in cartStore.cartItems" :item="item"></CartItem>
    </div>
  </div>
</template>


<script>
import { useCartStore } from '@/stores/cart.store';

export default {
  data() {
    return {
      cartStore: useCartStore()
    }
  }
}
</script>