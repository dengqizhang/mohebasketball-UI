<template>
  <div>我是user的第一次进入渲染首页展示</div>
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