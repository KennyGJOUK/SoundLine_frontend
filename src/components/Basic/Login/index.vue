<template>
  <div class="main-box">
    <el-card class="box-card" :body-style="{padding:'80px'}">

      <div class="title">
        SoundLine
      </div>

      <el-input v-model="username" placeholder="请输入账号"></el-input>
      <el-input v-model="password" placeholder="请输入密码" style="margin-top: 20px " show-password></el-input>

      <el-row type="flex" justify="space-between">
        <el-col :span="2"><el-button @click="forget" type="text">忘记密码?</el-button></el-col>
        <el-col :span="2"><el-button @click="signup" type="text">注册</el-button></el-col>
      </el-row>
      <el-button @click="login" type="success" class="green_button">登录</el-button>
      <br>
      <el-radio v-model="agreement" style="margin-top: 10px">
        我已阅读并同意<el-button type="text">《SoundLine服务协议》</el-button>
      </el-radio>
      <el-divider >其他登录方式</el-divider>
      <div style="cursor: pointer;margin-top: 20px">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-weixin"></use>
        </svg>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      user_token:null,
      username:null,
      password:null,
      agreement:false
    }
  },
  created() {
    let username = localStorage.getItem('username')
    if (username !== null && username !== undefined) this.$router.push('/')

  },
  methods:{
    init(){},
    login(){
      if (this.agreement){
        this.$message('请先确认服务协议！')
        return
      }
      let that = this;
      this.$axios.post('/auth/login', {username:this.username, password:this.password})
      .then(function (resp) {
        console.log(resp.data.msg)
        if (resp.data.msg === 1) {
          that.$message('登录成功')
          localStorage.setItem('username', resp.data.username)
          that.$router.push('/');
        }
      })


    },
    signup(){
      this.$router.push('/signup')
    },
    forget(){
      this.$message("功能暂未开放!")
    },
    wechat_login(){
      this.$message("功能暂未开放!")
    }
  }
}
</script>

<style scoped>
@import "../../../../src/assets/style/login.css";
</style>