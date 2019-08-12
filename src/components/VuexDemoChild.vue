// 模板
<template>
    <div id="vuex-demo-child">
        im vuex demo child 
        <!-- state -->
        <h6>================child state==================</h6>
        <div>
            {{countAlias}}---{{countPlusLocalState}}
        </div>
        <div>
            <!-- {{count}} -->
        </div>
        <h6>================child getters==================</h6>
        <div>
            {{countAdd1}}
        </div>
        <h6>================child actions==================</h6>
        <div>
            <button @click="increment1">add</button>
        </div>
    </div>
    
</template>

// 行为
<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

import { mapActions } from 'vuex'
export default {
    name:"vuex-demo-child",
  
    data(){
        return {
            localCount:1
        }
    },
    computed: {
        ...mapState({
            // 箭头函数可使代码更简练
            count: state => state.count,

            // 传字符串参数 'count' 等同于 `state => state.count`
            countAlias: 'count',

            // 为了能够使用 `this` 获取局部状态，必须使用常规函数
            countPlusLocalState (state) {
            return state.count + this.localCount
            }
        }),
        ...mapGetters(['countAdd1'])
    },
    methods:{
        ...mapActions(['increment']),
        increment1(){
            this.increment()
        }
    }
}

</script>

// 样式 scoped/本组建作用域
<style scoped>
    
</style>