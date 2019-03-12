<template>
  
  
  <div class="hello">
  {{msg}}
  <input v-model="myVlaue" type="text">
  <template v-if="myVlaue=='13'">{{myVlaue}}</template>
  <template v-else-if="myVlaue=='14'">{{myVlaue}}</template>
    <input v-model="myVlaues_box" type="checkbox" value="1">
  <input v-model="myVlaues_box" type="checkbox" value="2">
  <input v-model="myVlaues_box" type="checkbox" value="3">
  {{myVlaues_box}}
  <input v-model="myVlaues_radio" type="radio" value="211">
  <input v-model="myVlaues_radio" type="radio" value="22">
  <input v-model="myVlaues_radio" type="radio" value="23">
  {{myVlaues_radio}}
  <select v-model="optionValue">
  <option v-for="(optionValue, index) in optionValues" :key="index" :value="optionValue.value">{{optionValue.text}}</option>
  </select>
  {{optionValue}}
  </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      optionValue:null,
      optionValues:[
        {text:"222",
        value:2212}
      ,
      {text:"333",
        value:3323}],
      msg: [],
      myVlaue:"",
      myVlaues:[],
      myVlaues_radio:null,
      myVlaues_box:[]
    }
  },
  created() {
    // this.$http.get("http://jsonplaceholder.typicode.com/users").then((data)=>{
    //   // console.log(data)
    //   this.msg=data.body
    // })
    const myFirstPromise = new Promise((resolve, reject) => {
      this.$http.get("http://jsonplaceholder.typicod123e.com/users").then((data)=>{
      // console.log(data)
      this.msg=data.body
    })
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
