<script setup lang="ts"></script>
<template>
  <section>
    <div class="bg-black text-white text-right px-4 py-2">
      FREE Shipping & FREE 365-Day Returns
    </div>
    <nav class="text-black px-6 py-4">
      <div class="flex flex-wrap justify-between items-center mx-auto">
        <router-link to="/" href="">
          <img src="../assets/images/logo.svg" alt="logo" />
        </router-link>
        <div>
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
              <router-link to="/sale" class="hover:underline" href=""
                >Sale</router-link
              >
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
          <a class="px-2" href="">
            <span class="material-symbols-sharp"> shopping_cart </span>
          </a>
        </div>
      </div>
    </nav>
  </section>
</template>
