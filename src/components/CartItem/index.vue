<template>
  <div class="w-full h-auto">
    <div class="flex flex-col sm:py-6 sm:flex-row px-4 bg-white rounded-md sm:rounded-none sm:border-b-2 sm:shadow-none shadow-[rgba(0,0,10,0.04)_4px_4px_4px_2px] gap-12">
      <div class="pt-3 sm:order-last flex items-center text-center">
        <i @click="cartStore.delete(item.id)" class="ri-close-large-line text-red-600 font-bold sm:hidden"></i>
        <ButtonDanger @click="cartStore.delete(item.id)" class="hidden sm:flex">Remove Item</ButtonDanger>
      </div>
      <div class="py-3 flex flex-col sm:flex-row w-full sm:py-0 sm:items-center flex-1 gap-12">
        <div class="justify-between flex-col hidden sm:flex sm:grow-0">
          <p class="font-semibold text-base mx-auto text-right">1</p>
        </div>
        <div class="justify-between flex-col hidden sm:flex sm:grow-0">
          <img class="w-[180px] h-[180px] object-cover" :src="item.picture_url" :alt="item.name">
        </div>
        <div class="hidden grow sm:flex sm:flex-col">
          <p class="font-semibold text-base text-blue-500">{{ item.name }}</p>
          <p class="font-semibold text-base">Rp.{{ item.price.toLocaleString() }}</p>
        </div>

        <!-- mobile -->
        <div class="py-3 border-t-2 flex justify-between flex-row sm:hidden">
          <p class="font-semibold text-base">PRODUCT</p>
          <p class="font-semibold text-base text-blue-500">{{ item.name }}</p>
        </div>
        <div class="py-3 border-t-2 flex justify-between flex-row sm:hidden">
          <p class="font-semibold text-base">PRICE</p>
          <p class="font-semibold text-base">Rp.{{ item.price.toLocaleString() }}</p>
        </div>
        <!-- mobil end -->

        <div class="py-2 sm:grow-0 border-t-2 flex flex-row sm:flex-col items-center justify-between sm:border-0 sm:py-0">
          <p class="font-semibold text-base sm:hidden">QUANTITY</p>
          <div class="flex justify-between gap-3 bg-slate-200 py-2 px-4 font-semibold">
            <button @click="cartStore.decrement(item.id)">-</button>
            <input disabled type="text" class="w-[2rem] text-center text-sm font-normal" :value="item.quantity">
            <button @click="cartStore.increment(item.id)">+</button>
          </div>
        </div>
        <div class="py-3 sm:grow-0 border-t-2 flex justify-between flex-row sm:flex-col sm:border-0">
          <p class="font-semibold text-base sm:hidden">SUB TOTAL</p>
          <p class="font-semibold text-base">Rp.{{ (item.price * (item.quantity)).toLocaleString() }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  useCartStore
} from "@/stores/cart.store.js"

export default {
  props: {
    item: {
      type: Object
    }
  },
  data() {
    return {
      cartStore: useCartStore()
    }
  },
  methods: {

  }
}
</script>