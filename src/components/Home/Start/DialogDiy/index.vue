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
        action="https://jsonplaceholder.typicode.com/posts/"
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

  methods:{
    handleClose(){
      this.$emit('close')
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