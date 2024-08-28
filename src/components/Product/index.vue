<template>
  <div class="max-w-[200px] max-h-[300px] shadow-[rgba(0,0,10,0.04)_4px_4px_4px_2px] bg-white rounded-lg overflow-hidden">
    <!-- Product Image -->
    <img class="w-full h-[165px] object-cover" src="https://via.placeholder.com/300" alt="Product Image">

    <!-- Product Details -->
    <div class="p-4">
      <!-- Product Name and Delete Button -->
      <div class="flex justify-between items-center">
        <h2 class="text-sm font-medium">Product Name</h2>
        <ButtonDanger class="font-medium text-[0.6rem] px-1 py-0">Delete</ButtonDanger>
      </div>

      <!-- Product Price -->
      <p class="text-base font-bold mb-4">Rp. 10,000</p>

      <!-- Add to Cart Button -->
      <div class="flex justify-center">
        <ButtonPrimary class="font-medium text-xs justify-between px-4 mx-auto">
          + Add to Cart
        </ButtonPrimary>
      </div>
    </div>
  </div>
</template>