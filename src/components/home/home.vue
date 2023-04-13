<template>
  <div>我是管理员首页</div>
  <div class="box">
    <el-row class="tac" :gutter="10">
      <el-col :xs="10" :sm="5" :md="5" :lg="4" :xl="1">
        <!-- :xs="8" :sm="6" :md="4" :lg="3" :xl="1" -->
        <h5 class="mb-1">管理员菜单</h5>
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>One</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3" @click="JumpVipManagement()"
                >会员管理</el-menu-item
              >
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>DataReport</template>
              <el-menu-item index="1-4-1" @click="demo()"
                >数据报表</el-menu-item
              >
              <el-menu-item index="1-4-1" @click="demo1()">监控</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-col>
      <el-col :xs="10" :sm="5" :md="5" :lg="4" :xl="1">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ref, reactive, onMounted, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const data = reactive({});
    const router = useRouter();

    function JumpVipManagement() {
      router.push("/VipManagement");
    }

    function demo() {
      // DataReportPage
      // router.push({ name: "DataReportPage" });
      router.push("/DataReportPage");
      console.log(111);
    }
    function demo1() {
      // DataReportPage
      // router.push({ name: "DataReportPage" });
      router.push("/demo");
      console.log(111);
    }

    //组件挂载完成后执行
    onMounted(() => {});
    //组件被挂载前执行
    onBeforeMount(() => {});
    return {
      data,
      demo,
      demo1,
      JumpVipManagement,
    };
  },
};
</script>
<style>
.tac {
  flex-wrap: wrap;
}
</style>