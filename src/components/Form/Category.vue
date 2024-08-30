<template>
  <div class="w-4/5 p-2 sm:px-8 md:p-3 lg:p-4 mx-auto">
    <form action="" @submit.prevent="addCategory" class="pt-2 relative">
      <div class="mb-12">
        <label for="categoryName" class="block mb-2 text-sm font-medium text-gray-900 ">Category Name</label>
        <input v-model="formData.name" type="text" id="categoryName"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Category Name" required>
      </div>

      <div class="w-full flex justify-center gap-2 mb-3">
        <ButtonLink @click="this.modalStore.setStats()" class="w-full sm:px-6 sm:w-auto sm:items-center">Cancel
        </ButtonLink>
        <ButtonPrimary class="w-full sm:px-6 sm:w-auto sm:items-center" :type="'submit'">
          Confirm
        </ButtonPrimary>
      </div>
    </form>
  </div>
</template>

<script>
import { useModalStore } from '@/stores/modal.store';
import { useCategoryStore } from '@/stores/category.store';
export default {
  data() {
    return {
      modalStore: useModalStore(),
      categoryStore: useCategoryStore(),
      formData: {
        name: ''
      }
    }
  },
  methods: {
    addCategory() {
      this.categoryStore.add(this.formData)
      this.modalStore.setStats()
      this.categoryStore.fetch()
    }
  }
}
</script>