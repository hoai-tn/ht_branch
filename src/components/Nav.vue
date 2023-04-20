<script setup>
import { useAppStore } from '@/stores/app';

const store = useAppStore();
</script>
<template>
  <section class="sticky top-0 z-10 bg-white text-black py-4 px-6 h-[50px]">
    <nav>
      <div class="flex flex-wrap justify-between mx-auto">
        <div class="flex gap-3">
          <div class="block md:hidden">ex</div>
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
          ><a class="px-2" href="">
            <span class="material-symbols-sharp"> person </span> </a
          ><a class="px-2" href="">
            <span class="material-symbols-sharp"> favorite </span>
          </a>

          <span class="px-2 cursor-pointer" @click="store.onShowBagNav()">
            <span class="material-symbols-sharp"> shopping_cart </span>
          </span>
        </div>
      </div>
    </nav>
  </section>
</template>
