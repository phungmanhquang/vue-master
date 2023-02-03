export default {
  install(Vue) {
    Vue.prototype.$config = {
      title: "Config title",
      author: "Benefit One Inc.",
    };
  },
};
