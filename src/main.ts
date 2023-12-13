import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from "@tanstack/vue-query";
import axiosInstance from './lib'

import App from './App.vue'
import router from './router'

const app = createApp(App)

VueQueryPlugin.install(app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                refetchOnReconnect: 'always',
            }
        }
    }
})
app.use(createPinia())
app.use(router)

app.config.globalProperties.$axios = axiosInstance

app.mount('#app')
