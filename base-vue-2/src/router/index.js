import Vue from "vue";
import VueRouter from "vue-router";
import AuthRoutes from "./auth.routes";
import DashboardRoutes from "./dashboard.routes";
import LearnVue2Routes from "@/router/learnVue2.routes";

Vue.use(VueRouter);

const routes = [...AuthRoutes, ...DashboardRoutes, ...LearnVue2Routes];

console.log("routes ", routes);

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
