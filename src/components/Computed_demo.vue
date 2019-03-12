<template>
<div>
    <input v-model="message" type="text">
    {{message}}
    {{newmessage}}
    <!-- @emit_message="aa"绑定 emit_message 事件到aa，接受子组件传递的值 -->
    <cc @emit_message="aa">
        <!-- 组件插槽 向子组件传递内容 -->
        <!-- <p>123</p> -->
        <p slot="p_lable"> 123我是插槽123</p>
        <span slot="span_lable"> 312我是插槽321</span>
    </cc>
    {{bb()}}
</div>
</template>

<script>
import Cc from "./Computed_child.vue"
export default{
    components:{
        cc:Cc
    },
    data(){
        return{
            message:"123"
    }
    },
    computed:{
        newmessage:function(){
            return this.message+"123"
    }
    },
    watch:{
        // 监听data 里的某个变量
        message:function(data){
            // arguments function 不确定有多少个参数时 ，打印出来
            console.log(arguments)
            this.aa()
        }
    },
    methods:{
        aa(d){
            // 接受子组件传递的值D
            console.log("im father zujian")
            console.log(d)
        },
        bb(){
            console.log(`我是动态路由：${this.$route.params.ccc}`)
        }

    }
}
    

</script>

<style scoped>

</style>
