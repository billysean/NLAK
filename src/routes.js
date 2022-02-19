import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import SelGroup from './views/selgroup.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/about', component: About, meta: { title: 'About' } },
  { path: '/selgroup',component: SelGroup, meta:{title:'Sel Group'}},
  { path: '/:path(.*)', component: NotFound },
]
