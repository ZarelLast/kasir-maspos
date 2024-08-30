import { defineStore } from "pinia";
import { axiosWrapper } from '@/helper/axios-wrapper.js'

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartItems: [],
    cartItem: null,
  }),
  actions: {
    async add(itemId) {
      // console.log(itemId)
      const cartItem = await axiosWrapper.get(`${baseUrl}/product/${itemId}`);
      const index = this.cartItems.findIndex(item => item.id == cartItem.data.id)
      if (index == -1) {
        cartItem.data.quantity = 1
        this.cartItems.push(cartItem.data)
      } else {
        this.cartItems[index].quantity += 1
      }
      console.log(this.cartItems)
    },
    getTotal(){
      return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    increment(itemId) {
      const index = this.cartItems.findIndex(item => item.id == itemId)
      this.cartItems[index].quantity += 1
    },
    decrement(itemId) {
      const index = this.cartItems.findIndex(item => item.id == itemId)
      this.cartItems[index].quantity -= 1
      if (this.cartItems[index].quantity == 0) {
        this.cartItems.splice(index, 1)
      }
    },
    delete(itemId) {
      const index = this.cartItems.findIndex(item => item.id == itemId)
      if (index !== -1) {
        this.cartItems.splice(index, 1)
      }
    },
    done(){
      this.cartItems = []
    }
  },
});
