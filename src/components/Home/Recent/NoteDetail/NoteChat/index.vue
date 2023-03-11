<template>
  <el-drawer
      title="Chat"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
      :show-close = 'false'
  >
    <div class="chat_box">
      <div class="chat_box_main" style="height: 80vh; overflow-y: scroll;margin-bottom: 20px">


      <div v-for="(item,index) in history_chat" style="width: 100%">
        <el-row type="flex" justify="space-between" align="top" style="margin-bottom: 20px;width: 100%">
          <el-col :span="3" style="display: flex;align-items: flex-start;flex-direction: column">
            <svg class="icon_middle"  aria-hidden="true" >
              <use xlink:href="#icon-wenhao"></use>
            </svg>
          </el-col>
          <el-col :span="20">
              <div class="chat_unit">
                {{item.question}}
              </div>
          </el-col>
        </el-row>
        <el-row type="flex" justify="space-between" align="top" style="margin-bottom: 20px;width: 100%">
          <el-col :span="20">
            <div class="chat_unit">
              {{item.answer}}
            </div>
          </el-col>
          <el-col :span="3" style="display: flex;align-items: flex-end;flex-direction: column">
            <svg class="icon_middle"  aria-hidden="true" >
              <use xlink:href="#icon-wenhao"></use>
            </svg>
          </el-col>

        </el-row>
      </div>
      </div>
      <div style="align-self: end;width: 100%">
        <el-input placeholder="请输入问题" class="input_main" ></el-input>
      </div>
    </div>
  </el-drawer>
</template>

<script>
export default {
  name: "NoteChat",
  props:['drawer'],
  data(){
    return{
      question:'',
      direction:'rtl',
      history_chat:[{question:'why chat?why chat?why chat?why chat?\n why chat?', answer:'that'},
        {question:'why chat?why chat?why chat?why chat?\n why chat?', answer:'that'},
        {question:'why chat?why chat?why chat?why chat?\n why chat?', answer:'that'},
        {question:'why chat?why chat?why chat?why chat?\n why chat?', answer:'that'},
        {question:'why chat?why chat?why chat?why chat?\n why chat?', answer:'that'},
        {question:'why chat?why chat?why chat?why chat?\n why chat?', answer:'that'},
        {question:'why chat?why chat?why chat?why chat?\n why chat?', answer:'that'},
        {question:'why chat?why chat?why chat?why chat?\n why chat?', answer:'that'},],
    }
  },
  methods:{
    handleClose(){
      this.$emit('close')
    },
    new_chat(){

    }
  }
}
</script>

<style scoped>
.chat_box{
  height: 100%;
  width: 100%;
  padding: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  /*overflow-y: scroll;*/
}

.chat_unit{
  background-color: rgba(50,125,191,0.1);
  color: rgba(112,112,112,0.5);
  border-radius: 20px;
  font-size: 25px;
  font-weight: bold;
  padding: 20px;
}

.chat_box_main::-webkit-scrollbar{
  width: 0;
}

.input_main{
  color: rgba(112,112,112,0.5);
  border: 2px solid rgba(112,112,112,0.2);
  /*border-radius: 15px;*/
  font-weight: bold;
  font-size: 20px;
}
</style>