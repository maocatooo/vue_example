// 模板
<template>
    <div id="vuex-demo">
        <h6>================state==================</h6>
        <div>
            {{count}} --- {{count2}}
        </div>
        <h6>================getter==================</h6>
        <div>
            {{gettter}}  ---- {{gettter1}}
        </div>
        <h6>================mutations==================</h6>
        <div>
            <button @click="countAdd">add</button>
            <button @click="countAdd10(10)">add10</button>
            
        </div>
        <VuexDemoChild></VuexDemoChild>
    </div>
    
</template>

// 行为
<script>
import VuexDemoChild from './VuexDemoChild'
import store from '../store/index'
import { mapState } from 'vuex'
export default {
    name:"vuex-demo",
    components:{
        VuexDemoChild
    },
    data(){
        return {
            
        }
    },
    computed: {
        count(){
            // console.log(mapState({count: state => state.count}))
            return store.state.count
        },
        count2(){
            return this.$store.state.count
        },
        gettter(){
            return store.getters.countAdd
        },
        gettter1(){
            return this.$store.getters.countAdd1
        }
    },
    methods:{

        countAdd(){
            return store.commit('increment')
        },
        countAdd10(n){
            return store.commit('increment10', 10)
        }

    }
}

</script>

// 样式 scoped/本组建作用域
<style scoped>
    
</style>