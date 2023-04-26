<script setup lang="ts">
import { Product } from '../../interfaces';

const { product } = defineProps<{ product: Product }>();
</script>

<template>
  <div class="text-center">
    <router-link :to="`/product/${product._id}`" class="hover:underline">
      <div class="relative p-2">
        <img
          class="block h-[415px] w-[415px] mx-auto"
          :src="product.image"
          alt="product-item"
        />
        <div class="absolute top-0 left-0 bg-[#0000000a] w-full h-full"></div>
      </div>
      <div class="font-bold">{{ product.name }}</div>

      <div>{{ product.title }}</div>

      <div>{{ product.price }}</div>
      <div class="cursor-pointer">
        <font-awesome-icon icon="fa-solid fa-heart" />
      </div>
    </router-link>
  </div>
</template>
