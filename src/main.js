import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Input from "./Input"
import Currency from "./Currency"
import store from "./store"
import Change from "./Change";

Vue.use(VueRouter)
  const routes = [
    { path: '/', component: Input },
    { path: '/currency', component: Currency},
    { path: '/change', component: Change}
  ]

  const router = new VueRouter({
    routes,
    mode: 'history'
  })

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
