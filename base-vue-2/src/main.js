import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import plugins from "./plugins";
import global from "./mixins/global";
import "@/filter";
import "@/router/permission";

Vue.mixin(global);

Vue.config.productionTip = false;

for (const plugin of plugins) {
  Vue.use(plugin);
}

new Vue({
  router,
  store,
  render: (h) => h(App),
  created() {
    console.log("create app");
  },
}).$mount("#app");
