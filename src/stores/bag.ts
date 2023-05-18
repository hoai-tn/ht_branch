import { products } from './../shares/products-mock';
import { defineStore } from 'pinia';
import { Product } from '../interfaces';
import { getCart, addToCart, removeCart } from '../apis/cart.js';
export const useBagStore = defineStore('bag', {
  state: () => ({
    products: [] as Product[],
  }),
  getters: {
    quantizes: (state) => {
      const newQuantity = {};
      state.products.forEach((e) => {
        newQuantity[e._id] = e.quantity;
      });

      return newQuantity;
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
    async removeProduct(userId, productId, quantity) {
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
