import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import router from './routers'

// import { BootstrapVue,BootstrapVueIcons} from 'bootstrap-vue'
const app = createApp(App)
// app.use(BootstrapVue)
// app.vue(BootstrapVueIcons)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
