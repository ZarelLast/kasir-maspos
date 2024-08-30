<template>
  <div class="container fixed bottom-0 sm:relative sm:bottom-auto sm:w-4/5 sm:mx-auto">
    <div class="flex flex-col sm:flex-row-reverse sm:gap-3">
      <div class="flex justify-end mx-4 sm:mx-0 sm:my-5">
        <div class="flex rounded-full bg-blue-600 w-[50px] h-[50px] items-center place-content-center sm:w-auto sm:h-auto sm:bg-transparent">
          <ButtonPrimary class="justify-self-center" @click="openCart">
            <span class="hidden sm:flex">Cart</span>
            <i class="ri-shopping-cart-line sm:hidden w-full h-full rounded-full"></i>
          </ButtonPrimary>
        </div>
      </div>
      <div class="flex flex-col gap-4 sm:flex-row sm:gap-3 bg-white sm:bg-transparent py-6 px-5 sm:px-0">
        <div class="flex-1 sm:flex-auto flex">
          <Button @click="showModal('kategori')" class="hidden w-auto items-center justify-self-center sm:inline">+ Add Category </Button>
          <ButtonLink @click="showModal('kategori')" class="sm:hidden w-full">+ Add Category </ButtonLink>
        </div>
        <div class="flex-1 sm:flex-auto flex">
          <Button @click="showModal()" class="hidden w-auto items-center justify-self-center sm:inline">+ Add Product </Button>
          <ButtonLink @click="showModal()" class="sm:hidden w-full">+ Add Product </ButtonLink>
        </div>
      </div>
    </div>
  </div>

  <!-- desktop -->
  <div class="container hidden sm:flex sm:flex-wrap gap-4 w-4/5 sm:mx-auto relative">
    <div class="text-sm font-medium text-center text-gray-500 border-gray-200 dark:text-gray-400 overflow-hidden">
      <ul class="flex flex-nowrap overflow-x-scroll">
        <Tabbar class="flex-shrink-0" v-for="category in categoryStore.categories" :category="category" @click="setCategoryId(category.id)" />
      </ul>
    </div>
    <div class="flex flex-wrap gap-3 relative sm:gap-12 overflow-hidden">
      <Items v-for="product in productStore.byCategory" :product="product" />
    </div>
  </div>
  <!-- mobile -->

  <div class="sm:hidden container mx-auto px-4 overflow-hidden mb-10">
    <div v-for="group in productStore.mobileProducts" :key="group.category_id" class="m-4 h-auto w-screen">
      <h2 class="text-lg font-semibold mt-3">{{ this.getCategoryNameById(group.category_id) }}</h2>
      <div class="overflow-x-scroll scrollbar">
        <div class="flex flex-row space-x-4 my-4 pr-10">
          <Items class="flex-shrink-0" v-for="product in group.products" :key="product.id" :product="product" />
        </div>
      </div>
    </div>
  </div>

  <Modal v-if="modalStore.active" :title="modalContent">
    <FormCategory v-if="modalType == 0" />
    <FormProduct v-if="modalType == 1" />
  </Modal>
</template>

<script>
import { useCategoryStore } from "@/stores/category.store.js"
import { useProductStore } from "@/stores/product.store.js"
import { useModalStore } from "@/stores/modal.store";
import { useCartStore } from "@/stores/cart.store";

export default {
  data() {
    return {
      categoryStore: useCategoryStore(),
      productStore: useProductStore(),
      modalStore: useModalStore(),
      cartStore: useCartStore(),
      modalContent: ''
    }
  },
  mounted() {
    this.categoryStore.fetch();
    this.productStore.fetch();
  },
  computed: {
    
  },
  watch: {
    'productStore.products'() {
      this.productStore.filterProducts(this.categoryStore.selected);
      this.productStore.groupProductsByCategory()
    },
  },
  methods: {
    setCategoryId(categoryId) {
      this.categoryStore.setCategorySelected(categoryId)
      this.productStore.filterProducts(categoryId)
    },
    getCategoryNameById(catergoryId) {
      const category = this.categoryStore.categories.find(cat => cat.id === catergoryId);
      return category ? category.name : 'Unknown Category';
    },
    showModal(title){
      if(title == 'kategori'){
        this.modalContent = 'Add Category'
        this.modalType = 0
      }else{
        this.modalContent = 'Add Product'
        this.modalType = 1
      }
      this.modalStore.setStats()
    },
    openCart(){
      this.$router.push('/cart')
    }
  }
}
</script>