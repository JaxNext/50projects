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
  {
    path: '/formWave',
    name: 'FormWave',
    component: () => import('@/pages/formWave/index.vue'),
  },
  {
    path: '/keyCode',
    name: 'KeyCode',
    component: () => import('@/pages/keyCode/index.vue'),
  },
  {
    path: '/randomPicker',
    name: 'RandomPicker',
    component: () => import('@/pages/randomPicker/index.vue'),
  },
  {
    path: '/increasingNum',
    name: 'IncreasingNum',
    component: () => import('@/pages/increasingNum/index.vue'),
  },
  {
    path: '/rippleBtn',
    name: 'RippleBtn',
    component: () => import('@/pages/rippleBtn/index.vue'),
  },
  {
    path: '/dragNDrop',
    name: 'DragNDrop',
    component: () => import('@/pages/dragNDrop/index.vue'),
  },
  {
    path: '/spinTriangle',
    name: 'SpinTriangle',
    component: () => import('@/pages/spinTriangle/index.vue'),
  },
  {
    path: '/drawingBoard',
    name: 'DrawingBoard',
    component: () => import('@/pages/drawingBoard/index.vue'),
  },
  {
    path: '/notification',
    name: 'Notification',
    component: () => import('@/pages/notification/index.vue'),
  },
  {
    path: '/doubleClick',
    name: 'DoubleClick',
    component: () => import('@/pages/doubleClick/index.vue'),
  },
]
export default routes