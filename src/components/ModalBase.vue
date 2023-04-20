<script setup>
const { title } = defineProps({
  title: String,
});
</script>
<template>
  <div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div
        @click="$emit('on-close')"
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      ></div>
      <div
        class="flex min-h-full items-end justify-center text-center items-center sm:p-0"
      >
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="bg-white">
            <div class="flex justify-between border-b p-4">
              <h4 class="text-4xl">{{ title }}</h4>
              <font-awesome-icon
                @click="$emit('on-close')"
                class="cursor-pointer text-[30px] text-gray-500 font-normal"
                icon="fa-solid fa-xmark"
              />
            </div>
            <div class="p-4">
              <slot name="content"></slot>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <slot name="footer"></slot>
          </div>
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
