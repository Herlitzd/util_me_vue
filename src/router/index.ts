import Vue from 'vue'
import Router, { NavigationGuard } from 'vue-router'
import Main from '@/components/Main.vue'
import Login from '@/components/Login.vue'

Vue.use(Router)

export const getRouter = (authenticate: NavigationGuard) => new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Main', component: Main, beforeEnter: authenticate },
    { path: '/Login', name: 'Login', component: Login, }
  ]
})

// export default new Router({
//   mode: 'history',
//   routes: [
//     { path: '/', name: 'Main', component: Main, beforeEnter: auth },
//     { path: '/Login', name: 'Login', component: Login, }
//   ]
// })
