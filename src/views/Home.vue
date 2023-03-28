<script setup lang="ts">
import PromoGroup from '../components/PromoGroup.vue';
import PromoDouble from '../components/PromoDouble.vue';
import ShopRickOwens from '../components/ShopRickOwens.vue';
import TrendingNow from '../components/TrendingNow.vue';
import { reactive } from '@vue/reactivity';
import { v4 as uuidv4 } from 'uuid';
const { promoTop, promoBottom, trendingProducts } = reactive({
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
  trendingProducts: [
    {
      id: uuidv4(),

      image: '/src/assets/images/trending1.jpg',
      name: 'Paul Smile',
      title: 'Short sleeve Bloswing',
      price: 2900,
    },
    {
      id: uuidv4(),
      image: '/src/assets/images/trending2.jpg',
      name: 'Paul Smile',
      title: 'Short sleeve Bloswing',
      price: 2900,
    },
    {
      id: uuidv4(),
      image: '/src/assets/images/trending3.jpg',
      name: 'Trending 3',
      title: 'Short sleeve Bloswing',
      price: 2900,
    },
    {
      id: uuidv4(),
      image: '/src/assets/images/trending4.jpg',
      name: 'Trending 4',
      title: 'Short sleeve Bloswing',
      price: 2900,
    },
  ],
});
</script>
<template>
  <div>
    <img src="/src/assets/images/banner-top.jpg" />
  </div>
  <PromoGroup />
  <PromoDouble :products="promoTop" />
  <ShopRickOwens />
  <PromoDouble :products="promoBottom" />
  <img class="mt-5 w-full" src="/src/assets/images/banner-bottom.jpg" />
  <TrendingNow :products="trendingProducts" />
</template>
