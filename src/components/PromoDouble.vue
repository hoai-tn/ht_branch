<script setup lang="ts">
// interface Project
import { Product } from '../interfaces';

interface PromoDoubleProps {
  products: Array<Product>;
}
const { products } = defineProps<PromoDoubleProps>();

</script>
<template>
  <section>
    <div class="container mx-auto mt-[100px]">
      <div class="flex space-x-10">
        <div v-for="product in products" :key="product.id">
          <router-link to="/"
            ><img class="mb-4" :src="product.image" alt="Mens" />
            <p class="font-bold my-3 text-sm">
              {{ product.content }}
            </p>
            <p class="underline font-bold">{{ product?.subsTitle }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
