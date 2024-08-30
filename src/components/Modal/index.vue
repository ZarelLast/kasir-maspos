<template>
  <div class="relative z-10" role="dialog" aria-modal="true">
    <div class="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" aria-hidden="true"></div>
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
        <div class="flex w-full transform text-left text-base transition sm:w-auto md:my-8 md:px-4">
          <div class="relative flex w-full items-center overflow-hidden bg-white shadow-2xl rounded-lg">

            <button type="button" @click="this.modalStore.setStats()"
              class="absolute right-2 top-2 text-gray-400 hover:text-gray-500 sm:right-5 sm:top-5">
              <span class="sr-only">Close</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div class="flex flex-col w-full">
              <div class="border-b-2 p-2 sm:px-4 md:p-3 lg:p-4">
                <h2 class="text-2xl font-bold text-gray-900 text-center">
                  {{ title }}
                </h2>
              </div>

              <slot />

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { useModalStore } from '@/stores/modal.store';
export default {
  props: {
    title: String,
  },
  data() {
    return {
      modalStore: useModalStore(),
    }
  },
}
</script>