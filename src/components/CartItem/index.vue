<template>
  <div class="w-full h-auto">
    <div class="flex flex-col px-4 bg-white rounded-md sm:justify-between sm:flex-row">
      <div class="pt-3">
        <i class="ri-close-large-line text-red-600 font-bold"></i>
      </div>
      <div class="py-3">
        <div class="py-3 border-t-2 flex justify-between">
          <p class="font-semibold text-base">PRODUCT</p>
          <p class="font-semibold text-base text-blue-500">Product Name 1</p>
        </div>
        <div class="py-3 border-t-2 flex justify-between">
          <p class="font-semibold text-base">PRICE</p>
          <p class="font-semibold text-base">Rp.{{ price.toLocaleString() }}</p>
        </div>
        <div class="py-2 border-t-2 flex items-center justify-between">
          <p class="font-semibold text-base">QUANTITY</p>
          <div class="flex justify-between gap-3 bg-slate-200 py-2 px-4 font-semibold">
            <button @click="counterStore.decrement()">-</button>
            <input disabled type="text" class="w-[2rem] text-center text-sm font-normal" :value="counterStore.count">
            <button @click="counterStore.increment()">+</button>
          </div>
        </div>
        <div class="py-3 border-t-2 flex justify-between">
          <p class="font-semibold text-base">SUB TOTAL</p>
          <p class="font-semibold text-base">Rp.{{ (price*(counterStore.count)).toLocaleString() }}</p>
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