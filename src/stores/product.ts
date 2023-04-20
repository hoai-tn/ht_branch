import { defineStore } from 'pinia';
import { products } from '../shares/products-mock';

export const useProductStore = defineStore('products',{
    state: () => ({
    products: products,
  }),
  actions: {},
});
