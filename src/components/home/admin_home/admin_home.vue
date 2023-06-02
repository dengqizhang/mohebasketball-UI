<template>
  <div class="common-layout">
    <el-container>
      <el-row class="tac" :gutter="10">
        <el-col :span="12" :xs="10" :sm="5" :md="10" :lg="6" :xl="1">
          <el-aside width="200px">
            <h5 :xs="10" :sm="5" :md="10" :lg="6" :xl="1">管理员菜单</h5>
            <el-menu
              active-text-color="#ffd04b"
              background-color="#545c64"
              class="el-menu-vertical-demo"
              default-active="2"
              text-color="#fff"
              @open="handleOpen"
              @close="handleClose"
              :unique-opened="true"
            >
              <el-sub-menu index="1">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>One</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1" @click="admin_datawork()"
                    >首页</el-menu-item
                  >
                  <el-menu-item index="1-2" @click="admin_vipadmin()">会员管理</el-menu-item>
                  <el-menu-item index="1-2">商户账户管理</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                  <el-menu-item index="1-3" @click="admin_productadmin()"
                    >商品管理</el-menu-item
                  >
                </el-menu-item-group>
              </el-sub-menu>
            </el-menu>
          </el-aside>
        </el-col>
      </el-row>
      <el-container>
        <el-header>我是管理员的首页</el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { ref, reactive, onMounted, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const data = reactive({});
    const router = useRouter();

    function admin_datawork() {
      router.push({name: "admin_datawork"});
      console.log(111);
    }
    function admin_productadmin() {
      router.push({name: "admin_productadmin"});
    }
    function admin_vipadmin() {
      router.push({name: "admin_vipadmin"});
    }

    //组件挂载完成后执行
    onMounted(() => {});
    //组件被挂载前执行
    onBeforeMount(() => {});
    return {
      data,
      admin_datawork,
      admin_productadmin,
      admin_vipadmin,
    };
  },
};
</script>
<style>
.tac {
  flex-wrap: wrap;
}
</style>