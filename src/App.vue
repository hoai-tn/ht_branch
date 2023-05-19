<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from "./components/HelloWorld.vue";
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
import BagBar from './components/BagBar.vue';
import SideBar from './components/SideBar.vue';
import SignInModal from './components/SingInModal.vue';
</script>

<template>
  <div class="bg-black text-white text-right px-4 py-2">
    FREE Shipping & FREE 365-Day Returns
  </div>
  <Nav />
  <div class="mb-[400px]">
    <router-view />
  </div>
  <Footer></Footer>
  <BagBar />
  <SideBar />
  <SignInModal />
</template>

<style scoped></style>
