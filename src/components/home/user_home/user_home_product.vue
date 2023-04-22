<template>
  <meta name="referrer" content="no-referrer" />
  <div>product</div>
  <div v-for="(item, index) in cname" :key="index">
    <span>{{ item.cname }}</span
    ><br />
    <span>{{ item.price }}</span
    ><br />
    <span>{{ item.stock }}</span>
    <br>
    <img :src="item.url" alt="" srcset="" style="width: 50px" />
    <br>
  </div>
  
</template>

<script>
import { ref, reactive, onMounted, onBeforeMount } from "vue";
import { getproductList } from "../../../utils/api/interface.js";
export default {
  setup() {
    const data = reactive({
      imgurl: "",
      cname: "",
    });
    const cname = ref([]);
    //组件挂载完成后执行
    onMounted(async () => {
      await getproductList().then((res) => {
        cname.value = res.data;
        console.log(cname);
      });
    });
    //组件被挂载前执行
    onBeforeMount(() => {});
    return {
      data,
      cname,
    };
  },
};
</script>
<style>
</style>