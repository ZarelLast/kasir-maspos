<template>
  <nav class="py-4 px-8 bg-white sm:bg-blue-500 sm:px-4 sm:text-white">
    <div class="container mx-auto flex items-center justify-between">

      <!-- Logo -->
      <div class="text-2xl font-bold">
        <a href="#">MASPOS</a>
      </div>

      <div class="flex items-center space-x-4">
        <div class="sm:hidden">
          <i class="ri-search-line"></i>
        </div>
        <div class="hidden sm:inline relative">
          <img src="../../assets/user.svg" alt="User Avatar" class="w-8 h-8 rounded-full">
          <div class="absolute bg-green-400 rounded-full border-[2px] border-white bottom-0 right-0 w-[12px] h-[12px]">
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>