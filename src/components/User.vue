// 模板
<template>
    <div class="user">
    1aaa{{mas}} 
        <ul>
            <li v-for="user in users">
            
                <p @click="user.show=!user.show">{{user.name}}</p>
                <p v-show="user.show">{{user.age}}</p>
            </li>
        </ul>
    </div>
    
</template>

// 行为
<script>
export default {
    name:"user",
    props:["mas"],
    data(){
        return {
            users:[
                {name:"123",age:1,show:true},
                {name:"123",age:1,show:true},
                {name:"123",age:1,show:true}
                ]
            }
    }
}

</script>

// 样式 scoped/本组建作用域
<style scoped>
    
</style>