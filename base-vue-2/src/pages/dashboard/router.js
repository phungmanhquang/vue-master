import { ROUTER_NAME, ROUTER_PATH } from "@/constants/routers";

const DashboardLayoutRouter = [
  {
    path: ROUTER_PATH.dashboard.home,
    name: ROUTER_NAME.dashboard.home,
    component: () =>
      import(/* webpackChunkName: "login" */ "@/pages/dashboard/home"),
    meta: {
      layout: "dashboard",
    },
  },
];

export default DashboardLayoutRouter;
