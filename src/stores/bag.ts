import { products } from './../shares/products-mock';
import { defineStore } from 'pinia';
import { Product } from '../interfaces';
import { getCart, addToCart, removeCart } from '../apis/cart.js';
export const useBagStore = defineStore('bag', {
  state: () => ({
    products: [] as Product[],
  }),
  getters: {
    totalPrice: (state) => {
      return state.products
        .map((e) => Number(e.price) * Number(e.quantity))
        .reduce((a, b) => a + b, 0);
    },
    totalQuantity: (state) => {
      return state.products.map((e) => e.quantity).reduce((a, b) => Number(a) + Number(b), 0);
    },
  },
  actions: {
    async getProducts(userId: string) {
      try {
        const { data } = await getCart(userId);
        this.products = data.result.products;
      } catch (error) {
        throw error;
      }
    },
    async addProduct(product: Product, userId: string) {
      try {
        const { data } = await addToCart(userId, product);
        console.log({ data });

        this.products = data.products;
      } catch (error) {
        throw error;
      }
    },
    async removeProduct(userId: string, productId: string, quantity: Number) {
      try {
        const { data } = await removeCart({ userId, productId, quantity });
        this.products = data.products;
      } catch (error) {
        throw error;
      }
    },
    clearBag() {
      this.products = [];
    },
  },
});
