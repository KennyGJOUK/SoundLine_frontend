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
  width: 45px; height: 45px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color: rgb(112,112,112);
  cursor: pointer;
}

.icon_small {
  width: 18px; height: 18px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color: rgb(112,112,112);
  cursor: pointer;
}

.icon_middle {
  width: 35px; height: 35px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color: rgb(112,112,112);
  cursor: pointer;
}
</style>
