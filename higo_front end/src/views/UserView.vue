<template>
  <div class="userDiv" v-if="user !== null">
    <div class="userInfo">
      <img src="../assets/face.jpg" class="face"/>
      <div class="userId">
        ID: {{user.id}}<br/>
        <div class="username">{{user.username}}</div>
      </div>
    </div>
    <br/>
    <van-field label="signature" v-model="user.personalizedSignature" />
    <br/>
    <van-button type="primary" block round @click="onUpdateSignClick">Modify signature</van-button><br/><br/>
    <van-button type="danger" block round @click="onLogoutClick">Login out</van-button>
  </div>
  <appTabbar/>
</template>

<script setup>
  import appTabbar from '@/components/AppTabbar';
  import { ref,getCurrentInstance } from 'vue';
  import { useRouter } from 'vue-router';
  import qs from "qs";
  import {Dialog, Toast} from "vant";

  const {proxy} = getCurrentInstance();
  const router = useRouter();

  if (sessionStorage.getItem("user") === null) {
     router.replace("/login");
  }

  const user = ref(JSON.parse(sessionStorage.getItem("user")));

  const onUpdateSignClick = () => {
    proxy.request.post("/api/user/update",
            qs.stringify({
              signature: user.value.personalizedSignature
            }))
            .then(response => {
              if (response.data.status === 10000) {
                Toast.success("Update success!");
                sessionStorage.setItem("user", JSON.stringify(user.value));
              } else if (response.data.status === 10007) {
                router.replace("/login");
              } else {
                Toast.fail(response.data.msg);
              }
            });
  }

  const onLogoutClick = () => {

    Dialog.confirm({
      title: 'Confirm to login out?',
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel'
    })
            .then(() => {
              Toast.loading({ forbidClick: true });
              proxy.request.post("/api/user/logout")
                      .then(() => {
                        Toast.clear();
                        sessionStorage.removeItem("user");
                        router.replace("/login");
                      });
            })
            .catch(() => {
            });


  }

</script>

<style lang="scss" scoped>
  .userDiv{
    flex: 1;
    padding: 3rem;
    .userInfo {
      display: flex;
      .face {
        width: 6rem;
        height: 6rem;
        margin-right: 2rem;
      }
      .userId{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        line-height: 2rem;
        .username{
          font-size: 2rem;
        }
      }
    }
  }
  .van-cell{
    padding: 0!important;
  }

  :deep(.van-field__label){
    width: unset!important;
  }

</style>
