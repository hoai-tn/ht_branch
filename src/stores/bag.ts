import { products } from './../shares/products-mock';
import { defineStore } from 'pinia';
import { Product } from '../interfaces';
import { getCart, addToCart, removeCart } from '../apis/cart.js';
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
    async removeProduct(userId, productId, quantity) {
      const { data } = await removeCart({ userId, productId, quantity });
      this.products = data.products;
    },
    clearBag() {
      this.products = [];
    },
  },
});
