<template>
  <div style="width: 90%">
    <el-row :gutter="20" id="row">
      <el-col :span="6"
        ><div class="grid-content ep-bg-purple">
          <el-card style="">今日销售：{{ a.sum }}</el-card>
        </div></el-col
      >
      <el-col :span="6"
        ><div class="grid-content ep-bg-purple">
          <el-card style="">订单数量：{{ ordersList }}</el-card>
        </div></el-col
      >
      <el-col :span="6"
        ><div class="grid-content ep-bg-purple">
          <el-card style="">月销售额：{{ time }}</el-card>
        </div></el-col
      >
      <el-col :span="6"
        ><div class="grid-content ep-bg-purple">
          <el-card style="">月售目标：{{ store.monthsell }}</el-card>
        </div></el-col
      >
    </el-row>
  </div>
  <div class="echarts-box">
    <div id="myEcharts" style="width: 100%; height: 600px"></div>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
let echart = echarts;
import {
  ref,
  reactive,
  onMounted,
  toRaw,
  computed,
  onUnmounted,
  onBeforeMount,
} from "vue";
import { getuserorders } from "../../../utils/api/interface";
import { useUserStore } from "../../../store";
const store = useUserStore();
let charData = [];
const timestamp = reactive({
  data: [],
});
let time = ref("2050");
//销售额总计
let nowproductsell = reactive([]);
//订单数量
let ordersList = reactive([]);
const a = reactive({
  //计算订单里商品价格的累加总额
  sum: computed(() => {
    return nowproductsell.reduce((acc, cur) => acc + cur, 0);
  }),
});
onMounted(async () => {
  initChart();
});
onUnmounted(() => {
  echart.dispose;
});
onBeforeMount(() => {
  let res = [150, 230, 224, 218, 135];
  ordersList = res.length;
  nowproductsell = res;
  getuserorders().then((res) => {});
});
//配置Echarts
const initChart = () => {
  const chart = echart.init(document.getElementById("myEcharts"));
  //配置数据
  chart.setOption({
    xAxis: {
      type: "category",
      data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
    },
    yAxis: {
      type: "value",
      name: "销售金额",
    },
    series: [
      {
        data: ["2800", "46800", "52000", "65245", "47850", "2050"],
        type: "line",
      },
    ],
  });
};
</script>

<style>
#row > div {
}
</style>