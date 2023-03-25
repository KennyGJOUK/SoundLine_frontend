<template>
  <div class="main-box">
    <el-card class="box-card" :body-style="{padding:'10px'}">

      <div style=";margin-bottom: 30px;text-align: left">
        <span @click="back2login" style="cursor: pointer;color: #707070;opacity: 0.5">返回登录</span>
      </div>


      <div style="padding-left: 70px; padding-right: 70px;padding-bottom: 70px">
        <div class="title" >
          注册
        </div>
        <el-input v-model="username" placeholder="请输入账号"></el-input>
        <el-input v-model="password" placeholder="请输入密码" style="margin-top: 20px" show-password></el-input>
        <el-input v-model="pwd_re" placeholder="请再次输入密码" style="margin-top: 20px" show-password></el-input>

        <el-button @click="signup" type="success" class="green_button" style="margin-top: 20px">注册</el-button>
      </div>



    </el-card>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data(){
    return{
      user_token:null,
      username:null,
      password:null,
      agreement:false,
      pwd_re:null,
    }
  },
  created() {

    let username = localStorage.getItem('username')
    if (username !== null && username !== undefined) this.$router.push('/')
  },
  methods:{
    init(){},
    back2login(){
      this.$router.push('/login')
    },
    signup(){
      let that = this;
      if (this.password !== this.pwd_re){
        this.$message("两次密码不一致！")
        return
      }
      this.$axios.post("/auth/register", {username:this.username, password:this.password})
      .then(function (resp) {
        console.log(resp.data.msg)
        if (resp.data.msg === 1){
          that.$message('注册成功')
          that.$router.push('/login')
        }
      })

    },

  }
}
</script>

<style scoped>
@import "../../../../src/assets/style/login.css";
</style>