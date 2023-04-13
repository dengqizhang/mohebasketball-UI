<template>
  <div>
    <!-- <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
        ><div class="grid-content ep-bg-purple"
      />11</el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
        ><div class="grid-content ep-bg-purple-light"
      />11</el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
        ><div class="grid-content ep-bg-purple"
      />11</el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
        ><div class="grid-content ep-bg-purple-light"
      />111</el-col>
    </el-row> -->
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
      ><div class="grid-content ep-bg-purple" />
      111111</el-col
    >
  </div>

  <button @click="demo()">跳转到隐私页面</button>
</template>

<script>
import { ref, reactive, onMounted, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const data = reactive({});
    const router = useRouter();

    function demo() {
      router.push("/demo2");
      console.log(111);
    }
    //组件挂载完成后执行
    onMounted(() => {});
    //组件被挂载前执行
    onBeforeMount(() => {});
    return {
      data,
      demo,
    };
  },
};
</script>
<style>
</style>