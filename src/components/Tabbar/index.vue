<template>
  <li class="border-none">
    <a
      :class="category.id == categoryStore.selected
      ? 'inline-block p-4 border-b-2 rounded-t-lg text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500'
      : 'inline-block p-4 border-b-2 rounded-t-lg border-gray-300 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'">
      {{ category.name }}
    </a>
  </li>
</template>

<script>
import { useCategoryStore } from '../../stores/category.store';

export default {
  data() {
    return {
      categoryStore: useCategoryStore(),
    }
  },
  props: {
    category: {
      type: Object
    }
  },
  methods: {
    // loadSelected(id) {
    //   // this.categoryStore.getCategoryById(id)
    //   this.productStore.getByCategory(id)
    // }
  }
}
</script>