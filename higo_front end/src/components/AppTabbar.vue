<template>
    <van-tabbar v-model="active" route>
        <van-tabbar-item icon="home-o" to="/">Home</van-tabbar-item>
        <van-tabbar-item icon="cart-o" to="/cart">Cart</van-tabbar-item>
        <van-tabbar-item icon="user-o" to="/user">User</van-tabbar-item>
    </van-tabbar>
</template>

<script setup>
    import {ref} from "vue";
    const active = ref(0);
</script>
