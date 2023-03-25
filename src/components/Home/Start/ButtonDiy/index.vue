<template>
  <el-row type="flex" align="middle" class="start-button" v-if="button_type !== 'note'">
    <el-col :span="6" :offset="1">
      <svg class="icon" aria-hidden="true" >

        <use xlink:href="#icon-24gf-folderPlus" v-if="button_type === 'folder'"></use>
        <use xlink:href="#icon-mobankuangjia" v-else></use>
      </svg>
    </el-col>
    <el-col :span="10"  :offset="2">{{button_name}}</el-col>

    <el-col :span="2"  :offset="1" v-if="button_type === 'note'">
      <svg class="icon_small" aria-hidden="true" >
        <use xlink:href="#icon-xuanzeqizhankai"></use>
      </svg>
    </el-col>
  </el-row>

  <el-popover
      placement="bottom-start"
      width="300"
      trigger="click" v-else>
    <div >
      <el-row style="cursor: pointer" type="flex" align="middle" @click.native="new_note">
        <el-col :span="6" :offset="1">
          <svg class="icon" aria-hidden="true" >
            <use xlink:href="#icon-wendang" ></use>
          </svg>
        </el-col>
        <el-col :span="10"  :offset="2">New Note</el-col>
      </el-row>
      <el-divider></el-divider>

      <el-row style="cursor: pointer" type="flex" align="middle" @click.native="upload_open">
        <el-col :span="6" :offset="1">
          <svg class="icon" aria-hidden="true" >


            <use xlink:href="#icon-mobankuangjia"></use>
          </svg>
        </el-col>
        <el-col :span="10"  :offset="2">Upload</el-col>
      </el-row>

    </div>

    <el-row type="flex" align="middle" class="start-button" slot="reference">
      <el-col :span="6" :offset="1">
        <svg class="icon" aria-hidden="true" >
          <use xlink:href="#icon-jia"></use>

        </svg>
      </el-col>
      <el-col :span="10"  :offset="2">{{button_name}}</el-col>

      <el-col :span="2"  :offset="1" v-if="button_type === 'note'">
        <svg class="icon_small" aria-hidden="true" >
          <use xlink:href="#icon-xuanzeqizhankai"></use>
        </svg>
      </el-col>
    </el-row>
  </el-popover>



</template>

<script>
export default {
  name: "ButtonDiy",
  props:['button_type', 'button_name'],
  data(){
    return{
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  created() {
    this.username = localStorage.getItem('username')
  },
  methods:{
    upload_open(){

      this.$emit('open')

    },
    new_note(){
      let that = this;
      this.$axios.post('/document/create', {username:this.username,
          content:'# hello world!'})
          .then(function (resp) {
            // console.log(resp.data)
            if (resp.data.msg === 1){
              that.$message('创建成功')
              that.$router.push(`recent_detail?id=${resp.data.id}`)
              // that.tableData = resp.data.docs
              // for (let i = 0;  i<that.tableData.length; i++){
              //   that.tableData[i][4] = ['Study', 'Work'];
              // }
              // console.log(that.tableData[0])
            }

          })
    },
  }
}
</script>

<style scoped>

</style>