import { createApp } from 'vue'
import router from './router/router'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js' 
import './interceptors/axios.js'
import store from './store/store'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
