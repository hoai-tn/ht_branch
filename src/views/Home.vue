<script setup lang="ts">
import PromoGroup from '../components/PromoGroup.vue';
import PromoDouble from '../components/PromoDouble.vue';
import ShopRickOwens from '../components/ShopRickOwens.vue';
import { reactive } from '@vue/reactivity';
import { v4 as uuidv4 } from 'uuid';
const state = reactive({
  promoTop: [
    {
      id: uuidv4(),
      image: '/src/assets/images/MAISON-ONE.jpg',
      content: 'Beautiful Textures & Prints from Kwaidan Editions',
      subsTitle: 'SHOP MM6 NOW',
    },
    {
      id: uuidv4(),
      image: '/src/assets/images/LUUDAN-EDIT.jpg',
      content: 'New Looks by Golden Gooseaas',
      subsTitle: 'SHOP THE EDIT',
    },
  ],
  promoBottom: [
    {
      id: uuidv4(),
      image: '/src/assets/images/promo-dou-3.jpg',
      content: 'Shop Luxe Gift',
      subsTitle: 'SHOP MM6 NOW',
    },
    {
      id: uuidv4(),
      image: '/src/assets/images/promo-dou-4.jpg',
      content: 'Maison Boot',
      subsTitle: 'SHOP THE EDIT',
    },
  ],
});
</script>
<template>
  <div>
    <img src="/src/assets/images/banner-top.jpg" />
  </div>
  <PromoGroup />
  <PromoDouble :products="state.promoTop" />
  <ShopRickOwens />
  <PromoDouble :products="state.promoBottom" />
</template>
