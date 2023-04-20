import { defineStore } from 'pinia';

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    isShowBagNav: false,
    isShowSideBar: false,
  }),
  actions: {
    onShowBagNav() {
      this.isShowBagNav = true;
    },
    onHideBagNav() {
      this.isShowBagNav = false;
    },

    onShowSideBar() {
      this.isShowSideBar = true;
    },
    onHideSideBar() {
      this.isShowSideBar = false;
    },
  },
});
