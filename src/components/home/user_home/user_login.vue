<template>
    <div>客户端登录页面</div>
  <div class="login-div">
    <el-form   status-icon    label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="pass">
        <el-input v-model="name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码"  @input="change($event)" prop="checkPass">
        <el-input type="password" v-model="password"  autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="login"  >提交</el-button>

      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { ref, reactive, onMounted, onBeforeMount} from 'vue'

export default {
  setup() {
    const data = reactive({
    })
    //组件挂载完成后执行
    onMounted(() => {
    })
    //组件被挂载前执行
    onBeforeMount(() => {
    })
    return {
       data,
    }
  }
}
</script>
<style>
</style>