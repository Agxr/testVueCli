<template>
  <div id="app">
    <!-- <div class="link-box">
      <router-link class="link-home" to="/">主页</router-link>
      <router-link class="link-talk" to="/talk">享说</router-link>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}
a {
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.link-box {
  height: 1.173333rem;
  background-color: #ff5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
