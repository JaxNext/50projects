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
    path: '/searchInput',
    name: 'SearchInput',
    component: () => import('@/pages/searchInput/index.vue'),
  },
  {
    path: '/blurLoad',
    name: 'BlurLoad',
    component: () => import('@/pages/blurLoad/index.vue'),
  },
  {
    path: '/scrollAnima',
    name: 'ScrollAnima',
    component: () => import('@/pages/scrollAnima/index.vue'),
  },
  {
    path: '/splitPage',
    name: 'SplitPage',
    component: () => import('@/pages/splitPage/index.vue'),
  },
]
export default routes