import RouterName from "@/common/constant/RouterName";
import RouterPath from "@/common/constant/RouterPath";

const path = RouterPath.blankLayout
const name = RouterName.bankLayout

export default {
  path: path.root,
  name: name.root,
  component: () => import('@/layouts/Blank.vue'),
  redirect: path.intro,
  children: [
    {
      path: path.intro,
      name: name.intro,
      component: () => import('@/views/blank/intro.vue'),
    }
  ]
}