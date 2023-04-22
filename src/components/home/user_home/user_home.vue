<template>
  <div class="common-layout">
    <el-container>
      <el-row class="tac" :gutter="10">
        <el-col :span="12" :xs="10" :sm="5" :md="10" :lg="6" :xl="1">
          <el-aside width="200px">
            <h5 :xs="10" :sm="5" :md="10" :lg="6" :xl="1">导航菜单</h5>
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
                <el-menu-item-group title="Group One">
                  <el-menu-item index="1-1" @click="user_home()"
                    >首页</el-menu-item
                  >
                  <el-menu-item index="1-2">item two</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                  <el-menu-item index="1-3" @click="productsell()"
                    >商品售卖</el-menu-item
                  >
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                  <template #title>DataReport</template>
                  <el-menu-item index="1-4-1" @click="demo()"
                    >数据报表</el-menu-item
                  >
                  <el-menu-item index="1-4-1" @click="demo1()"
                    >监控</el-menu-item
                  >
                </el-sub-menu>
              </el-sub-menu>
            </el-menu>
          </el-aside>
        </el-col>
      </el-row>
      <el-container>
        <el-header>我是首页</el-header>
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
    function productsell() {
      router.push("/product");
    }
    function user_home() {
      router.push("/user_home");
    }

    //组件挂载完成后执行
    onMounted(() => {
    })
    //组件被挂载前执行
    onBeforeMount(() => {});
    return {
      data,
      productsell,
      user_home,
    };
  },
};
</script>
<style>
</style>