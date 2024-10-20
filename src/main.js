import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './assets/index'
import "./assets/style.css" //별도 css 파일
import { createNaverMap } from "vue3-naver-maps";

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(createNaverMap, {
    clientId: "559hrnvb1h", // Required
	})
import naver from "vue-naver-maps"
app.use(naver,{
    clientID: "559hrnvb1h"
})
app.mount('#app')