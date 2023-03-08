<template>
  <div class="recent_box">


    <TableBar bar_type="header"></TableBar>

    <template v-for="(item,index) in tableData">
      <TableBar bar_type="content" :bar_data="item"></TableBar>
    </template>

    <el-pagination
        style="position: absolute;top: calc(100% - 60px)"
        background
        layout="prev, pager, next"
        :total="1000">
    </el-pagination>

  </div>
</template>

<script>
import TableBar from "@/components/Home/TableBar";
export default {
  name: "Recent",
  components: {TableBar},
  data(){
    return{
      tableData:[{name:'Note', tag:['Study', 'Work'], create_time:'2023/1/2 14:52', modify_time:'2023/1/2 14:52'},
        {name:'Note', tag:['Study', 'Work'], create_time:'2023/1/2 14:52', modify_time:'2023/1/2 14:52'},
        {name:'Note', tag:['Study', 'Work'], create_time:'2023/1/2 14:52', modify_time:'2023/1/2 14:52'}]
    }
  }
}
</script>

<style scoped>
.recent_box{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

</style>