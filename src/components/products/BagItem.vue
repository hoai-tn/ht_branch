<script setup>
const { products, quantizes } = defineProps({
  products: Array,
  quantizes: Object,
});
</script>
<template>
  <div
    v-for="(product, index) in products"
    :key="index"
    class="flex justify-between p-3 pr-[100px] gap-2"
  >
    <div class="flex">
      <router-link :to="`/product/${product._id}`">
        <img :src="product.image" alt="alt" width="135" />
      </router-link>
      <div class="px-3">
        <div class="font-bold">{{ product.name }}</div>
        <div v-if="product.color">Color: {{ product.color }}</div>
        <div v-if="product.size">Size: {{ product.size }}</div>
        <div v-if="product.width">{{ product.width }}</div>
      </div>
    </div>
    <div>
      <div class="text-xl">${{ product.price }}</div>
      <div>
        <select
          id="size"
          class="w-full border-[3px] border-gray-300 md:p-3"
          v-model="quantizes[product._id]"
        >
          <option value="0">Remove</option>
          <option v-for="num in product.quantity" :key="num" :value="num">
            {{ num }}
          </option>
        </select>
      </div>
      <div
        class="underline font-bold mt-1 text-xl cursor-pointer"
        @click="$emit('on-remove', product._id)"
      >
        Remove
      </div>
    </div>
  </div>
</template>
