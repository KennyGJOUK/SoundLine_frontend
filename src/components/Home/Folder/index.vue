<template>
  <div class="recent_box">


    <TableBar bar_type="header"></TableBar>

    <template v-for="(item,index) in tableData" >
      <TableBar  dest="folder" :id="item[0]" bar_type="content" :bar_data="item"></TableBar>
    </template>

    <el-pagination
        style="position: absolute;top: calc(100% - 60px)"
        background
        :current-page="current_page"
        @current-change="page_change"
        layout="prev, pager, next"
        :total="1000">
    </el-pagination>

  </div>
</template>

<script>
import TableBar from "@/components/Home/TableBar";
export default {
  name: "Folder",
  components: {TableBar},
  data(){
    return{
      tableData:[{name:'Folder 1', tag:['Study', 'Work'], create_time:'2023/1/2 14:52', modify_time:'2023/1/2 14:52'},
        {name:'Folder 2', tag:['Study', 'Work'], create_time:'2023/1/2 14:52', modify_time:'2023/1/2 14:52'},
        {name:'Folder 3', tag:['Study', 'Work'], create_time:'2023/1/2 14:52', modify_time:'2023/1/2 14:52'}],
      username:null,
      current_page: 1,
    }
  },created() {
    this.username = localStorage.getItem('username')
    this.get_data()
  },
  methods:{
    get_data(){
      let that = this;
      this.$axios.get('/folder/display', {params:{username:this.username,
          current_page:this.current_page, number:10}})
          .then(function (resp) {
            console.log(resp.data)
            if (resp.data.msg === 1){
              that.tableData = resp.data.folder
            }
          })
    },
    page_change(val){
      this.current_page = val
      this.get_data()
    },
    jump_page() {
      console.log(23123)
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