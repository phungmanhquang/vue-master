import router from "@/router";
import Vue from "vue";

router.beforeEach((to, form, next) => {
  Vue.prototype.$progress.start();
  next();
});

router.afterEach(() => {
  Vue.prototype.$progress.end();
});
