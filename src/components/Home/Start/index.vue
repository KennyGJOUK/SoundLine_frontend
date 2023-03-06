<template>
  <div>
   <div class="title">Start</div>
    <div>
      <el-row type="flex" align="middle" justify="space-between" style="width: 800px">
        <el-col :span="6" >
          <el-row type="flex" align="middle" style="border: 1px solid rgba(112,112,112,0.7); font-weight: bold;
           color: rgba(112,112,112,0.7); border-radius: 5px;padding: 5px 0;">
            <el-col :span="6" :offset="1">
              <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-jia"></use>
              </svg>
            </el-col>
            <el-col :span="10"  :offset="2">New Note</el-col>

            <el-col :span="2"  :offset="1">
              <svg class="icon_small" aria-hidden="true" >
                <use xlink:href="#icon-xuanzeqizhankai"></use>
              </svg>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="6" >
          <el-row type="flex" align="middle" style="border: 1px solid rgba(112,112,112,0.7); font-weight: bold;
           color: rgba(112,112,112,0.7); border-radius: 5px;padding: 5px 0;">
              <el-col :span="6" :offset="1">
                <svg class="icon" aria-hidden="true" >
                  <use xlink:href="#icon-24gf-folderPlus"></use>
                </svg>
              </el-col>
            <el-col :span="10"  :offset="2">New folder</el-col>
          </el-row>
        </el-col>

        <el-col :span="6" >
          <el-row type="flex" align="middle" style="border: 1px solid rgba(112,112,112,0.7); font-weight: bold;
           color: rgba(112,112,112,0.7); border-radius: 5px;padding: 5px 0;">
            <el-col :span="6" :offset="1">
              <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-mobankuangjia"></use>
              </svg>
            </el-col>
            <el-col :span="10"  :offset="2">Templates</el-col>
          </el-row>
        </el-col>

      </el-row>

      <div>
        <span>Notes</span>
        <span>Tasks</span>
      </div>

      <div>
        <el-select v-model="value" placeholder="Type">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>

        <el-select v-model="value" placeholder="Creator">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </div>

      <div>
        <div v-for="(item, index) in tableData">
          <el-row type="flex" align = 'middle' justify = 'space-between'>
            <el-col :span="2">
              <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-wendang"></use>
              </svg>
            </el-col>
            <el-col :span="4">
              {{item.note_name}}
            </el-col>
            <el-col :span="4">
              {{item.folder_name}}
            </el-col>
            <el-col :span="8">
              {{item.time}}
            </el-col>

          </el-row>
          <el-divider></el-divider>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "Start",

  data(){
    return{
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      },],
      value: '',
      tableData:[
        {note_name:'Test', folder_name:'Folder 1', time:'2023/2/4 14:55'}
      ]
    }
  }
}
</script>

<style scoped>

</style>