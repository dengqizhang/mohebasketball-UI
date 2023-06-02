import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './routers'
import Vant from 'vant'
import "vant/lib/index.css"
import * as echarts from 'echarts'
const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.config.globalProperties.$echarts = echarts
app.use(pinia)
app.use(ElementPlus)
app.use(Vant)
app.mount('#app')
