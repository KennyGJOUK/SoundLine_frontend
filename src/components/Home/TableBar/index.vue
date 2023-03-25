<template>
  <el-row class="diy_bar_header" v-if="bar_type === 'header'">
    <el-col :span="4">Name</el-col>
    <el-col :span="10">Tag</el-col>
    <el-col :span="5">Modify Time</el-col>
    <el-col :span="5">Create Time</el-col>
  </el-row>
  <el-row class="diy_bar_content" type="flex" align="middle" @click.native="jump_page" v-else>
    <el-col :span="4">{{(dest==='recent'?"Note":"Folder") + bar_data[0]}}</el-col>
    <el-col :span="10">
      <template v-for="(item,index) in tags">
        <el-tag style="margin-right: 5px">{{ item }}</el-tag>
      </template>

    </el-col>
    <el-col :span="5">{{dest==='recent'?bar_data[4]:bar_data[3]}}</el-col>
    <el-col :span="5">{{dest==='recent'?bar_data[4]:bar_data[3]}}</el-col>
  </el-row>
</template>

<script>
export default {
  name: "TableBar",
  props:['bar_type', 'bar_data','dest','id'],
  data(){
    return{
      tags:['Study', 'Work']
    }
  },
  created() {
    // console.log(this.bar_data)
  },
  methods:{
    jump_page(){
      console.log(232)
      this.$router.push(`${this.dest}_detail?id=${this.id}`)
    }
  }
}
</script>

<style scoped>
@import "../../../../src/assets/style/bar_diy.css";
</style>