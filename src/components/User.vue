// 模板
<template>
    <div class="user">
        <ul>
            <li v-for="user in users">
                {{user}}
            </li>
        </ul>
    </div>
    
</template>

// 行为
<script>
export default {
    name:"user",
    data(){
        return {
            users:["123","111","132"]
            }
    }
}

</script>

// 样式 scoped/本组建作用域
<style scoped>
    
</style>