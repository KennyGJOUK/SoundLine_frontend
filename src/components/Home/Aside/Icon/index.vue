<template>
  <div style="margin-bottom: 10px;" @click="jump">
    <el-row type="flex" align="middle" :class="active_icon===icon_type?'active_icon':''" style=" cursor: pointer;">
      <el-col :span="6" >
        <svg class="icon" :class="active_icon===icon_type?'active_icon':''" aria-hidden="true" v-if="icon_type === 'Start'">
          <use xlink:href="#icon-kaishi2"></use>
        </svg>
        <svg class="icon" :class="active_icon===icon_type?'active_icon':''" aria-hidden="true" v-else-if="icon_type === 'Recents'">
          <use xlink:href="#icon-mobankuangjia"></use>
        </svg>
        <svg class="icon" :class="active_icon===icon_type?'active_icon':''" aria-hidden="true" v-else-if="icon_type === 'Folders'">
          <use xlink:href="#icon-wenjianjia"></use>
        </svg>
        <svg class="icon" :class="active_icon===icon_type?'active_icon':''" aria-hidden="true" v-else>
          <use xlink:href="#icon-gengduo1"></use>
        </svg>

      </el-col>
      <el-col :span="18">

        {{icon_type}}
      </el-col>
    </el-row>

    <div v-if="active_icon === icon_type">
      <div v-if="icon_type === 'Recents'" >
        <el-divider></el-divider>
        <el-row style="font-size: 17px" type="flex" justify="space-between">
          <el-col :span="12">Recent Notes</el-col>
          <el-col :span="4">
            <svg class="icon_small" aria-hidden="true" >
            <use xlink:href="#icon-bg-left"></use>
          </svg>
            <svg class="icon_small" aria-hidden="true" style="rotate: 180deg;margin-left: 5px" >
              <use xlink:href="#icon-bg-left"></use>
            </svg>
          </el-col>


        </el-row>
        <el-card shadow="never" :style="{'border-radius':'20px', }">
          <el-row v-for="(item, index) in tableData" :key="index" style="display: flex;align-items: center; font-size:18px;cursor: pointer ">
            <el-col :span="8">
              <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-wendang"></use>
              </svg>
            </el-col>
            <el-col :span="16" style="color: rgba(44,44,44,0.8)">{{ item }}</el-col>
          </el-row>
        </el-card>
      </div>
      <div v-else-if="icon_type === 'Folders'" >
        <el-divider></el-divider>
        <el-row style="font-size: 17px" type="flex" justify="space-between">
          <el-col :span="12">Folders</el-col>
          <el-col :span="4">
            <svg class="icon_small" aria-hidden="true" >
              <use xlink:href="#icon-bg-left"></use>
            </svg>
            <svg class="icon_small" aria-hidden="true" style="rotate: 180deg;margin-left: 5px" >
              <use xlink:href="#icon-bg-left"></use>
            </svg>
          </el-col>


        </el-row>
        <el-card shadow="never" :style="{'border-radius':'20px', }">
          <el-row v-for="(item, index) in tableData_folder" :key="index" style="display: flex;align-items: center; font-size:18px;cursor: pointer ">
            <el-col :span="8">
              <svg class="icon_middle" aria-hidden="true" >
                <use xlink:href="#icon-wenjianjia2"></use>
              </svg>
            </el-col>
            <el-col :span="16" style="color: rgba(44,44,44,0.8)">{{ item }}</el-col>
          </el-row>
          <el-divider></el-divider>
          <el-row style="align-items: center;display: flex">
            <el-col :span="8" >
              <svg class="icon_middle" aria-hidden="true" >
                <use xlink:href="#icon-wenjianjia2"></use>
              </svg>
            </el-col>
            <el-col :span="16" style="color: rgba(44,44,44,0.8);font-size: 18px;" >All</el-col>
          </el-row>
        </el-card>
      </div>

      <div v-else-if="icon_type === 'More'" >
        <el-divider></el-divider>
        <el-row style="font-size: 17px" type="flex" justify="space-between">
          <el-col :span="12">More Options</el-col>
          <el-col :span="4">
<!--            <svg class="icon_small" aria-hidden="true" >-->
<!--              <use xlink:href="#icon-bg-left"></use>-->
<!--            </svg>-->
<!--            <svg class="icon_small" aria-hidden="true" style="rotate: 180deg;margin-left: 5px" >-->
<!--              <use xlink:href="#icon-bg-left"></use>-->
<!--            </svg>-->
          </el-col>


        </el-row>
        <el-card shadow="never" :style="{'border-radius':'20px', }">

          <el-row v-for="(item, index) in tableData_Option" :key="index" style="display: flex;align-items: center; font-size:18px;cursor: pointer ">
            <el-col :span="8">
              <svg class="icon_middle" aria-hidden="true" >
                <use xlink:href="#icon-shezhi" v-if="item === 'Settings'"></use>
                <use xlink:href="#icon-yinru" v-else-if="item === 'Importance'"></use>
                <use xlink:href="#icon-zhanghu" v-else-if="item === 'Account'"></use>
                <use xlink:href="#icon-huishouzhan" v-else-if="item === 'Trash'"></use>
                <use xlink:href="#icon-shoucang" v-else-if="item === 'Star'"></use>
              </svg>
            </el-col>
            <el-col :span="16" style="color: rgba(44,44,44,0.8)">{{ item }}</el-col>
          </el-row>


        </el-card>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Icon",
  props:['icon_type', 'active_icon'],
  data(){
    return{
      tableData:['Note 1','Note 2','Note 3','Note 4'],
      tableData_folder:['Folder 1','Folder 2','Folder 3','Folder 4'],
      tableData_Option:['Settings', 'Importance', 'Account', 'Trash', 'Star']
    }
  },

  methods:{
    jump(){
      this.$emit('jump', this.icon_type)
    }

  }
}
</script>

<style scoped>
.active_icon{
  color: #2c2c2c;
}
</style>