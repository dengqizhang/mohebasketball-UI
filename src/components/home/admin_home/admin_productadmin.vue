<template>
  <!-- <meta name="referrer" content="no-referrer" /> -->
  <div>
    <el-button type="primary" @click="dialogFormVisible = true">增加</el-button>
    <el-dialog v-model="dialogFormVisible" title="增加商品">
      <el-radio-group v-model="labelPosition" label="label position">
        <el-radio-button label="left">Left</el-radio-button>
        <el-radio-button label="right">Right</el-radio-button>
        <el-radio-button label="top">Top</el-radio-button>
      </el-radio-group>
      <div style="margin: 20px" />
      <el-form
        :label-position="labelPosition"
        label-width="100px"
        :model="formLabelAlign"
        style="max-width: 460px"
      >
        <el-form-item label="商品名称">
          <el-input v-model="formLabelAlign.cname" />
        </el-form-item>
        <el-form-item label="商品价格">
          <el-input v-model="formLabelAlign.price" />
        </el-form-item>
        <el-form-item label="商品库存">
          <el-input v-model="formLabelAlign.stock" />
        </el-form-item>
        <el-form-item label="商品图片">
          <el-input v-model="formLabelAlign.url" />
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="addproductchange()">确定</el-button>
      <el-button type="primary" plain @click="resetForm()">重置</el-button>
    </el-dialog>

    <input type="text" />
    <el-button>搜索</el-button>
  </div>
  <el-table :data="tableData[0].data" style="width: 100%">
    <el-table-column type="index" prop="id" label="序号"></el-table-column>
    <el-table-column
      property="cname"
      label="商品名称"
      width="180"
    ></el-table-column>
    <el-table-column prop="price" label="商品价格" width="180" />
    <el-table-column prop="stock" label="商品库存" width="180" />
    <el-table-column label="商品图片" width="180">
      <template>
        <!-- <img :src="item.url" alt="" srcset="" /> -->
      </template>
    </el-table-column>

    <el-table-column>
      <!-- 取删除当前行的id -->
      <template #default="{ row }">
        <el-popconfirm
          confirm-button-text="YES"
          cancel-button-text="No"
          title="你确定要删除吗？"
          @cancel="cancelEvent()"
          @confirm="confirmEvent(row)"
        >
          <template #reference>
            <el-button type="danger">删除</el-button>h
          </template>
        </el-popconfirm>
        <el-button
          type="warning"
          @click="
            dialogFormVisibleUpdate = true;
            updateProduct(row);
          "
          >修改</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <el-dialog v-model="dialogFormVisibleUpdate" title="修改商品">
    <el-radio-group v-model="labelPosition" label="label position">
      <el-radio-button label="left">Left</el-radio-button>
      <el-radio-button label="right">Right</el-radio-button>
      <el-radio-button label="top">Top</el-radio-button>
    </el-radio-group>
    <div style="margin: 20px" />
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="formLabelAlign"
      style="max-width: 460px"
    >
      <el-form-item label="商品名称">
        <el-input v-model="updatedata.cname" />
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="updatedata.price" />
      </el-form-item>
      <el-form-item label="商品库存">
        <el-input v-model="updatedata.stock" />
      </el-form-item>
      <el-form-item label="商品图片">
        <el-input v-model="updatedata.url" />
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="updatechange()">确定</el-button>
    <el-button type="primary" plain @click="resetForm()">重置</el-button>
  </el-dialog>
</template>
<script>
import { ref, reactive, onMounted, onBeforeMount } from "vue";
import {
  getadminproduct,
  daleteProduct,
  addProduct,
  updateProductapi,
} from "../../../utils/api/interface.js";
import { ElMessage } from "element-plus";
export default {
  setup() {
    const labelPosition = ref("right");
    const formLabelAlign = reactive({
      id: "0",
      cname: "",
      price: "",
      stock: "",
      url: "",
    });
    const dialogFormVisible = ref(false);
    const dialogFormVisibleUpdate = ref(false);
    const tableData = reactive([
      {
        id: "",
        cname: "",
        price: "",
        stock: "",
        url: "",
      },
    ]);
    const updateid = ref({
      id: "",
    });
    const updatedata = reactive({
      cname: "",
      price: "",
      stock: "",
      url: "",
    });
    const updateProduct = (row) => {
      console.log(row.id);
      updateid.value = row.id;
      console.log(updateid.value);
    };

    const updatechange = async () => {
      console.log(updatedata);
      let jsonupdatedata = JSON.stringify(updatedata);
      updateProductapi(updateid.value, encodeURI(jsonupdatedata)).then(
        (res) => {
          console.log(res);
        }
      );
    };
    const resetForm = () => {
      console.log(111);
      Object.assign(formLabelAlign, {
        cname: "",
        price: "",
        stock: "",
        url: "",
      });
    };
    // const updateproductchange = () => {
    //   console.log("1112");
    // };
    const addproductchange = () => {
      addProduct(
        formLabelAlign.id,
        formLabelAlign.cname,
        formLabelAlign.price,
        formLabelAlign.stock,
        formLabelAlign.url
      ).then((res) => {
        console.log(res);
        if (res.status == 200) {
          ElMessage({
            message: "添加成功",
            type: "success",
          });
          dialogFormVisible.value = false;
        }
        getadminproduct().then((res) => {
          tableData[0].data = res.data;
        });
      });
    };

    const confirmEvent = async (row) => {
      // 删除后的提示框
      ElMessage({
        message: "删除成功",
        type: "success",
      });
      //在此处删除完更新视图
      daleteProduct(row.id)
        .then(() => {
          getadminproduct().then((res) => {
            tableData[0].data = res.data;
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const cancelEvent = () => {
      console.log("用户点击了取消");
    };

    //组件挂载完成后执行
    onMounted(async () => {
      await getadminproduct()
        .then((res) => {
          tableData[0].data = res.data;
          console.log(tableData[0].data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
    //组件被挂载前执行
    onBeforeMount(() => {});
    return {
      // data,
      tableData,
      confirmEvent,
      cancelEvent,
      open,
      dialogFormVisible,
      dialogFormVisibleUpdate,
      formLabelAlign,
      labelPosition,
      addproductchange,
      resetForm,
      updateProduct,
      updateid,
      updatechange,
      updatedata,
    };
  },
};
</script>
<style>
</style>