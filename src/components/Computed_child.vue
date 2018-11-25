<template>
<div>
    <input type="text" v-model="message">


   <button v-on:click="send_message2father">点点点</button>
   <!-- 接受父组件传递的插槽 slot -->
    <!-- <slot></slot> -->
   <slot name="span_lable"></slot>
   <slot name="p_lable"></slot>


</div>

</template>

<script>

export default{
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
    methods:{
        aa(){
            console.log(123)
        },
        send_message2father(){
            this.$emit("emit_message",this.message)
        }
    }
}
    

</script>

<style scoped>

</style>
