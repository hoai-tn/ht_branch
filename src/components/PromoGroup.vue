<template>
  <section class="container mx-auto px-4">
    <a class="block mt-2 text-2xl text-center" href="#">
      <h5 class="font-bold inline">A warm Welcome From Balamain</h5>
      <span class="underline">SHOP NEW ARRIVALS </span>
    </a>
    <div class="block md:flex md:justify-center space-x-10 mt-[100px]">
      <router-link class="underline font-bold w-full" to="/"
        ><img
          class="mb-4 w-full"
          src="../assets/images/CATEGORY-MENS.jpg"
          alt="Mens"
        />
        <div class="text-center ">MEN'S</div>
      </router-link>
      <router-link class="underline font-bold w-full" to="/"
        ><img
          class="mb-4 w-full"
          src="../assets/images/CATEGORY-WOMENS.jpg"
          alt="womens"
        />
        <div class="text-center ">WOMEN'S</div>
      </router-link>
      <router-link class="underline font-bold w-full" to="/"
        ><img
          class="mb-4 w-full"
          src="../assets/images/CATEGORY-FOOTWEAR.jpg"
          alt="footwear"
        /><div class="text-center ">FOOTWEAR</div></router-link
      >
      <router-link class="underline font-bold w-full" to="/"
        ><img
          class="mb-4 w-full"
          src="../assets/images/CATEGORY-ACCESSORIES.jpg"
          alt="accessories"
        /><div class="text-center ">JEWELRY</div></router-link
      >
      <router-link class="underline font-bold w-full" to="/"
        ><img
          class="mb-4 w-full"
          src="../assets/images/CATEGORY-HANDBAGS.jpg"
          alt="handbags"
        /><div class="text-center ">HANDBAGS</div></router-link
      >
    </div>
  </section>
</template>
