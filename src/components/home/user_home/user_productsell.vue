<template>
  <el-row :gutter="20">
    <el-col
      :span="6"
      v-for="(item, index) in tableData[0]"
      :key="item.id"
      style="display: flex"
    >
      <el-card style="width: 12.5rem; height: 300px">
        <div class="grid-content ep-bg-purple">
          <img
            :src="item.url"
            alt=""
            srcset=""
            style="width: 5.625rem; height: 5.625rem"
          />
        </div>
        <div>
          <!-- <div>{{ item.id }}</div> -->
          <div class="grid-content ep-bg-purple">
            <p style="font-size: 0.9rem">{{ item.cname }}</p>
          </div>
          <div class="grid-content ep-bg-purple">
            <p style="font-size: 0.9rem">价格：{{ item.price }}</p>
          </div>
          <div class="grid-content ep-bg-purple">
            <p style="font-size: 0.9rem">库存：{{ item.stock }}</p>
          </div>
          <el-button
            @click="
              addproductCar(item.id);
              amoutList(item.price);
            "
            >添加</el-button
          >
        </div>
      </el-card>
    </el-col>
  </el-row>
  <el-affix position="bottom" :offset="20" style="width: 100%">
    <div style="width: 100%; display: flex">
      <p style="margin-left: 92%">当前订单</p>
      <div
        @click="productcay()"
        style="width: 40px; height: 40px; font-size: 50px; margin-left: auto"
      >
        <el-icon><ShoppingTrolley /></el-icon>
      </div>
    </div>
  </el-affix>
  <el-dialog v-model="dialogFormVisible" title="结算页面">
    <div v-for="(item, index) in productdata.data" :key="index">
      <div style="display: flex">
        <div>
          <div>商品名称：{{ item.cname }}</div>
          <div>价格：{{ item.price }}</div>
        </div>
        <div>
          <!-- <div>{{ counts }}</div> -->
          <button @click="addproductquantity(item.id, item.price)">
            增加数量
          </button>
          <div>{{ addproduct }}</div>
        </div>
      </div>

      <br />
    </div>
    <div>总计：{{ a.sum }}</div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button
          :plain="true"
          type="primary"
          @click="
            dialogFormVisible = false;
            open();
          "
          ><div>结账</div></el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
const state = reactive({
  store: useUserStore(),
});
import { ref, reactive, onMounted, toRaw, computed, watch } from "vue";
import {
  getuserproduct,
  getcat_products,
  postproductstock,
} from "../../../utils/api/interface";
import { ShoppingTrolley } from "@element-plus/icons-vue";
import { useUserStore } from "../../../store";
import { ElMessage } from "element-plus";
let dialogFormVisible = ref(false);
const message = ref(null); //提示消息
//商品列表
const tableData = reactive([
  {
    id: "",
    cname: "",
    url: "",
    price: "",
    stock: "",
  },
]);
//增加商品数量的变量
let addproduct = ref([1]);
//保存商品id的值和商品数量
let counts = ref({});
//商品库存的变量
let amout111 = reactive([]);
//计算商品库存的求和
const a = reactive({
  sum: computed(() => {
    return amout111.reduce((acc, cur) => acc + cur, 0);
  }),
});
//向商品库存变量添加库存
const amoutList = (data) => {
  amout111.push(data);
};
//商品id列表
const productsId = reactive({
  ids: [],
});
//购物车的商品列表
const productdata = reactive({
  data: {
    id: "",
    cname: "",
    url: "",
    price: "",
    stock: "",
  },
});
//定义后端要的参数idStockMap
const idStockMap = {};
const open3 = () => {
  ElMessage({
    message: "暂无商品，请先添加商品！",
    type: "warning",
  });
};
const open = () => {
  // const obj = { ...idStockMap };
  // data = JSON.stringify(obj.value);
  // console.log(data);
  postproductstock().then((res) => {});
  ElMessage({
    message: "结账成功，正在生成订单。",
    type: "success",
  });
};
//增加数量按钮事件
const addproductquantity = (id, price) => {
  console.log("hello");
  addproductCar(id);
  amoutList(price);
  // addproductCar(38);
};
//计算数组中每个相同元素的出现数量
const countEqualNumbers = () => {
  let counts = {}; //初始化一个空对象
  for (let i = 0; i < productsId.ids.length; i++) {
    if (counts[productsId.ids[i]] === undefined) {
      counts[productsId.ids[i]] = 1;
    } else {
      counts[productsId.ids[i]]++;
    }
  }
  return counts;
};
//向购物车添加商品id
const addproductCar = (row) => {
  productsId.ids.push(row);
  //将商品id和所选数量传递
  counts = countEqualNumbers(productsId.ids);
  idStockMap.value = counts;
  console.log(idStockMap.value);
};
//查询购物车的商品列表
const productcay = () => {
  const obj = { ...productsId };
  if (productsId.ids == false) {
    open3();
    // alert("暂无商品，请添加商品！");
    dialogFormVisible.value = false;
  } else {
    dialogFormVisible.value = true;
    getcat_products(obj).then((res) => {
      productdata.data = res.data.productDto;
    });
  }
};
onMounted(async () => {
  await getuserproduct().then((res) => {
    tableData[0] = res.data;
  });
});
</script>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>