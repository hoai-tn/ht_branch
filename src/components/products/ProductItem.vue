<script setup lang="ts">

const { product } = defineProps<{product:Product}>();
</script>

<template>
  <div class="text-center">
    <div class="bg-gray-200 p-1">
      <img :src="product.image" alt="product-item" />
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
