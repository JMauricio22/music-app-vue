import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import App from './App.vue'
import EventBus from './plugins/event-bus'
import filters from './filters/filters'
import blurDirective from './directives/blur'
import store from './store'

const router = createRouter({
  routes,
  history: createWebHistory()
})

const app = createApp(App, { router })
app.config.globalProperties.$filters = filters
app.use(EventBus)
app.use(router)
app.use(blurDirective)
app.use(store)
app.mount('#app')
