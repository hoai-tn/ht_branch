<script setup>
import { useAppStore } from '@/stores/app';
import { useBagStore } from '@/stores/bag';
import { computed } from 'vue';
const store = useAppStore();
const bagStore = useBagStore();
const numberOfProducts = computed(() => bagStore.products.length);
</script>
<template>
  <section class="sticky top-0 z-10 bg-white text-black py-4 px-6 h-[50px]">
    <nav>
      <div class="flex flex-wrap justify-between mx-auto">
        <div class="flex gap-3">
          <div class="block md:hidden" @click="store.onShowSideBar">
            <!-- <font-awesome-icon class="size-17" icon="fa-brands fa-instagram" /> -->
            <font-awesome-icon class="text-[23px]" :icon="['fas', 'bars']" />
          </div>
          <router-link to="/" href="">
            <img src="../assets/images/logo.svg" alt="logo" />
          </router-link>
        </div>
        <div class="hidden md:block">
          <ul class="flex">
            <li class="px-4">
              <router-link to="/new" class="hover:underline" href=""
                >New</router-link
              >
            </li>
            <li class="px-4"><a class="hover:underline" href="">Women</a></li>
            <li class="px-4"><a class="hover:underline" href="">Men</a></li>
            <li class="px-4">
              <a class="hover:underline" href="">Designers</a>
            </li>
            <li class="px-4">
              <router-link to="/sale" class="hover:underline">Sale</router-link>
            </li>
          </ul>
        </div>
        <div>
          <a class="px-2" href="">
            <span class="material-symbols-outlined"> search </span>
          </a>
          <a class="px-2" href="">
            <span class="material-symbols-outlined"> call </span> </a
          ><span class="px-2 cursor-pointer" @click="store.onShowSignInModal">
            <span class="material-symbols-sharp"> person </span> </span
          ><a class="px-2" href="">
            <span class="material-symbols-sharp"> favorite </span>
          </a>

          <span
            class="relative px-2 cursor-pointer"
            @click="store.onShowBagNav()"
          >
            <div class="material-symbols-sharp">shopping_cart</div>
            <div
              class="absolute top-[-20px] right-[-7px] bg-black text-white w-[22px] rounded-full text-center font-bold"
            >
              {{ numberOfProducts }}
            </div>
          </span>
        </div>
      </div>
    </nav>
  </section>
</template>
