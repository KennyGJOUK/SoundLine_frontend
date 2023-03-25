<template>
  <div class="recent_box">


    <TableBar bar_type="header"></TableBar>

    <template v-for="(item,index) in tableData" >
      <TableBar dest="recent" :id="item[0]" bar_type="content" :bar_data="item"></TableBar>
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
  name: "Recent",
  components: {TableBar},
  props:['tdata'],
  data(){
    return{
      // tableData:[{name:'Note', tag:['Study', 'Work'], create_time:'2023/1/2 14:52', modify_time:'2023/1/2 14:52'},
      //   {name:'Note', tag:['Study', 'Work'], create_time:'2023/1/2 14:52', modify_time:'2023/1/2 14:52'},
      //   {name:'Note', tag:['Study', 'Work'], create_time:'2023/1/2 14:52', modify_time:'2023/1/2 14:52'}],
      tableData:[],
      username:null,
      current_page: 1,
    }
  },
  created() {
    this.username = localStorage.getItem('username')
    if (!this.data)
    this.get_data()
  },
  methods:{
    get_data(){
      let that = this;
      this.$axios.get('/recent/display', {params:{username:this.username,
          current_page:this.current_page, number:10}})
          .then(function (resp) {
            // console.log(resp.data)
            if (resp.data.msg === 1){
              that.tableData = resp.data.recent
              // for (let i = 0;  i<that.tableData.length; i++){
              //   that.tableData[i][4] = ['Study', 'Work'];
              // }
              // console.log(that.tableData[0])
            }

          })
    },
    page_change(val){
      this.current_page = val
      this.get_data()
    },
    get_data_unfold(){
      let that = this;
      this.$axios.get('/document/unfold', {params:{username:this.username,
          folder_id:this.tdata}})
          .then(function (resp) {
            console.log(resp.data)
            console.log(231)
            if (resp.data.msg === 1){
              that.tableData = resp.data.docs
            }
          })
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