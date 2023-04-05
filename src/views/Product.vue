<script setup>
import { useProductStore } from '@/stores/product';

import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

const productStore = useProductStore();
const route = useRoute();
const state = reactive({ product: [] });
onMounted(() => {
  const id = route.params.id || '';
  state.product = productStore.products.find((e) => e.id == id);
});
</script>
<template>
  <div class="flex pt-10">
    <div class="w-1/2"><img :src="state.product.image" alt="asd" /></div>
    <div>
      <h3 class="text-3xl font-bold">{{ state.product.name }}</h3>
      <div>{{ state.product.title }}</div>
      <div class="text-lg">${{ state.product.price }}</div>
      <div class="cursor-pointer mb-3">
        <font-awesome-icon icon="fa-solid fa-heart" />
      </div>
      <form class="w-[400px]">
        <select
          class="w-full border-[3px] border-black p-3"
          name="add-to-bag"
          id="add-to-bag"
          required
        >
          <option value="color1">Select size</option>
          <option value="color2">Blue</option>
        </select>
        <select
          class="w-full border-[3px] border-black p-3 mt-1"
          name="add-to-bag"
          id="add-to-bag"
          required
        >
          <option value="color1">Select color:</option>
          <option value="color2">Blue</option>
        </select>
        <button
          type="submit"
          class="w-full bg-black text-white p-3 mt-1 font-bold"
        >
          Add to bag
        </button>
        <div class="text-gray my-4">SKU 1048542</div>
        <div>
          <span>
            {{ state.product.detail }}
          </span>
          <span class="font-bold">
            This item may ship with an attached security tag. Merchandise
            returned without the original security tag attached or a damaged tag
            may not qualify for a refund.
          </span>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
