// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from  "vue-router"
import VueResource from "vue-resource"
import App from './App'
import Computed_demo from "./components/Computed_demo"
import HelloWorld from "./components/HelloWorld"
import Base from "./components/Base"
import Vuex from 'vuex'
import store from './store/user'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

// 注册全局组件
// Vue.component("users", User)

let router = new VueRouter({
  routes:[
    {path : "/" ,name:'base', component:Base},
    {path : "/hellow" , component:HelloWorld},
    {path : "/c" , component:Computed_demo},
    {path : "/:ccc" , component:Computed_demo},
  ],
  mode:"history"
})


/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  
  template: '<App/>',
  store
})
