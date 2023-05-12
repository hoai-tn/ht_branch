import { products } from './../shares/products-mock';
import { defineStore } from 'pinia';
import { Product } from '../interfaces';
import { getCart, addToCart } from '../apis/cart.js';
export const useBagStore = defineStore('bag', {
  state: () => ({
    products: [] as Product[],
  }),
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
      } catch (error) {
        throw error;
      }
      this.products.push(product);
    },
    removeProduct(id: string) {
      const index = this.products.findIndex((e) => e.id === id);
      this.products.splice(index, 1);
    },
    clearBag() {
      this.products = [];
    },
  },
});
