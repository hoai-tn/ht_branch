<script setup lang="ts">
import { defineComponent } from 'vue';
import ProductItem from '../components/products/ProductItem.vue';
const { products } = defineProps({
  products: Array,
});

</script>

<template>
  <section>
    <h1 class="text-2xl text-center font-bold mt-[200px] mb-3">Trending Now</h1>
    <div class="flex justify-between">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>
