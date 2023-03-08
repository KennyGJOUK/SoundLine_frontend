<template>
  <el-row class="diy_bar_header" v-if="bar_type === 'header'">
    <el-col :span="4">Name</el-col>
    <el-col :span="10">Tag</el-col>
    <el-col :span="5">Modify Time</el-col>
    <el-col :span="5">Create Time</el-col>
  </el-row>
  <el-row class="diy_bar_content" type="flex" align="middle" v-else>
    <el-col :span="4">{{bar_data.name}}</el-col>
    <el-col :span="10">
      <template v-for="(item,index) in bar_data.tag">
        <el-tag style="margin-right: 5px">{{ item }}</el-tag>
      </template>

    </el-col>
    <el-col :span="5">{{bar_data.modify_time}}</el-col>
    <el-col :span="5">{{bar_data.create_time}}</el-col>
  </el-row>
</template>

<script>
export default {
  name: "TableBar",
  props:['bar_type', 'bar_data']
}
</script>

<style scoped>
@import "../../../../src/assets/style/bar_diy.css";
</style>