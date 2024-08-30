import { defineStore } from "pinia";
import { axiosWrapper } from '@/helper/axios-wrapper.js'

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: [],
    byCategory: [],
    product: null,
    mobileProducts: []
  }),
  actions: {
    groupProductsByCategory() {
      const grouped = {};
      // Iterasi melalui produk dan masukkan ke dalam kategori yang sesuai
      this.products.forEach(product => {
        if (!grouped[product.category_id]) {
          grouped[product.category_id] = [];
        }
        grouped[product.category_id].push(product);
      });

      // Konversi objek ke dalam array dengan format yang diinginkan
      this.mobileProducts = Object.keys(grouped).map(category_id => ({
        category_id: category_id,
        products: grouped[category_id]
      }));
    },
    async fetch() {
      let url = `${baseUrl}/product`

      const products = await axiosWrapper.get(url);

      if (products) {
        this.products = products.data
      }
      // console.log('product store: ', this.products)
    },
    async filterProducts(categoryId) {
      if (!categoryId) {
        this.byCategory = this.products; // Show all products if no category selected
      } else {
        this.byCategory = this.products.filter(
          product => product.category_id === categoryId
        );
      }
    },
    async add(data) {
      const product = await axiosWrapper.post(`${baseUrl}/product`, data, true, 'multipart/form-data', "Add Product Successful", "Add Product Failed, Please Try Again");

      this.product = product.data
      this.fetch()
      this.groupProductsByCategory()

      return product
    },
    async update(id, data) {
      return await axiosWrapper.put(`${baseUrl}/product/${id}`, data, true);
    },
    async delete(id) {
      const index = this.products.findIndex(product => product.id == id)
      if (index !== -1) {
        this.products.splice(index, 1)
        this.groupProductsByCategory()
      }

      return await axiosWrapper.delete(`${baseUrl}/product/${id}`, {}, true)
    },
  },
});
