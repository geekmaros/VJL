import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app/core/App.vue'
// import router from './router'
import autoLoadRoute from "./app/core/routes";

import './assets/main.css'

// const app = createApp(App)
//
// app.use(createPinia())
// app.use(router)
//
// app.mount('#app')

const AppInit = async () => {
    const app = createApp(App)
    // Autoload Route
    const router = await autoLoadRoute();

    app.use(createPinia())
    app.use(router)

    app.mount('#app')
}
(async function () {
    await AppInit();
})();
