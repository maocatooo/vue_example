// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from  "vue-router"
import VueResource from "vue-resource"
import App from './App'
import HelloWorld from "./components/HelloWorld"
import Base from "./components/Base"
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
// 注册全局组件
// Vue.component("users", User)

let router = new VueRouter({
  routes:[
    {path : "/" , component:Base},
    {path : "/hellow" , component:HelloWorld},

  ],
  mode:"history"
})


/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
 
  template: '<App/>'
})
