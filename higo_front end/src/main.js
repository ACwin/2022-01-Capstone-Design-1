import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant';
import configProvider from 'vant';
import request from 'axios'
import 'vant/lib/index.css';

const app = createApp(App)
    .use(store)
    .use(router)
    .use(vant)
    .use(configProvider);

app.config.globalProperties.request = request;

app.mount('#app')


