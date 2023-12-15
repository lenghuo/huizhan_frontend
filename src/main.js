import { createApp } from 'vue'
import './style.css'
import './styles/index.css'
// import './styles/common.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
