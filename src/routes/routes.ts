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
  {
    path: '/rotateNavi',
    name: 'RotateNavi',
    component: () => import('@/pages/rotateNavi/index.vue'),
  },
  {
    path: '/scrollAnima',
    name: 'ScrollAnima',
    component: () => import('@/pages/scrollAnima/index.vue'),
  },
  {
    path: '/searchInput',
    name: 'SearchInput',
    component: () => import('@/pages/searchInput/index.vue'),
  },
]
export default routes