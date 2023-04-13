<template>
  <div>我是需要权限才能访问的页面</div>
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