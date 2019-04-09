import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Input from "./Input"
import Currency from "./Currency"

Vue.use(VueRouter)
  const routes = [
    { path: '/', component: Input },
    { path: '/currency', component: Currency}
  ]

  const router = new VueRouter({
    routes,
    mode: 'history'
  })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
