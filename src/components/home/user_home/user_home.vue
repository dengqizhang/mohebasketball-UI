<template>
  <div class="common-layout">
    <el-container>
      <el-row class="tac" :gutter="10">
        <el-col :span="12" :xs="10" :sm="5" :md="10" :lg="6" :xl="1">
          <el-aside>
            <el-menu
              active-text-color="#ffd04b"
              background-color="#545c64"
              class="el-menu-vertical-demo"
              default-active="2"
              text-color="#fff"
              @open="handleOpen"
              @close="handleClose"
              :unique-opened="true"
              :collapse="data.isCollapse"
              style="height: 100vh"
            >
              <div style="margin-left: 5%">
                <h3 style="color: #fff">导航菜单</h3>
              </div>
              <el-menu-item-group>
                <el-menu-item index="1-1" @click="user_home()"
                  >首页</el-menu-item
                >
                <el-menu-item index="1-3" @click="user_product()"
                  >商品售卖</el-menu-item
                >
                <el-menu-item index="1-5" @click="user_lookvip()"
                  >查看会员</el-menu-item
                >
                <el-menu-item index="1-6" @click="user_order()"
                  >查看订单</el-menu-item
                >
                <el-menu-item index="1-6" @click="user_nowuser()"
                  >当前商户</el-menu-item
                >
              </el-menu-item-group>
            </el-menu>
          </el-aside>
        </el-col>
      </el-row>
      <el-container>
        <el-header style="display: flex">
          <div>
            <p
              style="
                font-size: 25px;
                font-weight: 700;
                color: #696969;
                margin-left: 38rem;
                padding: 10px;
              "
            >
              墨盒篮球馆商户端
            </p>
          </div>
          <div style="margin-left: auto; padding: 10px" @click="user_nowuser()">
            <img
              width="50"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              alt=""
              srcset=""
            />
          </div>
        </el-header>
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
    const data = ref({
      isCollapse: false,
    });
    const router = useRouter();
    function user_product() {
      router.push({ name: "user_product" });
    }
    function user_home() {
      router.push("/user_home");
    }
    function user_lookvip() {
      router.push({ name: "user_lookvip" });
    }
    function user_order() {
      router.push({ name: "user_order" });
    }
    function user_nowuser() {
      router.push({ name: "user_nowuser" });
    }

    //组件挂载完成后执行
    onMounted(() => {});
    //组件被挂载前执行
    onBeforeMount(() => {});
    return {
      data,
      user_product,
      user_home,
      user_lookvip,
      user_order,
      user_nowuser,
    };
  },
};
</script>
<style>
</style>