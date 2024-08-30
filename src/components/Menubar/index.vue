<template>
  <div class="flex flex-col grow justify-end py-12">
    <div class="flex w-1/4 flex-col ml-auto gap-12">
      <div class="flex-1 flex flex-row items-center">
        <div class="grow">
          <p class="font-semibold text-base">Total</p>
        </div>
        <div class="flex justify-end">
          <p class="font-semibold text-base">Rp.{{ this.cartStore.getTotal().toLocaleString() }}</p>
        </div>
      </div>
      <div class="flex-1 flex justify-between mt-2">
        <ButtonLink @click="toHome">Back to Home</ButtonLink>
        <ButtonPrimary @click="payBill">Pay Bill</ButtonPrimary>
      </div>
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
  },
  computed: {
    currentPath() {
      return this.$route.path;
    },
  },
  methods: {
    toHome() {
      this.$router.push('/')
    },
    payBill() {
      this.$swal.fire({
        icon: "success",
        title: "Payment Successful",
        text: `Rp. ${this.cartStore.getTotal().toLocaleString()}`,
        showConfirmButton: false,
        timer: 1500
      })
      this.$router.push('/')
      this.cartStore.done()
    }
  }
}
</script>