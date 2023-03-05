<template>
  <div>
    <el-container>
      <el-aside width="440px"  style="display: flex;align-items: center;justify-content: center;height: 100%">
        <Aside></Aside>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>

</template>

<script>
import Aside from "@/components/Home/Aside";
export default {
  name: "Home",
  components: {Aside}
}
</script>

<style scoped>

</style>