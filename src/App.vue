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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  height: 100%;
  width: 100%;
}

.icon {
  width: 45px; height: 50px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color: rgb(112,112,112);
}
</style>
