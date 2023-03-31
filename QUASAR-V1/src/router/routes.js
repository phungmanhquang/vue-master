
const routes = [
  {
    path: '/',
    name: "home",
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Index.vue') },
      {
        path: '/carousel',
        name: 'carousel',
        component: () => import('pages/Carousel.vue')
      },
      {
        path: '/render-conversation',
        name: 'render-conversation',
        component: () => import('pages/RenderConversations.vue')
      },
      {
        path: '/bottom-sheet',
        name: 'bottom-sheet',
        component: () => import('pages/testing/BottomSheet.vue')
      },
      {
        path: '/table-dynamic',
        name: 'table-dynamic',
        component: () => import('pages/testing/TableDynamic.vue')
      },
      {
        path: '/scroll-page',
        name: 'scroll-page',
        component: () => import('pages/testing/PageScroll.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/Login.vue')
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
