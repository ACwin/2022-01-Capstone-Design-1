<template>
    <van-nav-bar
            title="Car"
            left-arrow
            @click-left="onClickLeft"
    />
    <div class="main">
        <div class="caritems">
            <div v-for="(data, index) in datas" v-bind:key="index" class="caritem">
                <van-checkbox v-model.value="data.selected" class="chk" @change="onChkChange"/>
                <img v-bind:src="data.productImage"/>
                <div class="goodsnewseinfo">
                    <div class="goodsname">{{data.productName}}</div>
                    <div class="price">
                        price: ¥{{data.price}}&nbsp;&nbsp;
                        totalPrice:
                        <span class="goodsprice">
                            ¥{{data.totalPrice}}
                        </span>
                    </div>
                    <div class="tool">
                        <input type="hidden" v-bind:value="data.productId" class="dataProductId">
                        <van-stepper v-model.value="data.quantity" theme="round" button-size="22" disable-input
                                     :before-change="beforeChange" />
                        <van-button type="danger" size="small" v-on:click="deleteItem">Delete</van-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <van-submit-bar :price="calcTotalPrice" button-text="Submit order" label="Total"
                    @submit="onSubmit" :disabled="calcTotalPrice === 0">
        <van-checkbox v-model="checkedAll" @change="onChkChangeAll">All</van-checkbox>
    </van-submit-bar>
</template>

<script setup>
    import {ref, getCurrentInstance,computed} from 'vue';
    import {Toast,Dialog } from "vant";
    import { useRouter } from 'vue-router';
    import qs from "qs";

    const {proxy} = getCurrentInstance();
    const router = useRouter();

    const datas = ref([]);
    const checkedAll = ref(true);

    const onClickLeft = () => history.back();
    const getCardataList = () => {
        proxy.request.get("/api/cart/list")
            .then(response => {
                if (response.data.status === 10000) {
                    datas.value = response.data.data;
                } else if(response.data.status === 10007) {
                    Toast.fail("Please login first");
                    router.replace("/login");
                } else {
                    Toast.fail(response.data.msg);
                }
            });
    };


    const beforeChange = (value) => {
        Toast.loading({ forbidClick: true });
        proxy.request.post("/api/cart/update",
            qs.stringify({
                productId: parseInt(event.currentTarget.parentElement.parentElement.querySelector(".dataProductId").value),
                count:value
            }))
            .then(response => {
                Toast.clear();
                if (response.data.status === 10000) {
                    getCardataList();
                } else {
                    Toast.fail(response.data.msg);
                }
            });
    };

    const deleteItem = () => {
        const productId = parseInt(event.currentTarget.parentElement.parentElement.querySelector(".dataProductId").value);
        Dialog.confirm({
            title: 'Are you sure to delete this data?',
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel'
        })
            .then(() => {
                Toast.loading({ forbidClick: true });
                proxy.request.post("/api/cart/delete",
                    qs.stringify({
                        productId
                    }))
                    .then(response => {
                        Toast.clear();
                        if (response.data.status === 10000) {
                            getCardataList();
                        } else {
                            Toast.fail(response.data.msg);
                        }
                    });
            })
            .catch(() => {
            });
    }

    const onChkChange = (checked) => {
        if (event.currentTarget.parentElement.parentElement.querySelector(".dataProductId") !== null) {
            const productId = parseInt(event.currentTarget.parentElement.parentElement.querySelector(".dataProductId").value);
            for (let data of datas.value) {
                if (data.id === productId)
                    data.selected = checked;
            }
        } else {
            for (let data of datas.value) {
                data.selected = checked;
            }
        }
    }

    const onChkChangeAll = (checked) => {
        for (let data of datas.value) {
            data.selected = checked;
        }
    }

    const onSubmit = () => {
        let items = [];
        for (let data of datas.value) {
            if (data.selected)
                items.push(data.id);
        }
        Toast.success("Checkout success");
        console.log("模拟提交到下订单接口，提交的购物车数据ID数组：",JSON.stringify(items),"后台可以获取这数组，并根据ID查询购物车数据，并下单。注意这里不能传递数量、价格等，数量价格只能在后端查询！！！");
    }

    const calcTotalPrice = computed(() => {
        let total = 0;
        for (let data of datas.value) {
            if (data.selected)
                total += data.totalPrice;
        }
        return total * 100;
    });

    getCardataList();

</script>

<style lang="scss" scoped>

    .caritems{
        height: 100%;
        background: aliceblue;
        padding: 0.5rem;

        .caritem{
            display: flex;
            background: white;
            border-radius: 0.5rem;
            padding: 0.5rem;
            margin: 0.3rem 0;

            .chk{
                width: 2.5rem;
            }

            img{
                width: 6rem;
                height: 6rem;
                margin: 0 1rem;
            }
            .goodsnewseinfo{
                width: 100%;
                .price{
                    margin-top: 1rem;
                    .goodsprice {
                        font-size: 1rem;
                        font-weight: bold;
                        color: red;
                    }
                }
                .tool{
                    margin-top: 1rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
            }
        }

    }

</style>
