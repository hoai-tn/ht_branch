<script setup>
import { useBagStore } from '@/stores/bag';
import { useAuthStore } from '@/stores/auth';
import { computed, onBeforeMount, ref, watch } from 'vue';
import BagItem from "../components/products/BagItem.vue"
const bagStore = useBagStore();
const authStore = useAuthStore();

const quantizes = ref({});

watch(
  () => bagStore.products,
  (newProducts) => {
    newProducts.forEach((e) => {
      quantizes.value[e._id] = e.quantity;
    });
  }
);
watch(
  quantizes,
  (newValue) => {
    bagStore.products.forEach(async (product) => {
      if (product.quantity !== newValue[product._id]) {
        const getUserId = authStore.getUser?._id;
        await bagStore.removeProduct(
          getUserId,
          product._id,
          newValue[product._id]
        );
      }
    });
  },
  { deep: true }
);

const numberOfItems = computed(() =>
  bagStore.products.map((e) => e.quantity).reduce((a, b) => a + b, 0)
);

onBeforeMount(async () => {
  const getUserId = authStore.getUser?._id;
  try {
    if (getUserId) await bagStore.getProducts(getUserId);
  } catch (error) {
    console.log(error);
  }
});

const removeProduct = (id) => {
  bagStore.removeProduct(authStore.getUser?._id, id, 0);
};
</script>
<template>
  <div class="container mx-auto">
    <div class="text-2xl">{{ numberOfItems }} items in My Cart</div>
    <div class="flex gap-x-3">
      <div class="w-2/3">
        <div class="text-white bg-black p-2 flex justify-between pr-[60px]">
          <div>Item</div>
          <div>Price/Quantity</div>
        </div>
        <div class="border-l border-r border-b border-gray-300">
          <BagItem
            :products="bagStore.products"
            :quantizes="quantizes"
            @on-remove="(id) => removeProduct(id)"
          />
        </div>
      </div>
      <div class="w-1/3 p-2 border border-gray-300 h-[200px]">
        <router-link to="/checkout">
          <button
            type="button"
            class="w-full mt-3 rounded-md bg-black px-6 py-4 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-700 hover:text-white sm:mt-0"
            @click="handleProceedToCheckout"
          >
            PROCEED TO CHECKOUT
          </button>
        </router-link>
        <div class="text-sm mt-3">
          Have a Promotional Code? Proceed to checkout to redeem it.
        </div>
        <div class="text-xl mt-3">
          Cart Summary ({{ bagStore.totalQuantity }} Items)
        </div>
        <div class="flex justify-between mt-3">
          <div class="font-bold">
            Subtotal ({{ bagStore.totalQuantity }} items)
          </div>
          <div class="font-bold">${{ bagStore.totalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
