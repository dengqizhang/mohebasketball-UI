<template>
  <el-button type="primary">增加</el-button>
  <el-table :data="tableData.data" style="width: 100%">
    <el-table-column
      type="index"
      prop="id"
      label="序号"
      width="130"
    ></el-table-column>
    <el-table-column prop="name" label="会员名称" width="180">
    </el-table-column>
    <el-table-column prop="cellphone" label="联系方式" width="180" />
    <el-table-column prop="clubcard" label="卡类" width="180" />
    <el-table-column align="right">
      <template #header>
        <el-input
          @change="searchVip()"
          v-model="search"
          size="small"
          placeholder="请输入搜索的"
        />
      </template>
      <template #default="{ row }">
        <el-button @click="handleEdit(row)">修改</el-button>
        <el-button type="danger" @click="handleDelete(row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { getadminvip, deleteadminvip } from "../../../utils/api/interface";
import { ref, onMounted, reactive } from "vue";
const search = ref("");
const tableData = reactive([
  {
    id: "",
    name: "",
    cellphone: "",
    clubcard: "",
  },
]);
const searchVip = () => {
  alert("等等");
};
const handleEdit = (row) => {
  console.log(row.id);
};
const handleDelete = (row) => {
  deleteadminvip(row.id).then((res) => {
    console.log(res);
  });
  console.log(row.id);
};
onMounted(async () => {
  await getadminvip().then((res) => {
    tableData.data = res.data;
  });

  console.log(tableData[0]);
});
</script>

<style>
</style>