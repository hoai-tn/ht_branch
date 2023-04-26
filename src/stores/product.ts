import { defineStore } from 'pinia';
import { products } from '../shares/products-mock';
import { getProducts } from '../apis/product';
export const useProductStore = defineStore('products', {
  state: () => ({
    products: products,
  }),
  actions: {
    async getProducts() {
      try {
        const { data } = await getProducts();
        this.products = data.result;
      } catch (error) {
        throw error;
      }
    },
  },
});
