import RouterPath from "../common/constant/RouterPath";
import RouterName from "../common/constant/RouterName";

const path = RouterPath.dashboardLayout
const name = RouterName.dashboardLayout

export default {
  path: path.root,
  name: name.root,
  component: () => import('../layouts/Dashboard.vue'),
  redirect: path.props,
  children: [
    {
      path: path.props,
      name: name.props,
      component: () => import('../views/dashboard/Props.vue'),
    },
    {
      path: path.event,
      name: name.event,
      component: () => import('../views/dashboard/Props.vue'),
    },
    {
      path: path.componentVModel,
      name: name.componentVModel,
      component: () => import('../views/dashboard/Props.vue'),
    },
  ]
}