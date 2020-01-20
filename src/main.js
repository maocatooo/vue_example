// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from  "vue-router"
import VueResource from "vue-resource"
import App from './App'
import Computed_demo from "./components/Computed_demo"
import Animation from "./components/Animation"
import HelloWorld from "./components/HelloWorld"
import VuexDemo from "./components/VuexDemo"
import Question from "./components/Question"
import Base from "./components/Base"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI);
// 注册全局组件
// Vue.component("users", User)

let router = new VueRouter({
  routes:[
    {path : "/" ,name:'base', component:Base},
    {path : "/hellow" , component:HelloWorld},
    {path : "/c" , component:Computed_demo},
    {path : "/vuex" , component:VuexDemo},
    {path : "/question" , component:Question},
    {path : "/a" , component:Animation},
    //:ccc 这种一定要写在路由的最后面
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
  // store 注入到所有的组件中
  store
})
