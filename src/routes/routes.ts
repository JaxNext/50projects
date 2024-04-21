const routes = [
  {
    path: '/expandCard',
    name: 'ExpandCard',
    component: () => import('@/pages/expandCard/index.vue'),
  },
  {
    path: '/progress',
    name: 'Progress',
    component: () => import('@/pages/progress/index.vue'),
  },
]
export default routes