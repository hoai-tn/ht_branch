<script setup>
import { useAppStore } from '@/stores/app';
import { useAuthStore } from '@/stores/auth';
import Modal from './ModalBase.vue';

const store = useAppStore();
const authStore = useAuthStore();


const handleOnCloseModal = () => {
  store.onHideSignInModal();
};

const callback = async (response) => {
  await authStore.authGoogle(response.access_token);
  store.onHideSignInModal();
};
</script>

<template>
  <Modal
    v-if="store.isShowSignInModal"
    title="sign-in"
    @on-close="handleOnCloseModal"
  >
    <template v-slot:content>
      <div class="flex flex-col gap-y-3">
        <router-link
          to="/sign-in"
          class="flex justify-center w-full p-4 font-bold border-[3px] border-[#003953] rounded hover:bg-[#003953] hover:text-white"
        >
          SIGN IN WITH HT
        </router-link>
        <GoogleLogin :callback="callback" popup-type="TOKEN">
          <button
            class="flex justify-center justify-center items-center gap-x-2 w-full p-4 font-bold border-[3px] border-[#003953] rounded hover:bg-[#003953] hover:text-white"
          >
            <img
              width="30"
              src="https://cdn-icons-png.flaticon.com/512/2504/2504739.png"
              alt="google"
            />
            <span> SIGN IN WITH GOOGLE </span>
          </button>
        </GoogleLogin>
        <button
          class="flex justify-center justify-center items-center gap-x-2 w-full p-4 font-bold border-[3px] border-[#003953] rounded hover:bg-[#003953] hover:text-white"
        >
          <img
            width="70"
            src="data:image/svg+xml;charset=utf-8,%3Csvg width='50' height='15' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M30.895 11.654C27.96 13.84 23.705 15 20.042 15c-5.134 0-9.758-1.914-13.257-5.1-.274-.25-.03-.592.3-.399 3.776 2.216 8.444 3.55 13.266 3.55 3.252 0 6.827-.68 10.117-2.088.496-.212.913.33.427.691' fill='%23F90'/%3E%3Cpath d='M31.985 10.227c-.373-.485-2.469-.23-3.41-.115-.285.035-.33-.218-.072-.401 1.671-1.192 4.41-.848 4.728-.449.32.402-.084 3.19-1.65 4.52-.241.205-.47.096-.363-.174.352-.894 1.14-2.895.767-3.38' fill='%23F90'/%3E%3Cpath d='M28.623 1.427V.289A.28.28 0 0 1 28.911 0L33.998 0c.163 0 .293.119.293.287v.977c-.001.163-.139.377-.383.716l-2.635 3.774c.978-.023 2.013.124 2.902.625.2.113.254.28.27.444v1.215c0 .167-.183.361-.375.26-1.566-.823-3.643-.912-5.375.01-.177.095-.362-.096-.362-.264V6.889c0-.184.004-.5.19-.782l3.052-4.393h-2.658a.284.284 0 0 1-.294-.287' fill='%23232F3E'/%3E%3Cg fill='%23232F3E'%3E%3Cpath d='M39.109.078c2.306 0 3.553 1.963 3.553 4.458 0 2.413-1.377 4.326-3.553 4.326-2.263 0-3.496-1.963-3.496-4.409 0-2.462 1.247-4.375 3.496-4.375Zm.014 1.614c-1.146 0-1.218 1.547-1.218 2.512 0 .965-.015 3.027 1.204 3.027 1.204 0 1.262-1.663 1.262-2.678 0-.665-.03-1.464-.233-2.096-.174-.55-.522-.765-1.015-.765ZM24.95 4.92c0 .6.014 1.1-.291 1.634-.247.433-.64.7-1.076.7-.596 0-.945-.45-.945-1.117 0-1.312 1.188-1.55 2.311-1.55v.333Zm1.566 3.756c-.103.091-.29.094-.367.036-.53-.408-.89-1.027-.89-1.027-.854.861-1.458 1.12-2.563 1.12-1.308 0-2.325-.8-2.325-2.4 0-1.251.683-2.102 1.657-2.519.843-.367 2.02-.433 2.921-.533 0 0 .076-.966-.189-1.317-.204-.273-.552-.4-.872-.4-.576-.003-1.133.308-1.243.905-.032.171-.16.315-.294.3l-1.488-.16a.272.272 0 0 1-.232-.321C20.978.549 22.627 0 24.106 0c.756 0 1.745.2 2.34.767.756.7.684 1.634.684 2.652v2.4c0 .721.302 1.038.586 1.427.1.14.122.307-.005.41-.317.263-1.195 1.019-1.195 1.019ZM4.579 4.92c0 .6.014 1.1-.29 1.634-.248.433-.64.7-1.077.7-.595 0-.944-.45-.944-1.117 0-1.312 1.187-1.55 2.31-1.55v.333Zm1.566 3.756c-.102.091-.29.094-.367.036-.53-.408-.89-1.027-.89-1.027-.854.861-1.458 1.12-2.562 1.12-1.308 0-2.326-.8-2.326-2.4 0-1.251.683-2.102 1.657-2.519.843-.367 2.02-.433 2.922-.533 0 0 .075-.966-.19-1.317-.204-.273-.552-.4-.871-.4-.577-.003-1.133.308-1.244.905-.032.171-.159.315-.293.3l-1.488-.16A.272.272 0 0 1 .26 2.36C.607.549 2.257 0 3.736 0c.756 0 1.744.2 2.34.767.756.7.683 1.634.683 2.652v2.4c0 .721.303 1.038.587 1.427.099.14.121.307-.005.41-.318.263-1.196 1.019-1.196 1.019Z'/%3E%3C/g%3E%3Cpath d='M10.484 4.273c0-.944-.044-2.248 1.082-2.248 1.111 0 .965 1.338.965 2.248l.002 4.323c0 .157.124.283.281.293h1.566c.166 0 .302-.131.302-.294V4.273c0-.464-.015-1.15.146-1.562.161-.412.556-.67.936-.67.454 0 .805.155.922.705.073.326.044 1.184.044 1.527v4.323c0 .157.124.283.281.293h1.565c.168 0 .303-.131.303-.294l.001-5.146c0-.875.102-1.87-.395-2.557C18.046.274 17.329 0 16.671 0c-.921 0-1.784.48-2.165 1.51C14.067.48 13.453 0 12.473 0c-.965 0-1.682.48-2.062 1.51h-.03V.47a.295.295 0 0 0-.293-.297H8.626a.295.295 0 0 0-.293.297v8.123c0 .164.131.297.293.297h1.565a.295.295 0 0 0 .293-.297v-4.32M45.93 8.592c0 .164-.124.297-.277.297h-1.486c-.154 0-.278-.133-.278-.297V.47c0-.164.124-.297.278-.297h1.374c.16 0 .278.138.278.232v1.243h.028C46.264.532 46.847 0 47.875 0c.667 0 1.32.257 1.736.961.389.652.389 1.75.389 2.54v5.131a.289.289 0 0 1-.285.257h-1.492a.288.288 0 0 1-.265-.257l.003-4.927c0-1.649-.592-1.697-.933-1.697-.397 0-.716.33-.856.64-.208.498-.242 1.007-.242 1.557v4.387' fill='%23232F3E'/%3E%3C/g%3E%3C/svg%3E"
            alt="google"
          />
          <span> SIGN IN WITH AMAZON </span>
        </button>
        <div class="flex justify-between items-center">
          <div class="h-[3px] w-[180px] bg-gray-200"></div>
          <div class="px-[30px]">or</div>
          <div class="h-[3px] w-[180px] bg-gray-200"></div>
        </div>
        <button
          class="flex justify-center w-full p-4 font-bold border-[3px] border-[#003953] rounded hover:bg-[#003953] hover:text-white"
        >
          SIGN IN WITH AMAZON
        </button>
      </div>
    </template>
  </Modal>
</template>
