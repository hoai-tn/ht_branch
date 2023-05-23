<script setup>
import { useBagStore } from '@/stores/bag';
import { useAuthStore } from '@/stores/auth';
import { computed, onBeforeMount, reactive, ref, watch } from 'vue';
import BagItem from '../components/products/BagItem.vue';
const bagStore = useBagStore();
const authStore = useAuthStore();
const quantizes = ref({});

let state = reactive({
  form: {},
  paymentMethod: null,
  promoCode: '',
  selectAddressIndex: 0,
  activeAddressIndex: 0,
  isChangeAddress: false,
});

const estimatedTax = computed(() => (bagStore.totalPrice * 0.01).toFixed(2));

const orderTotal = computed(
  () => Number(estimatedTax.value) + bagStore.totalPrice
);

watch(
  () => bagStore.products,
  (newProducts) => {
    newProducts.forEach((e) => {
      quantizes.value[e._id] = e.quantity;
    });
  }
);
watch(
  quantizes,
  (newValue) => {
    bagStore.products.forEach(async (product) => {
      if (product.quantity !== newValue[product._id]) {
        const getUserId = authStore.getUser?._id;
        await bagStore.removeProduct(
          getUserId,
          product._id,
          newValue[product._id]
        );
      }
    });
  },
  { deep: true }
);

onBeforeMount(async () => {
  const getUserId = authStore.getUser?._id;
  try {
    if (getUserId) {
      await bagStore.getProducts(getUserId);
      await authStore.getShippingAddress(getUserId);
    }
  } catch (error) {
    console.log(error);
  }
});

const removeProduct = (id) => {
  bagStore.removeProduct(authStore.getUser?._id, id, 0);
};
const onSubmitUserInfo = () => {
  console.log(state.form);
};
const handleShipHere = (index) => {
  state.activeAddressIndex = index;
  state.isChangeAddress = false;
};
</script>
<template>
  <div class="container mx-auto flex gap-x-2">
    <div class="w-2/3">
      <div class="text-2xl">1. Shipping Address</div>
      <div v-if="!authStore.addressInfo.length" class="border p-4">
        <div class="text-xl border-b pb-2">Add a now shipping address</div>
        <form class="pt-2" @submit.prevent="onSubmitUserInfo">
          <div>
            <label for="">Country*</label>
            <select
              id="size"
              class="w-full border border-gray-300 md:p-2"
              v-model="state.form.country"
            >
              <option value="vn">Viet Nam</option>
              <option value="us">United States</option>
            </select>
          </div>
          <div>
            <label for="full-name">Full Name *</label>
            <input
              id="size"
              class="w-full border border-gray-300 md:p-2"
              v-model="state.form.fullName"
              required
            />
          </div>
          <div>
            <label for="full-name">Address*</label>
            <input
              id="size"
              class="w-full border border-gray-300 md:p-2"
              v-model="state.form.address"
              required
            />
          </div>
          <div class="grid grid-cols-4 gap-x-2">
            <div>
              <label for="full-name">City*</label>
              <input
                id="size"
                class="w-full border border-gray-300 md:p-2"
                v-model="state.form.city"
                required
              />
            </div>
            <div>
              <label for="full-name">State*</label>
              <input
                id="size"
                class="w-full border border-gray-300 md:p-2"
                v-model="state.form.state"
                required
              />
            </div>
            <div>
              <label for="full-name">Zip*</label>
              <input
                id="size"
                class="w-full border border-gray-300 md:p-2"
                v-model="state.form.zip"
                required
              />
            </div>
          </div>
          <label for="full-name">Phone Number*</label>
          <input
            id="size"
            class="block border border-gray-300 md:p-2"
            v-model="state.form.phone"
            required
          />
          <button
            type="submit"
            class="mt-3 rounded-md bg-black px-6 py-4 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-700 hover:text-white"
          >
            SHIP TO THIS ADDRESS
          </button>
        </form>
      </div>
      <div
        v-else
        v-for="(info, index) in authStore.addressInfo"
        :key="index"
        @click="state.selectAddressIndex = index"
      >
        <div
          v-if="state.activeAddressIndex === index || state.isChangeAddress"
          class="flex justify-between border p-4 mt-3 h-[165px]"
          :class="{
            'border-[#6a6a8d]':
              state.selectAddressIndex === index && state.isChangeAddress,
          }"
        >
          <div>
            <h4 class="font-bold">{{ info.fullName }}</h4>
            <div>{{ info.address }}</div>
            <div>
              <span>{{ info.state }}, {{ info.city }} {{ info.zip }}</span>
            </div>
            <div>{{ info.phoneNumber }}</div>
          </div>
          <div>
            <button
              v-if="!state.isChangeAddress"
              @click="state.isChangeAddress = true"
              class="mt-3 rounded-md border border-black px-6 py-4 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-700 hover:text-white"
            >
              CHANGE SHIPPING ADDRESS
            </button>
            <div
              v-if="state.isChangeAddress && state.selectAddressIndex === index"
            >
              <button
                type="submit"
                class="block max-w-[200px] w-[170px] mt-3 rounded-md border border-black px-6 py-4 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-700 hover:text-white"
              >
                EDIT ADDRESS
              </button>
              <button
                @click="handleShipHere(index)"
                class="max-w-[200px] w-[170px] mt-3 rounded-md bg-black px-6 py-4 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-700 hover:text-white"
              >
                SHIP HERE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="text-right" v-if="state.isChangeAddress">
        <button
          @click="state.isChangeAddress = false"
          class="mr-3 w-[170px] mt-3 rounded-md border border-black px-4 py-3 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-700 hover:text-white"
        >
          CANCEL
        </button>
        <button
          class="mt-3 rounded-md border border-black px-4 py-3 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-700 hover:text-white"
        >
          ADD NEW ADDRESS
        </button>
      </div>
      <div class="text-2xl">2. Payment Method</div>
      <div>
        <div class="flex items-center gap-x-4 my-6">
          <div
            class="cursor-pointer"
            :class="{
              'border-b border-b border-black':
                state.paymentMethod === 'AMAZON',
            }"
            @click="state.paymentMethod = 'AMAZON'"
          >
            <img
              src="https://www.payrexx.com/site/assets/files/3843/amazonpay-logo_2x.png"
              alt="amazon"
              width="100"
            />
          </div>
          <div
            class="cursor-pointer h-[30px]"
            :class="{
              'border-b border-b border-black':
                state.paymentMethod === 'PAYPAL',
            }"
            @click="state.paymentMethod = 'PAYPAL'"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/2560px-PayPal_logo.svg.png"
              alt="pay-pal"
              width="80"
            />
          </div>
        </div>
        <div
          v-show="state.paymentMethod === 'AMAZON'"
          class="bg-gray-100 border p-5 mt-3"
        >
          You will be redirected to Amazon to confirm your shipping and payment
          details.
        </div>
        <div
          v-show="state.paymentMethod === 'PAYPAL'"
          class="bg-gray-100 border p-5 mt-3"
        >
          You will be redirected to PayPal to confirm your shipping and payment
          details.
        </div>
      </div>
      <div class="text-2xl">3. Shipping Address</div>
      <!-- 3 Item Review and Shipping -->
      <div class="flex border border-gray-300">
        <div class="w-1/2">
          <BagItem
            :products="bagStore.products"
            :quantizes="quantizes"
            @on-remove="(id) => removeProduct(id)"
          />
        </div>
        <div class="w-1/2 p-4">
          <p class="text-xl font-bold">Estimated Delivery</p>
          <div class="flex items-center gap-x-3 bg-gray-200 mt-2 p-2">
            <div>
              <img
                src="https://p7.hiclipart.com/preview/702/495/649/doorstep-delivery-computer-icons-clip-art-others.jpg"
                alt="logo"
                width="100"
              />
            </div>
            <div>
              <div class="text-xl font-bold">Tuesday, May 23</div>
              <p>
                As a VIP member, all shipping options are FREE! Thanks for being
                a VIP
              </p>
            </div>
          </div>
        </div>
      </div>
      <h4 class="text-xl font-bold">Order total: ${{ bagStore.totalPrice }}</h4>
      <small
        >By placing your order, you agree to zappos.com’s privacy notice and
        conditions of use. *Important information about sales tax you may owe in
        your state.</small
      >
      <div>
        <button
          type="button"
          class="w-full mt-3 rounded-md bg-black px-6 py-4 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-700 hover:text-white sm:mt-0"
        >
          Place your order
        </button>
      </div>
    </div>
    <!-- 3 Item Review and Shipping -->

    <div class="w-1/3">
      <div class="bg-gray-100 border border-gray-300 p-4 rounded">
        <div class="text-xl">
          Order Summary ({{ bagStore.totalQuantity }} Items)
        </div>
        <div class="flex justify-between py-2">
          <div class="font-bold">Subtotal:</div>
          <div class="font-bold">${{ bagStore.totalPrice }}</div>
        </div>
        <div class="flex justify-between py-2">
          <div>Shipping:</div>
          <div>Free</div>
        </div>
        <div class="flex justify-between py-2 border-t border-gray-300">
          <div>Total before tax:</div>
          <div>${{ bagStore.totalPrice }}</div>
        </div>
        <div class="flex justify-between py-2">
          <div>Estimated tax to be collected:*</div>
          <div>${{ estimatedTax }}</div>
        </div>
        <div class="flex justify-between py-2 border-t border-gray-300">
          <div class="text-lg font-bold">Order Total:</div>
          <div class="text-lg font-bold">${{ orderTotal }}</div>
        </div>
      </div>
      <div class="mt-2 bg-gray-100 border border-gray-300 p-4 rounded">
        <div class="text-xl">Apply Gift Card or Promo Code</div>
        <div class="flex gap-x-2">
          <input
            class="border border-gray-300 p-2"
            v-model="state.promoCode"
            type="text"
            placeholder="Enter code"
          />
          <button
            class="w-full border p-2"
            :class="[!!state.promoCode ? 'border-black' : 'border-gray-300']"
            :disabled="!state.promoCode"
          >
            APPLY
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
