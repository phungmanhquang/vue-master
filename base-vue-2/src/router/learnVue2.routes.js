import { ROUTER_NAME, ROUTER_PATH } from "@/constants/routers";

const LearnVue2Routes = [
  {
    path: ROUTER_PATH.learnVue2.dynamicComponent,
    name: ROUTER_NAME.learnVue.dynamicComponent,
    component: () =>
      import(
        /* webpackChunkName: "login" */ "@/pages/learn-vue-2/dynamicComponent"
      ),
  },
];

export default LearnVue2Routes;
