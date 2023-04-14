import { defineStore } from 'pinia';

export const useAppStore = defineStore({
  id: 'product',
  state: () => ({
    isShowBagNav: false,
  }),
  actions: {
    onShowBagNav() {
      this.isShowBagNav = true;
    },
    onHideBagNav() {
      this.isShowBagNav = false;
    },
  },
});
