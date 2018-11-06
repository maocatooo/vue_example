
<template>
  <div id="app">
  {{mas}}
  <users></users>
  </div>
</template>

<script>
// 局部注册组件
import User from './components/User'
//  import User from "./components/User"

export default {
  name: 'app',
  data(){
    return {
      mas:"12321131"
    }
  },
  comments:{
     "users":User 
    }

}
</script>

<style>

</style>
