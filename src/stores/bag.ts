import { defineStore } from 'pinia';
import { Product } from '../interfaces';
export const useBagStore = defineStore('bag', {
  state: () => ({
    products: [] as Product[],
  }),
  actions: {
    addProduct(product: Product) {
      this.products.push(product);
    },
    removeProduct(id: string) {
      const index = this.products.findIndex((e) => e.id === id);
      this.products.splice(index, 1);
    },
  },
});
