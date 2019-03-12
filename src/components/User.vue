// 模板
<template>
    <div class="users">
        <ul >
            <li v-for="(user,index) in users" :key="index">
                <p @click="user.show=!user.show">{{user.name}}---{{index}}</p>
                <p v-show="user.show">{{user.age}}{{ message }}1</p>
                
            </li>
        </ul>
    </div>
    
</template>

// 行为
<script>
export default {
    name:"users",
    props:{
        users:Array
    },
    data(){
        return {
            message:"啊啊啊"
        }
    }
}

</script>

// 样式 scoped/本组建作用域
<style scoped>
    
</style>