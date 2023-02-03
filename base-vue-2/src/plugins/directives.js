import tooltip from "@/directives/tooltip";

export default {
  install(Vue) {
    Vue.directive("tooltip", tooltip);
  },
};
