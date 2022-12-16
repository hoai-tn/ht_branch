<script setup lang="ts">
const { product } = defineProps({
  product: Object,
}); // #f5f5f5 #  
</script>
<template>
  <div class="text-center">
    <div class="bg-[#0000000a] p-1">
      <img :src="product.image" alt="alt-item" />
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
