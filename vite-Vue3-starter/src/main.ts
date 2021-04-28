import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index' // 挂载路由
import store from './store/index' // 挂载Vuex配置
import ElementPlus from 'element-plus' // 挂载UI框架
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(router).mount('#app')
createApp(App).use(store).mount('#app')
createApp(App).use(ElementPlus).mount('#app')
