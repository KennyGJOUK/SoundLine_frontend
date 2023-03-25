<template>

  <el-dialog
      title="Upload"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      center
      :modal="false"

  >

    <el-upload
        class="upload-demo"
        drag
        action="http://127.0.0.1/document/create"
        :on-error="upload"
        multiple>
      <svg class="icon_big" aria-hidden="true" >
        <use xlink:href="#icon-daoru"></use>
      </svg>
      <div class="el-upload__text">Drag the file or click <em>here</em> to upload.</div>

    </el-upload>

  </el-dialog>

</template>

<script>
export default {
  name: "DialogDiy",
  props:['dialogVisible'],
  created() {
    this.username = localStorage.getItem('username')
  },
  data(){
    return{
      username : ""
    }
  },

  methods:{
    handleClose(){
      this.$emit('close')
    },
    upload(){
      console.log(11)
      let that = this;
      this.$axios.post('/document/create', {username:this.username,
        content:''})
          .then(function (resp) {
            // console.log(resp.data)
            if (resp.data.msg === 1){
              that.$message('创建成功')
              that.$router.push(`recent_detail?id=${resp.data.id}&type=audio`)
              // that.tableData = resp.data.docs
              // for (let i = 0;  i<that.tableData.length; i++){
              //   that.tableData[i][4] = ['Study', 'Work'];
              // }
              // console.log(that.tableData[0])
            }

          })
    }
  }
}
</script>

<style scoped>
.upload-demo {
  display: flex;
  justify-content: center;
  align-items: center;
}

/deep/.el-upload-dragger{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>