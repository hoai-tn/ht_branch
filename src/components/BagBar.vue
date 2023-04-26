<script setup>
import { useAppStore } from '@/stores/app';
import { useBagStore } from '@/stores/bag';
import { useAuthStore } from '@/stores/auth';

import { onMounted, onUpdated, watch } from 'vue';
import router from '../routers';

const store = useAppStore();
const bagStore = useBagStore();
const authStore = useAuthStore();

watch(
  () => store.isShowBagNav,
  () => {
    document.getElementsByTagName('body')[0].style.overflow = store.isShowBagNav
      ? 'hidden'
      : 'visible';
  }
);

onMounted(async () => {
  const getUserId = authStore.getUser?._id;
  try {
    if (getUserId) await bagStore.getProducts(getUserId);
  } catch (error) {
    console.log(error);
    console.log('have some error');
  }
});

const handleProceedToCheckout = () => {
  if (authStore.isAuthenticated) {
    router.push('/checkout');
  } else {
    store.onHideBagNav();
    store.onShowSignInModal();
  }
};
</script>
<template>
  <div
    v-if="store.isShowBagNav"
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      @click="store.onHideBagNav"
      class="fixed inset-0 bg-black bg-opacity-25 transition-opacity"
    ></div>
    <div
      class="fixed w-full h-screen bg-white border border-[black] right-0 top-0 z-10 overflow-hidden md:w-[530px]"
    >
      <div
        class="bg-white sticky top-0 left-0 z-10 flex justify-between w-full border-b border-[black] p-5"
      >
        <h4 class="text-3xl">My Bag</h4>
        <div @click="store.onHideBagNav">
          <font-awesome-icon
            class="cursor-pointer text-[30px] text-gray-500 font-normal"
            icon="fa-solid fa-xmark"
          />
        </div>
      </div>
      <div class="relative h-[82%] overflow-auto">
        <!-- product item -->
        <div
          v-for="(item, index) in bagStore.products"
          :key="index"
          class="flex p-5 gap-x-10"
        >
          <div class="relative">
            <img :src="item.image" alt="" width="120" />
            <div
              class="absolute top-0 left-0 bg-[#0000000a] w-full h-full"
            ></div>
          </div>
          <div>
            <div>{{ item.name }}</div>

            <div class="font-bold">
              <a href="#">Glove Slingback </a>
            </div>
            <div v-if="item.color">Color: {{ item.color }}</div>
            <div v-if="item.size">Size: {{ item.size }}</div>
            <div v-if="item.width">{{ item.wi }}</div>
          </div>
          <div class="flex flex-col justify-between">
            <div class="text-xl font-bold">{{ item.price }}</div>
            <button
              @click="bagStore.removeProduct(item.id)"
              class="font-bold underline mt-3"
            >
              REMOVE
            </button>
          </div>
        </div>
      </div>
      <!-- bottom -->
      <div class="bg-[#e6e6e6] px-4 py-5">
        <div class="font-bold text-right">Bag Subtotal (3 item) $2,375.00</div>
        <div class="w-full sm:flex justify-between">
          <button
            type="button"
            class="inline-flex w-full justify-center rounded-md bg-black px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-black sm:ml-3 sm:w-auto"
          >
            VIEW BAG
          </button>

          <button
            type="button"
            class="mt-3 inline-flex w-full justify-center rounded-md bg-black px-6 py-4 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200 hover:text-black sm:mt-0 sm:w-auto"
            @click="handleProceedToCheckout"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
</style>
