
<template>
  <div id="app">
  <ul>
    <li><router-link to="/">/</router-link></li>
    <li><router-link to="/hellow">hellow</router-link></li>
        <li><router-link to="/c">c</router-link></li>

  </ul>
  <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>

</style>
