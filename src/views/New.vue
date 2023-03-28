<script setup lang="ts">
import ProductItem from '../components/products/ProductItem.vue';
import { products } from '../shares/products-mock';
console.log({products});

</script>
<template>
  <div class="text-2xl text-center font-bold mt-[10px] mb-3">Your Results</div>
  <div class="grid grid-cols-5">
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
