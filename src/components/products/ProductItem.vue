<script setup lang="ts">
import { Product } from '../../interfaces';

const { product } = defineProps<{ product: Product }>();
</script>

<template>
  <div class="text-center">
    <div class="relative p-2">
      <img
        class="block h-[415px] w-[415px]"
        :src="product.image"
        alt="product-item"
      />
      <div class="absolute top-0 left-0 bg-[#0000000a] w-full h-full"></div>
    </div>
    <a href="#" class="hover:underline">
      <div class="font-bold">{{ product.name }}</div>
      <div>{{ product.title }}</div>
    </a>
    <div>{{ product.price }}</div>
    <div class="cursor-pointer">
      <font-awesome-icon icon="fa-solid fa-heart" />
    </div>
  </div>
</template>
