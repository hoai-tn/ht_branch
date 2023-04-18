<script setup>
import { useProductStore } from '@/stores/product';
import { useBagStore } from '@/stores/bag';
import { useAppStore } from '@/stores/app';

import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

const appStore = useAppStore();
const productStore = useProductStore();
const bagStore = useBagStore();
const route = useRoute();
const state = reactive({ product: {}, form: { color: '', size: '' } });
onMounted(() => {
  const id = route.params.id || '';
  state.product = productStore.products.find((e) => e.id == id);
});
const addToBag = () => {
  bagStore.addProduct({ ...state.product, ...state.form });
  appStore.onShowBagNav();
};
</script>
<template>
  <div class="flex pt-10">
    <div class="w-1/2 max-h-[800px]">
      <img class="h-[730px]" :src="state.product.image" alt="asd" />
    </div>
    <div>
      <h3 class="text-3xl font-bold">{{ state.product.name }}</h3>
      <div>{{ state.product.title }}</div>
      <div class="text-lg">${{ state.product.price }}</div>
      <div class="cursor-pointer mb-3">
        <font-awesome-icon icon="fa-solid fa-heart" />
      </div>
      <form @submit.prevent="addToBag" class="w-[400px]">
        <select
          id="size"
          class="w-full border-[3px] border-black p-3"
          v-model="state.form.size"
          required
        >
          <option value="" disabled selected>Select size:</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="M">L</option>
        </select>
        <select
          id="color"
          class="w-full border-[3px] border-black p-3 mt-1"
          name="add-to-bag"
          v-model="state.form.color"
          required
        >
          <option value="" disabled selected>Select color:</option>
          <option value="Blue">Blue</option>
          <option value="Red">Red</option>
          <option value="White">White</option>
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
