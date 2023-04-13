<template>
  <div>
    <h3>{{ loginFailInfo }}</h3>
    <form v-show="formShow" @submit.prevent="login">
      <input type="text" v-model="data.user.username" /><br />
      <input type="text" v-model="data.user.password" />
      <input type="submit" />
    </form>
  </div>
</template>

<script>
import { ref, reactive, onMounted, onBeforeMount } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const data = reactive({
      user: {
        username: "",
        password: "",
      },
      formShow: {},
    });
    let formShow = ref(true);
    let loginFailInfo = ref("");
    const router = useRouter();

    function login() {
      let config = {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      };

      axios
        .post(
          "http://localhost:8080/login",
          { username: data.user.username, password: data.user.password },
          config
        )
        .then((res) => {
          console.log(res.data);
          formShow.value = false;
          loginFailInfo.value = "";
          router.push("/demo1");
        })
        .catch((error) => {
          loginFailInfo.value = "用户名或密码错误";
        });
    }

    //组件挂载完成后执行
    onMounted(() => {});
    //组件被挂载前执行
    onBeforeMount(() => {});
    return {
      data,
      formShow,
      loginFailInfo,
      login,
    };
  },
};
</script>
<style>
</style>