<script setup>
import { useProductStore } from '@/stores/product';
import { useBagStore } from '@/stores/bag';
import { useAppStore } from '@/stores/app';
import { useAuthStore } from '@/stores/auth';

import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getProductByID } from '../apis/product';
const appStore = useAppStore();

const productStore = useProductStore();
const bagStore = useBagStore();
const route = useRoute();
const authStore = useAuthStore();
const state = reactive({ product: {}, form: { color: '', size: '' } });
onMounted(async () => {
  const id = route.params.id || '';
  try {
    const { data } = await getProductByID(id);
    state.product = data.result;
  } catch (error) {}
});
const addToBag = () => {
  const getUserId = authStore.getUser?._id;
  if (getUserId)
    bagStore.addProduct(
      { ...state.product, ...state.form, quantity: 1 },
      getUserId
    );
  appStore.onShowBagNav();
};
</script>
<template>
  <div class="text-center md:flex pt-10 p-4">
    <div class="w-1/2 max-h-[800px] mx-auto md:mx-0">
      <img class="mx-auto md:h-[730px]" :src="state.product.image" alt="asd" />
    </div>
    <div>
      <h3 class="text-3xl font-bold">{{ state.product.name }}</h3>
      <div>{{ state.product.title }}</div>
      <div class="text-lg">${{ state.product.price }}</div>
      <div class="cursor-pointer mb-3">
        <font-awesome-icon icon="fa-solid fa-heart" />
      </div>
      <form @submit.prevent="addToBag" class="md:w-[400px] mx-auto md:mx-0">
        <select
          id="size"
          class="w-full border-[3px] border-black md:p-3"
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
