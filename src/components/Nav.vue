<script setup>
import { useAppStore } from '@/stores/app';
import { useBagStore } from '@/stores/bag';
import { useAuthStore } from '@/stores/auth';

import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
const store = useAppStore();
const bagStore = useBagStore();
const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore);
const isShowDropAvatar = ref(false);
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
          <span class="px-2 cursor-pointer">
            <div class="inline relative" v-if="isAuthenticated">
              <button
                id="dropdownUserAvatarButton"
                class="mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                type="button"
                @click="isShowDropAvatar = !isShowDropAvatar"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="w-8 h-8 rounded-full"
                  :src="authStore.getUser?.picture"
                  alt="user photo"
                />
              </button>

              <!-- Dropdown menu -->
              <div
                v-show="isShowDropAvatar"
                id="dropdownAvatar"
                class="absolute right-[-20px] z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div>{{ authStore.getUser?.name }}</div>
                  <div class="font-medium truncate">
                    {{ authStore.getUser?.email }}
                  </div>
                </div>
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownUserAvatarButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Dashboard</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Settings</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Earnings</a
                    >
                  </li>
                </ul>
                <div class="py-2" @click="authStore.logout">
                  <span
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >Sign out</span
                  >
                </div>
              </div>
            </div>
            <span
              v-else
              @click="store.onShowSignInModal"
              class="material-symbols-sharp"
            >
              person
            </span>
          </span>
        </div>
      </div>
    </nav>
  </section>
</template>
