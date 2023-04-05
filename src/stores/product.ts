import { defineStore } from 'pinia';
import { products } from '../shares/products-mock';

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: products,
  }),
  actions: {},
});
