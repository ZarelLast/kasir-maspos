<template>
  <Navbar />

  <!-- <slot /> -->
  <!-- <Button>Button</Button> -->
  <!-- <ButtonPrimary>Button Primary</ButtonPrimary> -->
  <!-- <ButtonLink>Button Link</ButtonLink> -->
  <!-- <ButtonDanger>Button Danger</ButtonDanger> -->
  <div class="flex flex-wrap gap-4 w-4/5 mx-auto">
    <div
      class="text-sm font-medium text-center text-gray-500 border-gray-200 dark:text-gray-400">
      <ul class="flex flex-wrap">
        <Tabbar v-for="category in categoryStore.categories" :category="category" @click="setCategoryId(category.id)"></Tabbar>
        <!-- <Tabbar v-for="category in categoryStore.categories" :category="category" @click="getByCategory()"></Tabbar> -->
        <!-- <li class="me-2">
          <a class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500"
            aria-current="page">Dashboard</a>
        </li> -->
      </ul>
    </div>
    <div class="flex flex-wrap gap-3 relative mx-auto sm:gap-12">
      <Items v-for="product in filteredProducts" :product="product"></Items>
    </div>

  </div>
</template>

<script>

import { useProductStore } from "@/stores/product.store.js"
import { useCategoryStore } from "@/stores/category.store.js"
// import { ref } from 'vue';

export default {
  data() {
    return {
      productStore: useProductStore(),
      categoryStore: useCategoryStore(),
      filteredProducts: []
    }
  },
  mounted() {
    this.productStore.fetch();
    // console.log(this.productStore.products)
    this.categoryStore.fetch();
  },
  computed: {
    // getByCategory(categoryId) {
    //   // console.log(this.productStore.products)
    //   let filtered = this.productStore.products.filter(product => product.category_id == categoryId);
    //   this.filteredProducts = ref(filtered)
    //   console.log(this.filteredProducts)
    //   // if (isProxy(this.filteredProducts)) {
    //   // this.filteredProducts = toRaw(this.filteredProducts)
    //   // }
    // }
  },
  watch: {
    // 'this.categoryStore': {
    //   handler() {
    //     this.filterProducts(this.selectedCategoryId)
    //   }
    // }
  },
  methods: {
    setCategoryId(categoryId) {
      this.categoryStore.setCategorySelected(categoryId)
      this.filterProducts(categoryId)
    },
    filterProducts(categoryId) {
      if (!categoryId) {
        this.filteredProducts = this.productStore.products; // Show all products if no category selected
      } else {
        this.filteredProducts = this.productStore.products.filter(
          product => product.category_id === categoryId
        );
      }
      console.log(this.filteredProducts)
    }
  },
  filters: {
// 
  }
}
</script>