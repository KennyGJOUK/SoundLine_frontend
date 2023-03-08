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
    " @click="feedback">
        <svg class="icon_middle"  aria-hidden="true" >
          <use xlink:href="#icon-kaishi1"></use>
        </svg>
      </div>

    </div>



  </div>
</template>

<script>
import 'github-markdown-css/github-markdown-light.css'
import  VueMarkdown from 'vue-markdown'

//markdown editor
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
  name: "NoteDetail",
  components:{VueMarkdown, mavonEditor},
  data(){
    return{
      note_info:{
        name:'Test',
        modify_time:'2023/1/3 23:12'
      },
      isPreview:true,
      md_value:"# EM_GMM\n" +
          "\n" +
          "工程算法——EM算法实验作业要求\n" +
          "\n" +
          "代码仓库： https://github.com/nchen909/EM_GMM\n" +
          "\n" +
          "## 问题背景\n" +
          "\n" +
          "当公司推出新产品时，他们通常想找出目标客户。如果他们有关于客户购" +
          "买历史和购物偏好的数据，他们可以利用这些数据来预测哪些类型的客户更有可能" +
          "购买新产品。高斯混合模型（GMM）模型便可以解决这个典型的无监督学习问题。"
    }
  },

  methods:{
    edit(){
      this.isPreview = false
      this.md_value += this.md_value
    },
    upload(){
      this.isPreview = true;
    },
    totop(){
      console.log(this.$refs)
      this.$refs.md.scrollTop = 0
    },
    feedback(){}
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