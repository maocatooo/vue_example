
<template>
  <div id="bash">
  {{mas}}
  <heads></heads>
  <users v-bind:mas="mas" :users="users"></users>
  <footers></footers>
  </div>
</template>

<script>
// 局部注册组件
import User from './User'
import Head from './Head'
import Footer from './Footer'
//  import User from "./User"

export default {
  name: 'bash',
  data(){
    return {
      mas:"12321131",
      users:[
                {name:"123",age:1,show:true},
                {name:"123",age:1,show:true},
                {name:"123",age:1,show:true}
                ]
    }
  },
  components:{
     "users":User,
     "heads":Head ,
     "footers":Footer 
    }

}
</script>

<style>

</style>
