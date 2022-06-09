<template>
  <van-nav-bar
          title="Goods"
          left-arrow
          @click-left="onClickLeft"
  />
  <div class="goods" v-if="goods !== null">
    <img v-bind:src="goods.image"/><br/>
    <div class="goodsInfo">
      <div v-text="goods.name" class="goodsName"/>
      <div class="goodsprice">
        ¥{{goods.price}}
      </div>
      <div v-text="goods.detail" class="goodsDetail"/>
    </div>
  </div>
  <van-loading v-else />

  <van-action-bar>
    <van-action-bar-icon icon="chat-o" text="Service" />
    <van-action-bar-icon icon="cart-o" text="Cart" to="/cart" />
    <van-action-bar-icon icon="shop-o" text="Shop" />
    <van-action-bar-button type="danger" text="Add to cart" @click="addToCar" />
  </van-action-bar>

</template>

<script setup>
  import {getCurrentInstance, defineProps, ref} from "vue";
  import { useRouter } from 'vue-router';
  import { Toast } from 'vant';
  import qs from "qs";

  const {proxy} = getCurrentInstance();
  const props = defineProps({
    id: {type: Number, required: true},
  })
  const router = useRouter();

  let goods = ref(null);

  const onClickLeft = () => history.back();

  const getGoodsInfo = () => {
    proxy.request.get("/api/product/detail?id=" + props.id)
            .then(response => {
              goods.value = response.data.data;
            });
  }

  const addToCar = () => {
    Toast.loading({ forbidClick: true });
    proxy.request.post("/api/cart/add",
            qs.stringify({
              productId: parseInt(props.id),
              count:1
            }))
            .then(response => {
              Toast.clear();
              if (response.data.status === 10000) {
                Toast.success("Add success!");
              } else if(response.data.status === 10007) {
                router.push("/login");
              } else {
                Toast.fail(response.data.msg);
              }
            });
  }

  getGoodsInfo();
</script>

<style lang="scss" scoped>
  .goods{
    flex: 1;
    overflow: auto;
    img{
      width: 100%;
    }
    .goodsInfo{
      padding: 0.8rem;

      .goodsName{
        font-size: 1.4rem;
      }
      .goodsprice {
        color: red;
        font-size: 1.4rem;
        font-weight: bold;
        margin-top: 1rem;
      }
      .goodsDetail{
        line-height: 2rem;
      }
    }
  }
</style>
