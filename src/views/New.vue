<script setup>
import { useProductStore } from '../stores/product';
import { onMounted } from 'vue';
import ProductItem from '../components/products/ProductItem.vue';
const store = useProductStore();

onMounted(async () => {
  await store.getProducts();
});
</script>
<template>
  <div class="text-2xl text-center font-bold mt-[10px] mb-3">Your Results</div>
  <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
    <ProductItem
      v-for="product in store.products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
