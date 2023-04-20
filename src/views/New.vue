<script setup lang="ts">
import ProductItem from '../components/products/ProductItem.vue';
import { useProductStore } from '@/stores/product';
const store = useProductStore();
console.log({p: store});

</script>
<template>
  <div class="text-2xl text-center font-bold mt-[10px] mb-3">Your Results</div>
  <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4  xl:grid-cols-5 ">
    <ProductItem
      v-for="product in store.products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
