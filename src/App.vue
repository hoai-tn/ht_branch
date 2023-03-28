<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from "./components/HelloWorld.vue";
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <div>
    <div class="bg-black text-white text-right px-4 py-2">
      FREE Shipping & FREE 365-Day Returns
    </div>
    <Nav />
    <router-view />
  <Footer></Footer>

  </div>
</template>

<style scoped></style>
