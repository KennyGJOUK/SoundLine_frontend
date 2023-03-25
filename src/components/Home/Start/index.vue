<template>
  <div class="start-box">
   <div class="start-title">Start</div>
    <div>
      <el-row type="flex" align="middle" justify="space-between" class="btn_group" style="">
        <el-col :span="7" >
          <ButtonDiy @open="upload_open" :button_name="'New Note'" :button_type="'note'"></ButtonDiy>
        </el-col>

        <el-col :span="7" >
          <ButtonDiy :button_name="'New Folder'" :button_type="'folder'"></ButtonDiy>
        </el-col>

        <el-col :span="7" >
          <ButtonDiy :button_name="'Templates'" :button_type="'template'"></ButtonDiy>
        </el-col>

      </el-row>

      <div class="start-tabs">
        <span class="tab" @click="click_tab('note')" :class="'note'===current_tab?'active_tab':''">Notes</span>
        <span class="tab" @click="click_tab('task')"  :class="'task'===current_tab?'active_tab':''" style="margin-left: 20px">Tasks</span>
      </div>

      <div class="start-select">
        <el-select v-model="value" placeholder="Type">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>

        <el-select v-model="value" placeholder="Creator" style="margin-left: 20px">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </div>

      <div>
        <div v-for="(item, index) in tableData" >
          <el-row type="flex" align = 'middle' @click.native="jump_page(item[0])" justify = 'space-between' style="cursor: pointer">
            <el-col :span="2">
              <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-wendang"></use>
              </svg>
            </el-col>
            <el-col :span="4">
              {{'Note'+item[0]}}
            </el-col>
            <el-col :span="4">
              {{'Folder'+ item[1]}}
            </el-col>
            <el-col :span="8">
              {{item[4]}}
            </el-col>

          </el-row>
          <el-divider></el-divider>
        </div>
      </div>


    </div>
    <DialogDiy :dialogVisible = "upload_visible" @close="upload_close"></DialogDiy>
  </div>
</template>

<script>
import ButtonDiy from "@/components/Home/Start/ButtonDiy";
import DialogDiy from "@/components/Home/Start/DialogDiy";
export default {
  name: "Start",
  components: {DialogDiy, ButtonDiy},
  data(){
    return{
      options: [],
      value: '',
      tableData:[

      ],

      current_tab:'note',
      upload_visible:false,
      username:null,
    }
  },
  created() {
    this.username = localStorage.getItem('username')
    this.init_note()
  },
  methods:{
    init_note(){
      let that = this;
      this.$axios.get('/recent/display', {params:{username:this.username,
        current_page:1, number:10}})
      .then(function (resp) {
        console.log(resp.data)
        if (resp.data.msg === 1){
          that.tableData = resp.data.recent
        }
      })
    },
    click_tab(v){
      this.current_tab = v
    },
    upload_open(){
      this.upload_visible = true;
    },
    upload_close(){
      this.upload_visible = false;
    },
    jump_page(val){
      console.log(23123)
      this.$router.push(`recent_detail?id=${val}`)
    }
  }
}
</script>

<style scoped>
@import "../../../../src/assets/style/start.css";
</style>