import { defineStore } from "pinia";
import { axiosWrapper } from '@/helper/axios-wrapper.js'

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useCategoryStore = defineStore({
  id: 'category',
  state: () => ({
    categories: [],
    selected: null,
    category: null,
  }),
  actions: {
    async fetch() {
      let url = `${baseUrl}/category`

      const categories = await axiosWrapper.get(url);

      if (categories) {
        this.categories = categories.data
        this.selected = this.categories[0].id
        // console.log('set store category selected:', this.selected)
      }
    },
    async setCategorySelected(categoryId){
      this.selected = categoryId
    },
    async add(data) {
      const category = await axiosWrapper.post(`${baseUrl}/category`, data, true);

      this.category = category.data
      return category
    },
    async update(id, data) {
      return await axiosWrapper.put(`${baseUrl}/category/${id}`, data, true);
    },
    async delete(id) {
      return await axiosWrapper.delete(`${baseUrl}/category/${id}`, {}, true);
    },
    async getCategoryById(id) {
      let url = `${baseUrl}/category/${id}`;
      const selected = await axiosWrapper.get(url);
      if (selected) {
        this.selected = selected.data;
      }
    },
  },
});
