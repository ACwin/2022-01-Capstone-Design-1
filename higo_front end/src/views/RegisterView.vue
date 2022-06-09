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
          Register
        </van-button><br/>
        <van-button round block to="/login">
          Login
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
  import qs from "qs";
  import {Toast} from "vant";

  const {proxy} = getCurrentInstance();
  const router = useRouter();

  const username = ref('');
  const password = ref('');

  const onSubmit = (values) => {
    proxy.request.post("/api/register",
            qs.stringify(values))
            .then(response => {
              if (response.data.status === 10000) {
                Toast.success("Register success!");
                router.replace("/login");
              } else {
                Toast.fail(response.data.msg);
              }
            });
  };
</script>
