<script setup lang="ts">
// interface Project
import { Product } from '../interfaces';

interface PromoDoubleProps {
  products: Array<Product>;
}
const { products } = defineProps<PromoDoubleProps>();

</script>
<template>
  <section class="sm:container sm:mx-auto mt-[100px] p-4">
    <div >
      <div class="sm:flex sm:space-x-10">
        <div class="w-full" v-for="product in products" :key="product.id">
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
