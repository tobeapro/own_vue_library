<template>
  <div id="app">
    <aside class="left-nav">
      <router-link to="/">首页</router-link>
      <router-link to="/button">Button</router-link>
      <router-link to="/message">Message</router-link>
      <router-link to="/dialog">Dialog</router-link>
      <router-link to="/http">Http</router-link>
    </aside> 
    <main class="main-body">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
.left-nav{
  float:left;
  padding:30px 0;
  width:120px;
  height:100vh;
  overflow: auto;
  color:#fff;
  background:#3a3e43;
  a{
    display:block;
    padding:6px 10px;
    line-height:30px;
    color:#fff;
    text-decoration: none;
    &.router-link-exact-active{
      color:#26baee;
      background: #fff;
    }
  }
}
.main-body{
  margin-left:120px;
  padding:20px;
  height:100vh;
}
</style>