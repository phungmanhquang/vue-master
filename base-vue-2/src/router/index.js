import AuthLayoutRouter from "@/pages/auth/router";
import DashboardLayoutRouter from "@/pages/dashboard/router";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [...AuthLayoutRouter, ...DashboardLayoutRouter];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
});

export default router;
