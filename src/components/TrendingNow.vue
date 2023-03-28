<script setup lang="ts">
import ProductItem from '../components/products/ProductItem.vue';
import { Product } from '../interfaces';

const { products } = defineProps<{ products: Array<Product> }>();
</script>
<template>
  <section>
    <h1 class="text-2xl text-center font-bold mt-[200px] mb-3">Trending Now</h1>
    <div class="grid grid-cols-4 gap-2">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>
