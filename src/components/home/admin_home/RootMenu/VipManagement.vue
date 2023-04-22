<template>
  <div>我是会员管理的页面</div>
  <div style="width: 600px">
    <caption>
      <el-button type="primary">增加</el-button>
    </caption>
    <el-table :data="tableData.id">
      <!-- <el-table-column prop="id" label="id" width="180" ></el-table-column> -->
      <el-table-column type="index" prop="id" label="序号"></el-table-column>
      <el-table-column prop="id" label="id" />
      <el-table-column prop="name" label="Name" />
      <el-table-column label="" width="180"
        ><el-button type="warning">修改</el-button></el-table-column
      >
      <el-table-column label="" width="180"
        ><el-button type="danger" :icon="Delete" circle
      /></el-table-column>
    </el-table>
  </div>
  <!-- <table class="table caption-top">
    <caption>
      <el-button type="primary">增加</el-button>
    </caption>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">id</th>
        <th scope="col">用户名</th>
      </tr>
    </thead>
    <tbody v-for="(item, index) in data.VipUser" :key="index">
      <tr>
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td><el-button type="warning">修改</el-button></td>
        <td><el-button type="danger" :icon="Delete" circle /></td>
      </tr>
    </tbody>
  </table> -->
</template>

<script>
import { ref, reactive, onMounted, onBeforeMount } from "vue";
import { Delete } from "@element-plus/icons-vue"; //删除按钮的样式导入
import { VipManagement } from "../../../../utils/api/interface.js";
export default {
  setup() {
    const tableData = reactive({
      id: "",
      name: [],
    });

    //组件挂载完成后执行
    onMounted(async () => {
      await VipManagement().then((res) => {
        tableData.id = res.data.data;
        tableData.name = res.data.data;
        console.log(tableData.id);
      });
    });
    //组件被挂载前执行
    onBeforeMount(() => {});
    return {
      tableData,
      Delete, //删除按钮
    };
  },
};
</script>
<style>
</style>