<template>
  
  
  <div class="hello">
  {{msg}}
  </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: []
    }
  },
  created() {
    this.$http.get("http://jsonplaceholder.typicode.com/users").then((data)=>{
      console.log(data)
      this.msg=data.body
    })  
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
