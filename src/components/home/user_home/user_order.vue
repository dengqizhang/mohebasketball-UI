<template>
  <el-descriptions title="订单信息" border>
    <div
      v-for="item in ordersList.data"
      :key="item"
      class="scrollbar-demo-item"
    >
      <el-descriptions-item label="订单id">{{ item.id }}</el-descriptions-item>
      <el-descriptions-item label="订单金额">{{
        item.orderMoney
      }}</el-descriptions-item>
      <el-descriptions-item label="订单时间">{{
        item.dataTime
      }}</el-descriptions-item>
    </div>
  </el-descriptions>
</template>

<script setup>
import { getuserorders } from "../../../utils/api/interface";
import { ref, reactive, onMounted, toRaw, computed, onUnmounted } from "vue";
const ordersList = reactive([
  {
    id: "",
    orderMoney: "",
    dataTime: "",
  },
]);
onMounted(async () => {
  await getuserorders().then((res) => {
    ordersList.data = res.data;
    console.log(ordersList.data);

    // console.log(toRaw(tableData[0])); //将proxy代理的对象转为原生对象
  });
});
</script>

<style>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>