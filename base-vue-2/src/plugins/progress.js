import store from "@/store";

export default {
  install(Vue) {
    Vue.prototype.$progress = {
      start() {
        store.dispatch("setShowProgress", true);
      },
      end() {
        store.dispatch("setShowProgress", false);
      },
    };
  },
};
