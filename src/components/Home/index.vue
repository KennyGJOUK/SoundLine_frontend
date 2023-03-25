<template>
  <div style="height: 100%">
    <el-container style="height: 100%">
      <el-aside width="440px"  style="display: flex;align-items: center;justify-content: center;height: auto;padding:0 40px">
        <Aside></Aside>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>

</template>

<script>
import Aside from "@/components/Home/Aside";
import Main from "@/components/Home/Main";
export default {
  name: "Home",
  components: {Main, Aside},
  created() {
    let username = localStorage.getItem('username')
    if (username === null || username === undefined) {
      this.$message('请先登录')
      this.$router.push('login')
    }
  }
}
</script>

<style scoped>

</style>