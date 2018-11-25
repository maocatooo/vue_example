// 模板
<template>
    <div class="userss">
        <ul >
            <li v-for="user in users" :key="m">
                <p @click="user.show=!user.show">{{user.name}}</p>
                <p v-show="user.show">{{user.age}}</p>
            </li>
        </ul>
    </div>
    
</template>

// 行为
<script>
export default {
    name:"userss",
    props:{
        users:Array
    },
    data(){
        return {
            m:1
            }
    }
}

</script>

// 样式 scoped/本组建作用域
<style scoped>
    
</style>