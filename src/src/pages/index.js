import { createWebHistory, createRouter } from "vue-router"
import pageNotFound from './pagenotfound/pagenotfound.vue'
// import portfolio from '../components/portfolio-v3.vue'
// import contact from '../components/contact.vue'
// import polaroids from '../components/polaroids.vue'
// import edit from '../components/edit-v4.vue'
import home from "./home/index.vue"
import grid from "./grid/index.vue"


/* Define routes and rendering in order of priority */
const routes = [
  {  
    path: '/',
    name: 'home',
    component: home
  },
  {  
    path: '/grid',
    name: 'grid',
    component: grid
  },
  // {  
  //   path: '/polaroids',
  //   name: 'polaroids',
  //   component: polaroids
  // },
  // {  
  //   path: '/contact',
  //   name: 'contact',
  //   component: contact
  // },
  // { 
  //   path: '/edit',
  //   name: 'edit',
  //   component: edit
  // },
  { 
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: pageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

/* Hacky way to add titles from the matched component properties */
router.beforeEach((to, from, next) => {
  if (to.matched.at(-1)){
    const title = to.matched.at(-1).components.default.title
    document.title = title ? title : ""
  }
  next()
})

export default router;
