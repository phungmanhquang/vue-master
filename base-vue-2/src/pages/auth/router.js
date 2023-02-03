import { ROUTER_NAME, ROUTER_PATH } from "@/constants/routers";

const AuthLayoutRouter = [
  {
    path: ROUTER_PATH.auth.login,
    name: ROUTER_NAME.auth.login,
    component: () =>
      import(/* webpackChunkName: "login" */ "@/pages/auth/login"),
    meta: {
      layout: "auth",
    },
  },
];

export default AuthLayoutRouter;
