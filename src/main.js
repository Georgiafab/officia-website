import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'element-plus/es/components/pagination/style/css'
import 'element-plus/es/components/form/style/css'
import 'element-plus/es/components/form-item/style/css'
import 'element-plus/es/components/input/style/css'
import 'element-plus/es/components/dialog/style/css'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/tooltip/style/css'

import { ElPagination, ElForm, ElFormItem, ElInput, ElDialog, ElTooltip } from 'element-plus'

import './assets/main.scss'

const app = createApp(App)

app.use(router).use(ElPagination).use(ElForm).use(ElFormItem).use(ElInput).use(ElDialog).use(ElTooltip)


router.afterEach(route => {
    window.scrollTo(0, 0)
    
})
app.mount('#app')
