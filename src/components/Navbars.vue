<template>
  <div class="">
    <template v-for="navMenu in navMenus">
      <!-- 最后一级菜单 -->
      <el-menu-item :index=getIindex(navMenu) v-if="navMenu.childItems.length===0">{{navMenu.name}}</el-menu-item>
      <el-submenu :index=getIindex(navMenu) v-if="navMenu.childItems.length!==0" >
        <template slot="title">{{navMenu.name}}</template>
        <Navbars :navMenus="navMenu.childItems"></Navbars>
      </el-submenu>
    </template>

  </div>
</template>

<script>
  export default {
    name: 'Navbars',
    props: ['navMenus'],
    data() {
      return {}
    },
    methods: {
      getIindex(n){
        return `/${n.route}`

      }
    }
  }
</script>

<style>
</style>
