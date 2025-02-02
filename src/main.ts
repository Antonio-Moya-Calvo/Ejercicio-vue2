import '@/assets/styles.scss/reset.scss'
import '@/assets/styles.scss/variables.scss'
import '@fontsource-variable/grandstander'
import '@fontsource/poppins';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
