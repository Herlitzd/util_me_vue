// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import { getRouter } from './router'
import { NavigationGuard } from 'vue-router'
import store from "./store";
import { DependencyInjectionAttribute } from "vue-di-attributes";
import 'bootstrap'

Vue.use(DependencyInjectionAttribute);

Vue.config.productionTip = false

const _store = store;
const auth: NavigationGuard = (to, from, next) => {
  if (!_store.state.user.auth) {
    _store.dispatch('tryAuth')
      .then(next)
      .catch(() => next({ path: '/Login' }))
  } else {
    next()
  }
}

let router = getRouter(auth);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
