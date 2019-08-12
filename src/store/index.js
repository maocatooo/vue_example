import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({

    state: {
      count: 0
    },
    getters:{
      // 类似于计算属性
      countAdd1(state){
        return state.count + 10
      },
      countAdd(state, getters){
        return getters.countAdd1 + 10
      }
    },

    mutations: {
      increment (state) {
        state.count++
      },

      increment10 (state, n) {
        state.count += n
      },
    }
    ,
    actions:{
      increment({commit}){
        console.log('im actions')
        commit('increment')
      }
    }
  })
export default store