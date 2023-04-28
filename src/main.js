import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import '@mdi/font/css/materialdesignicons.css'

loadFonts()

const vuetify = createVuetify({
  icons: {
    iconfont: 'mdi', // 使用するアイコンフォントを指定
  },
})

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
