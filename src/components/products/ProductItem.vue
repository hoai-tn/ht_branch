<script setup lang="ts">
const { product } = defineProps({
  product: Object,
}); // #f5f5f5 #0000000a
</script>
<template>
  <div class="text-center">
    <div class="bg-[#0000000a] p-1">
      <img :src="product.image" alt="alt-item" />
    </div>
    <div class="text-bold">{{ product.name }}</div>
    <div>{{ product.title }}</div>
    <div>{{ product.price }}</div>
    <div>S2</div>
  </div>
</template>
