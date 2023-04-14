<script setup>
import { useAppStore } from '@/stores/app';
import { watch } from 'vue';

const store = useAppStore();

watch(
  () => store.isShowBagNav,
  (state) => {
    document.getElementsByTagName('body')[0].style.overflow = store.isShowBagNav
      ? 'hidden'
      : 'visible';
  }
);
</script>
<template>
  <div
    v-if="store.isShowBagNav"
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      @click="store.onHideBagNav"
      class="fixed inset-0 bg-black bg-opacity-25 transition-opacity"
    ></div>
    <div
      class="fixed w-full h-screen bg-white border border-[black] right-0 top-0 z-10 overflow-auto md:w-[530px]"
    >
      <div
        class="bg-white sticky top-0 left-0 z-10 flex justify-between w-full border-b border-[black] p-5"
      >
        <h4 class="text-3xl">My Bag</h4>
        <div @click="store.onHideBagNav">
          <font-awesome-icon
            class="cursor-pointer text-[30px] text-gray-500 font-normal"
            icon="fa-solid fa-xmark"
          />
        </div>
      </div>
      <div class="relative">
        <div class="overflow-auto height-screen">
          <!-- product item -->
          <div class="flex p-5 gap-x-3">
            <div class="relative">
              <img
                src="https://m.media-amazon.com/images/I/61goEfmlITL._SX712_.jpg"
                alt=""
                width="120"
              />
              <div
                class="absolute top-0 left-0 bg-[#0000000a] w-full h-full"
              ></div>
            </div>
            <div>
              <div>Proenza Schouler</div>

              <div class="font-bold">
                <a href="#">Glove Slingback Pumps</a>
              </div>
              <div>Color: Printed Python Goat Brown</div>
              <div>Size: EU 37.5 (US Women's 7.5)</div>
              <div>Width: M</div>
            </div>
            <div>
              <div class="text-xl font-bold">356.30$</div>
              <button>remove</button>
            </div>
          </div>
          <!-- product item -->
          <div class="flex p-5 gap-x-3">
            <div class="relative">
              <img
                src="https://m.media-amazon.com/images/I/61goEfmlITL._SX712_.jpg"
                alt=""
                width="120"
              />
              <div
                class="absolute top-0 left-0 bg-[#0000000a] w-full h-full"
              ></div>
            </div>
            <div>
              <div>Proenza Schouler</div>

              <div class="font-bold">
                <a href="#">Glove Slingback Pumps</a>
              </div>
              <div>Color: Printed Python Goat Brown</div>
              <div>Size: EU 37.5 (US Women's 7.5)</div>
              <div>Width: M</div>
            </div>
            <div>
              <div class="text-xl font-bold">356.30$</div>
              <button>remove</button>
            </div>
          </div>
          <!-- product item -->
          <div class="flex p-5 gap-x-3">
            <div class="relative">
              <img
                src="https://m.media-amazon.com/images/I/61goEfmlITL._SX712_.jpg"
                alt=""
                width="120"
              />
              <div
                class="absolute top-0 left-0 bg-[#0000000a] w-full h-full"
              ></div>
            </div>
            <div>
              <div>Proenza Schouler</div>

              <div class="font-bold">
                <a href="#">Glove Slingback Pumps</a>
              </div>
              <div>Color: Printed Python Goat Brown</div>
              <div>Size: EU 37.5 (US Women's 7.5)</div>
              <div>Width: M</div>
            </div>
            <div>
              <div class="text-xl font-bold">356.30$</div>
              <button>remove</button>
            </div>
          </div>
          <!-- product item -->
          <div class="flex p-5 gap-x-3">
            <div class="relative">
              <img
                src="https://m.media-amazon.com/images/I/61goEfmlITL._SX712_.jpg"
                alt=""
                width="120"
              />
              <div
                class="absolute top-0 left-0 bg-[#0000000a] w-full h-full"
              ></div>
            </div>
            <div>
              <div>Proenza Schouler</div>

              <div class="font-bold">
                <a href="#">Glove Slingback Pumps</a>
              </div>
              <div>Color: Printed Python Goat Brown</div>
              <div>Size: EU 37.5 (US Women's 7.5)</div>
              <div>Width: M</div>
            </div>
            <div>
              <div class="text-xl font-bold">356.30$</div>
              <button>remove</button>
            </div>
          </div>
          <!-- product item -->
          <div class="flex p-5 gap-x-3">
            <div class="relative">
              <img
                src="https://m.media-amazon.com/images/I/61goEfmlITL._SX712_.jpg"
                alt=""
                width="120"
              />
              <div
                class="absolute top-0 left-0 bg-[#0000000a] w-full h-full"
              ></div>
            </div>
            <div>
              <div>Proenza Schouler</div>

              <div class="font-bold">
                <a href="#">Glove Slingback Pumps</a>
              </div>
              <div>Color: Printed Python Goat Brown</div>
              <div>Size: EU 37.5 (US Women's 7.5)</div>
              <div>Width: M</div>
            </div>
            <div>
              <div class="text-xl font-bold">356.30$</div>
              <button>remove</button>
            </div>
          </div>
          <!-- product item -->
          <div class="flex p-5 gap-x-3">
            <div class="relative">
              <img
                src="https://m.media-amazon.com/images/I/61goEfmlITL._SX712_.jpg"
                alt=""
                width="120"
              />
              <div
                class="absolute top-0 left-0 bg-[#0000000a] w-full h-full"
              ></div>
            </div>
            <div>
              <div>Proenza Schouler</div>

              <div class="font-bold">
                <a href="#">Glove Slingback Pumps</a>
              </div>
              <div>Color: Printed Python Goat Brown</div>
              <div>Size: EU 37.5 (US Women's 7.5)</div>
              <div>Width: M</div>
            </div>
            <div>
              <div class="text-xl font-bold">356.30$</div>
              <button>remove</button>
            </div>
          </div>
          <!-- product item -->
          <div class="flex p-5 gap-x-3">
            <div class="relative">
              <img
                src="https://m.media-amazon.com/images/I/61goEfmlITL._SX712_.jpg"
                alt=""
                width="120"
              />
              <div
                class="absolute top-0 left-0 bg-[#0000000a] w-full h-full"
              ></div>
            </div>
            <div>
              <div>Proenza Schouler</div>

              <div class="font-bold">
                <a href="#">Glove Slingback Pumps</a>
              </div>
              <div>Color: Printed Python Goat Brown</div>
              <div>Size: EU 37.5 (US Women's 7.5)</div>
              <div>Width: M</div>
            </div>
            <div>
              <div class="text-xl font-bold">356.30$</div>
              <button>remove</button>
            </div>
          </div>
          <!-- product item -->
          <div class="flex p-5 gap-x-3">
            <div class="relative">
              <img
                src="https://m.media-amazon.com/images/I/61goEfmlITL._SX712_.jpg"
                alt=""
                width="120"
              />
              <div
                class="absolute top-0 left-0 bg-[#0000000a] w-full h-full"
              ></div>
            </div>
            <div>
              <div>Proenza Schouler</div>

              <div class="font-bold">
                <a href="#">Glove Slingback Pumps</a>
              </div>
              <div>Color: Printed Python Goat Brown</div>
              <div>Size: EU 37.5 (US Women's 7.5)</div>
              <div>Width: M</div>
            </div>
            <div>
              <div class="text-xl font-bold">356.30$</div>
              <button>remove</button>
            </div>
          </div>
        </div>
        <!-- bottom -->
        <div
          class="sticky bottom-0 left-0 bg-[#e6e6e6] px-10 py-20 w-full sm:flex sm:flex-row-reverse sm:px-6"
        >
          <button
            type="button"
            class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
          >
            Deactivate
          </button>
          <button
            type="button"
            class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            @click="store.onHideBagNav"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
</style>
