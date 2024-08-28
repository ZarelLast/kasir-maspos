<template>
  <div class="w-full h-auto">
    <div class="flex flex-col sm:flex-row px-4 bg-white rounded-md border-y-2">
      <div class="pt-3 sm:order-last flex items-center text-center">
        <i class="ri-close-large-line text-red-600 font-bold sm:hidden "></i>
        <ButtonDanger class="hidden sm:flex">Remove Item</ButtonDanger>
      </div>
      <div class="py-3 flex flex-col sm:flex-row sm:justify-around w-full sm:py-0 sm:items-center flex-1">
        <div class="justify-between flex-col hidden sm:flex">
          <p class="font-semibold text-base mx-auto text-right">1</p>
        </div>
        <div class="justify-between flex-col hidden sm:flex">
          <img class="w-full h-[165px] object-cover" src="https://via.placeholder.com/300" alt="Product Image">
        </div>
        <div class="hidden sm:flex sm:flex-col">
          <p class="font-semibold text-base text-blue-500">{{ item_name }}</p>
          <p class="font-semibold text-base">Rp.{{ price.toLocaleString() }}</p>
        </div>
        <div class="py-3 border-t-2 flex justify-between flex-row sm:hidden">
          <p class="font-semibold text-base">PRODUCT</p>
          <p class="font-semibold text-base text-blue-500">{{ item_name }}</p>
        </div>
        <div class="py-3 border-t-2 flex justify-between flex-row sm:hidden">
          <p class="font-semibold text-base">PRICE</p>
          <p class="font-semibold text-base">Rp.{{ price.toLocaleString() }}</p>
        </div>
        <div class="py-2 border-t-2 flex flex-row sm:flex-col items-center justify-between sm:border-0 sm:py-0">
          <p class="font-semibold text-base sm:hidden">QUANTITY</p>
          <div class="flex justify-between gap-3 bg-slate-200 py-2 px-4 font-semibold">
            <button @click="counterStore.decrement()">-</button>
            <input disabled type="text" class="w-[2rem] text-center text-sm font-normal" :value="counterStore.count">
            <button @click="counterStore.increment()">+</button>
          </div>
        </div>
        <div class="py-3 border-t-2 flex justify-between flex-row sm:flex-col sm:border-0">
          <p class="font-semibold text-base sm:hidden">SUB TOTAL</p>
          <p class="font-semibold text-base">Rp.{{ (price * (counterStore.count)).toLocaleString() }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  useCounterStore
} from "@/stores/counter.store.js"

export default {
  data() {
    return {
      counterStore: useCounterStore(),
      price: 10000,
      item_name: 'Product Name 1'
    }
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  }
}
</script>