<script setup>
import { useAppStore } from '@/stores/app';

const store = useAppStore();
</script>
<template>
  <div class="relative">
    <div
      v-if="store.isShowSideBar"
      class="fixed inset-0 bg-black bg-opacity-25 transition-opacity"
      @click="store.onHideSideBar"
    ></div>
    <div
      :class="[
        'fixed top-0 left-0 w-[80vw] sm:w-[45vw] bg-white p-4  h-full z-40 ease-in-out duration-300',
        `${store.isShowSideBar ? 'translate-x-0' : 'translate-x-[-100%]'}`,
      ]"
    >
      <div class="text-right" @click="store.onHideSideBar">
        <font-awesome-icon
          class="cursor-pointer text-[30px] text-gray-500 font-normal"
          icon="fa-solid fa-xmark"
        />
      </div>
      <div class="mt-5">
        <div>
          <ul class="flex flex-col gap-y-2">
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
      </div>
    </div>
  </div>
</template>
<!-- ${
    showSidebar ? "translate-x-0" : "translate-x-full"
  } -->
