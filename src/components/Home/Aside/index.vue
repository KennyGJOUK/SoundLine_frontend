<template>
  <el-container class="aside_box">
    <el-main style="height: auto">
      <div class="title">SoundLine</div>
      <el-divider></el-divider>
      <div class="subtitle">MENU</div>
      <div v-for="item in icon_list">
        <div @click="click_icon(item)">
          <Icon :icon_type="item" :active_icon="active_icon"></Icon>
        </div>

      </div>
    </el-main>


    <el-footer style="display: flex; align-items: center;justify-content: center">
      <svg class="icon" aria-hidden="true" >
        <use xlink:href="#icon-touxiang"></use>
      </svg>
      <span style="margin-left: 10px">
        {{username}}
      </span>

    </el-footer>
  </el-container>
</template>

<script>
import Icon from "@/components/Home/Aside/Icon";
export default {
  name: "Aside",
  components: {Icon},
  data(){
    return{
      username:'Kenny',
      icon_list:['Start', 'Recents', 'Folders', 'More'],
      active_icon:'',
    }
  },
  created() {

  },
  methods:{
    init(){

    },
    click_icon(v){
      this.active_icon = v
      console.log(this.active_icon)
    },
  }
}
</script>

<style scoped>
@import "../../../assets/style/aside.css";
</style>