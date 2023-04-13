<template>
  <div>demo1111</div>
  <!-- <el-row class="tac" :gutter="10">
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"> </el-col>
  </el-row> -->
</template>

<script>
import { ref, reactive, onMounted, onBeforeMount } from "vue";

export default {
  setup() {
    const data = reactive({});
    //组件挂载完成后执行
    onMounted(() => {});
    //组件被挂载前执行
    onBeforeMount(() => {});
    return {
      data,
    };
  },
};
</script>
<style>
</style>