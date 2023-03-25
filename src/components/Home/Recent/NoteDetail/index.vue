<template>
  <div >
    <el-row type="flex" justify="space-between" align="middle"  class="note_card" style="margin-bottom: 20px">
      <el-col :span="8">
        <div style="font-size: 40px;font-weight: bold;color: #707070">{{note_info.name}}</div>
        <div style="display: flex;align-items: center">
          <span>{{note_info.modify_time}}</span>
          <svg class="icon_middle" aria-hidden="true" >
            <use xlink:href="#icon-baocun"></use>
          </svg>
        </div>
      </el-col>
      <el-col :span="6" style="display: flex;align-items: center;justify-content: end">


        <el-button style="font-size: 20px;font-weight: bold" type="success" v-if="isPreview" @click="edit">Edit</el-button>
        <el-button style="font-size: 20px;font-weight: bold" type="success" v-else @click="upload">Upload</el-button>

        <svg class="icon_middle" style="margin-left: 10px" aria-hidden="true" >
          <use xlink:href="#icon-gengduo2"></use>
        </svg>
      </el-col>
    </el-row>

    <div class="markdown-body" ref="md" style="height: calc(100vh - 200px);overflow-y: scroll" v-if="isPreview">
      <VueMarkdown :source="md_value"></VueMarkdown>
    </div>
    <div style="height: calc(100vh - 250px);" v-else>
      <mavon-editor  style="height: calc(100vh - 250px);" v-model="md_value"  />
    </div>


    <div style="position: absolute;bottom: 100px;right: 10px;">
      <div style="border-radius:50%;height:50px;width:50px;
    display: flex;align-items: center;justify-content: center;
    box-shadow: 0px 0px 2px #707070;
    " @click="totop">
        <svg class="icon_middle"  aria-hidden="true" >
          <use xlink:href="#icon-huidaodingbu"></use>
        </svg>
      </div>

      <div style="border-radius:50%;height:50px;width:50px;margin-top: 10px;
    display: flex;align-items: center;justify-content: center;
    box-shadow: 0px 0px 2px #707070;
    " @click="feedback">
        <svg class="icon_middle"  aria-hidden="true" >
          <use xlink:href="#icon-wenhao"></use>
        </svg>
      </div>

      <div style="border-radius:50%;height:50px;width:50px;margin-top: 10px;
    display: flex;align-items: center;justify-content: center;
    box-shadow: 0px 0px 2px #707070;
    " @click="open_drawer">
        <svg class="icon_middle"  aria-hidden="true" >
          <use xlink:href="#icon-kaishi1"></use>
        </svg>
      </div>

    </div>

    <NoteChat :drawer="drawer" :doc_id="this.$route.query.id" @close="close_drawer"></NoteChat>

  </div>
</template>

<script>
import 'github-markdown-css/github-markdown-light.css'
import  VueMarkdown from 'vue-markdown'

//markdown editor
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import NoteChat from "@/components/Home/Recent/NoteDetail/NoteChat";

export default {
  name: "NoteDetail",
  components:{NoteChat, VueMarkdown, mavonEditor},

  data(){
    return{
      note_info:{
        name:'Test',
        modify_time:'2023/1/3 23:12'
      },
      isPreview:true,
      md_value:"",
      drawer:false,
    }
  },
  created() {
    this.username = localStorage.getItem('username')
    if (this.$route.query.type === 'audio'){
      this.get_data_summ()
    }else {
      this.get_data()
    }
  },

  methods:{
    get_data(){
      let that = this;
      this.$axios.get('/document/display', {params:{username:this.username,
          file_id:this.$route.query.id}})
          .then(function (resp) {
            console.log(resp.data)
            if (resp.data.msg === 1){
              that.md_value = resp.data.recent[3]
              that.note_info.modify_time = resp.data.recent[4]
              that.note_info.name = 'Note'+that.$route.query.id
              console.log(that.md_value)
            }

          })
    },
    get_data_summ(){
      let that = this;
      this.$axios.get('/document/display', {params:{username:this.username,
          file_id:this.$route.query.id}})
          .then(function (resp) {
            console.log(resp.data)
            if (resp.data.msg === 1){
              that.md_value = resp.data.recent[3] + resp.data.summary
              that.note_info.modify_time = resp.data.recent[4]
              that.note_info.name = 'Note'+that.$route.query.id
              console.log(that.md_value)
            }

          })
    },
    edit(){
      this.isPreview = false
      // this.md_value += this.md_value
    },
    upload(){
      let that = this;
      this.$axios.put('/document/revise', {username:this.username,
          file_id:this.$route.query.id, content:this.md_value})
          .then(function (resp) {
            console.log(resp.data)
            if (resp.data.msg === 1){
              // that.tableData = resp.data.docs
              that.isPreview = true;
              that.$message("修改成功!")
            }
          })


    },
    totop(){
      console.log(this.$refs)
      this.$refs.md.scrollTop = 0
    },
    feedback(){},
    open_drawer(){
      console.log(this.drawer)
      this.drawer = true
    },close_drawer(){
      this.drawer = false
    }
  }
}
</script>

<style scoped>
.note_card{
  background-color: rgba(50,125,191,0.1);
  color: rgba(112,112,112,0.5);
  border-radius: 20px;
  font-size: 25px;
  font-weight: bold;
  padding: 20px;
  /*height: 300px;*/
}

.markdown-body::-webkit-scrollbar { width: 0 !important }


@media screen and (prefers-reduced-motion: no-preference) {
  .markdown-body {
    scroll-behavior: smooth;
  }
}
</style>