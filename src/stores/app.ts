import { defineStore } from 'pinia';

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    isShowBagNav: false,
    isShowSideBar: false,
    isShowSignInModal: false,
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

    onShowSignInModal() {
      this.isShowSignInModal = true;
    },
    onHideSignInModal() {
      this.isShowSignInModal = false;
    },

    resetStore() {
      this.isShowBagNav = false;
      this.isShowSideBar = false;
      this.isShowSignInModal = false;
    },
  },
});
