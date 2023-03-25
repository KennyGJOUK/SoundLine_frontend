<template>
  <div>
    <el-row type="flex" justify="space-between">
      <el-col :span="15" class="folder_card">
        <el-row  type="flex" align="middle">
          <el-col :span="3">
            <svg class="icon_middle_big" aria-hidden="true" >
              <use xlink:href="#icon-wenjianjia1"></use>
            </svg>
          </el-col>
          <el-col :span="8">{{folder_info.name}}</el-col>
        </el-row>
        <el-row type="flex" align="middle">
          <el-col :span="3">
            <svg class="icon_middle_big" aria-hidden="true" >
              <use xlink:href="#icon-biaoqian"></use>
            </svg>
          </el-col>
          <el-col :span="8">
            <template v-for="(item,index) in folder_info.tag">
              <el-tag type="success" style="margin-right: 5px">{{ item }}</el-tag>
            </template>
          </el-col>
        </el-row>
        <el-row type="flex" align="middle">
          <el-col :span="3">
            <svg class="icon_middle_big" aria-hidden="true" >
              <use xlink:href="#icon-shijian"></use>
            </svg>
          </el-col>
          <el-col :span="8">{{folder_info.create_time}}</el-col>
        </el-row>
      </el-col>

      <el-col :span="8" class="folder_card">
        <div style="font-size: 60px">Operation</div>
        <el-row type="flex" align="middle">
          <el-col :span="3">
            <svg class="icon_middle_middle" aria-hidden="true" >
              <use xlink:href="#icon-shanchu"></use>
            </svg>
          </el-col>
          <el-col :span="8">Delete folder</el-col>
        </el-row>

        <el-row type="flex" align="middle">
          <el-col :span="3">
            <svg class="icon_middle_middle" aria-hidden="true" >
              <use xlink:href="#icon-shoucang"></use>
            </svg>
          </el-col>
          <el-col :span="8">Star folder</el-col>
        </el-row>

        <el-row type="flex" align="middle">
          <el-col :span="3">
            <svg class="icon_middle_middle" aria-hidden="true" >
              <use xlink:href="#icon-fanhui1"></use>
            </svg>
          </el-col>
          <el-col :span="8">Back to folder</el-col>
        </el-row>

      </el-col>
    </el-row>

    <Recent ref="recent" :tdata="this.$route.query.id" style="margin-top: 20px"></Recent>
  </div>
</template>

<script>
import Folder from "@/components/Home/Folder";
import Recent from "@/components/Home/Recent";
export default {
  name: "FolderDetail",
  components: {Recent, Folder},
  data(){
    return{
      folder_info:{
        name:'Folder 1',
        tag:['Study', 'Work'],
        create_time:'2023/1/2 23:12'
      },
      username:null,
      tableData:[],
    }
  },
  created() {
    this.username = localStorage.getItem('username')
    console.log(this.$route.query.id)
    let that = this;
    this.$nextTick(()=>{
      that.get_data()
    })
    // this.get_data()
  },

  methods:{
    get_data(){
      console.log(this.$refs)
      this.$refs['recent'].get_data_unfold()
    }
  }
}
</script>

<style scoped>
.folder_card{
  background-color: rgba(50,125,191,0.1);
  color: rgba(112,112,112,0.5);
  border-radius: 20px;
  font-size: 25px;
  font-weight: bold;
  padding: 20px;
  height: 300px;
}

.folder_info{
  padding: 10px;
}
</style>