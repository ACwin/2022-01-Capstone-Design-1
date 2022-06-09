<template>
    <router-view/>
</template>

<style lang="scss">

    :root {
        --van-primary-color: var(--van-blue)!important;
    }

    html, body {
        height: 100%;

        #app {
            height: 100%;
            display: flex;
            flex-direction: column;

            .main {
                flex: 1;
                overflow: auto;
            }

        }
    }

    .loginPanel{
        flex: 1;
        overflow: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .logo{
            width: 40%;
            margin-bottom: 4rem;
        }
    }

    .van-tabbar--fixed,.van-action-bar{
        position: unset!important;
    }

    .van-toast__text{
        word-break: keep-all;
    }

    .van-cell__value{
        border-bottom: 1px solid lightgray!important;
    }
</style>
