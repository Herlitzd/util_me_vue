import Vue from 'vue'
import Router, { NavigationGuard } from 'vue-router'
import Main from '@/components/Main.vue'
import Login from '@/components/Login.vue'

Vue.use(Router)

const auth : NavigationGuard = (to, from, next) => {
  debugger;
  if(document.cookie){
    next();
  }else{
    next({path:'/Login'})
  }
}

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Main', component: Main, beforeEnter: auth },
    { path: '/Login', name: 'Login', component: Login, }
  ]
})
