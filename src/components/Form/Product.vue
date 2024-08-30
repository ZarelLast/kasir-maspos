<template>
  <div class="p-2 md:p-3 lg:p-4 mx-auto" @dragover.prevent="handleDragOver" @drop.prevent="handleDrop">
    <form action="" @submit.prevent="addProduct" class="pt-2 relative w-full">
      <div class="flex flex-row my-4">
        <div class="w-1/2 mx-12">
          <label for="cover-photo" class="text-sm font-medium leading-6 text-gray-900">Cover photo</label>
          <div class="mt-2 flex w-[180px] h-[180px] justify-center rounded-lg border border-solid "
            :class="[previewImage ? '' : 'border-blue-500 bg-blue-300 px-6 py-10']">
            <img v-if="previewImage" :src="previewImage" alt="Uploaded Image Preview"
              class="mx-auto h-full w-full object-cover rounded-lg" />
            <div class="text-center" :class="[previewImage ? 'hidden' : '']">
              <i class="ri-upload-cloud-line mx-auto text-blue-900"></i>
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                <label for="file-upload"
                  class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Upload image</span>
                  <!-- Input file untuk mengunggah gambar -->
                  <input id="file-upload" name="file-upload" type="file" class="hidden sr-only" @change="uploadImage" accept="image/*" />
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to
                10MB</p>
            </div>
          </div>
        </div>
        <div class="w-1/2 mx-12">
          <div class="w-full">
            <div class="mb-6">
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Product Name</label>
              <input v-model="formData.name" type="text" id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Product Name" required>
            </div>
          </div>
          <div class="w-full">
            <div class="mb-6">
              <label for="price" class="block mb-2 text-sm font-medium text-gray-900 ">Price</label>
              <input v-model="formData.price" type="number" id="price"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Price" required>
            </div>
          </div>
          <div class="w-full">
            <label for="category_id" class="text-sm font-medium leading-6 text-gray-900">Category</label>
            <div class="mt-2">
              <select id="category_id" name="category_id" v-model="formData.category_id"
                class="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                <option v-for="category in categoryStore.categories" :value="category.id" :key="category.id">
                  {{category.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="flex mb-3 mt-12 mx-12">
        <div class="w-full flex justify-end gap-2">
          <ButtonLink @click="this.modalStore.setStats()" class="w-full sm:px-6 sm:w-auto sm:items-center">Cancel
          </ButtonLink>
          <ButtonPrimary class="w-full sm:px-6 sm:w-auto sm:items-center" :type="'submit'">
            Confirm
          </ButtonPrimary>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { useModalStore } from '@/stores/modal.store';
import { useCategoryStore } from '@/stores/category.store';
import { useProductStore } from '@/stores/product.store';
export default {
  data() {
    return {
      modalStore: useModalStore(),
      categoryStore: useCategoryStore(),
      productStore: useProductStore(),
      previewImage: null,
      formData: {
        category_id: '',
        name: '',
        price: 0,
        picture: null
      }
    }
  },
  methods: {
    addProduct() {
      this.productStore.add(this.formData)
      this.modalStore.setStats()
    },
    uploadImage(event) {
      const file = event.target.files[0];
      this.createImagePreview(file)
    },
    formatFile(file) {
      return `@${file.name};type=${file.type}`;
    },
    handleDragOver(event) {
      event.dataTransfer.dropEffect = "copy";
    },
    handleDrop(event) {
      const file = event.dataTransfer.files[0];
      this.createImagePreview(file);
    },
    createImagePreview(file) {
      if (file && file.type.startsWith("image/")) {
        this.previewImage = URL.createObjectURL(file);
        this.formData.picture = file;
      } else {
        alert("Please upload a valid image file.");
      }
    }
  }
}
</script>