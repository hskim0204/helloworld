import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './assets/index'
import "./assets/style.css" //별도 css 파일

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')