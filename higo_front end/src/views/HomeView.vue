<template>
    <van-search v-model="searchBar"
                placeholder="Please enter a search keyword"
                show-action>
        <template #action>
            <div v-on:click="onSearch">Search</div>
        </template>
    </van-search>
    <div class="main" id="main">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <img src="../assets/banner/1.jpg"/>
            </van-swipe-item>
            <van-swipe-item>
                <img src="../assets/banner/2.jpg"/>
            </van-swipe-item>
            <van-swipe-item>
                <img src="../assets/banner/3.jpg"/>
            </van-swipe-item>
        </van-swipe>
        <template v-if="goodsPage !== null">
            <div class="goodses">
                <router-link v-for="(goods, index) in goodsPage.list"
                             v-bind:to="'/goods/' + goods.id" v-bind:key="'goodses'+index">
                    <img v-bind:src="goods.image"/>
                    <div class="goodsnewseinfo">
                        <div class="goodsprice">
                            ¥{{goods.price}}
                        </div>
                        <div class="goodsname">{{goods.name}}</div>
                    </div>
                </router-link>
            </div>
            <van-pagination v-model="goodsPage.pageNum"
                            :page-count="goodsPage.pages"
                            :total-items="goodsPage.size"
                            mode="simple"
                            @change="getGoodsesList"
            />
        </template>
        <van-loading v-else />
    </div>
    <appTabbar/>
</template>

<script setup>
    import appTabbar from '@/components/AppTabbar';
    import {ref, getCurrentInstance} from 'vue';

    const {proxy} = getCurrentInstance();

    const searchBar = ref('');
    const goodsPage = ref(null);


    const getGoodsesList = () => {
        proxy.request.post("/api/product/list",{
                keyword:searchBar.value,
                pageNum:goodsPage.value !== null ? goodsPage.value.pageNum : 1
            })
            .then(response => {
                goodsPage.value = response.data.data;
                document.querySelector("#main").scrollTop=0;
            });
    };

    const onSearch = () => {
        goodsPage.value.pageNum = 1;
        getGoodsesList();
    }

    getGoodsesList();

</script>

<style lang="scss" scoped>
    .van-swipe {
        img {
            width: 100%;
        }
    }

    .goodses {
        display: grid;
        grid-template-columns: 50% 50%;

        a {
            padding: 0.6rem;

            img {
                width: 100%;
            }

            .goodsnewseinfo {

                .goodsprice {
                    color: red;
                    font-size: 1.4rem;
                    font-weight: bold;
                }

                .goodsname {
                    height: 40px;
                    overflow: hidden;
                    margin-top: 5px;
                    font-size: 0.9rem;
                }
            }
        }
    }
</style>
