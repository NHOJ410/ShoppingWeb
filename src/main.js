import { createApp } from 'vue'
import pinia from '@/stores/index.js' // 導入 pinia
import App from './App.vue'
import router from './router'
import '@/styles/common.scss' // css重置樣式

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
