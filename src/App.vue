<template>
  <div id="app">



        <router-view></router-view>



  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
@import "assets/style/icon_diy.css";
body{
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  height: 100%;
  width: 100%;
}

/*::-webkit-scrollbar { display: none }*/
</style>
