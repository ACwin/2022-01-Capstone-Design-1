<template>
  <div class="loginPanel">
    <img src="../assets/logo.png" class="logo"/><br/>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
                v-model="username"
                name="userName"
                label="UserName"
                placeholder="UserName"
                :rules="[{ required: true, message: 'Please fill in the username' }]"
        />
        <van-field
                v-model="password"
                type="password"
                name="password"
                label="Password"
                placeholder="Password"
                :rules="[{ required: true, message: 'Please fill in the password' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          Login
        </van-button><br/>
        <van-button round block to="/register">
          Register
        </van-button>
      </div>
    </van-form>
  </div>
  <appTabbar/>
</template>

<script setup>
  import appTabbar from '@/components/AppTabbar';
  import { ref,getCurrentInstance } from 'vue';
  import { useRouter } from 'vue-router';
  import {Toast} from "vant";
  import qs from "qs";

  const {proxy} = getCurrentInstance();
  const router = useRouter();

  const username = ref('');
  const password = ref('');

  const onSubmit = (values) => {
    proxy.request.post("/api/login",
            qs.stringify(values))
            .then(response => {
              if (response.data.status === 10000) {
                sessionStorage.setItem("user", JSON.stringify(response.data.data));
                Toast.success("Login success!");
                router.replace("/user");
              } else {
                Toast.fail(response.data.msg);
              }
            });
  };
</script>

<style lang="scss">

</style>
