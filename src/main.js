import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueLazyLoad from 'vue3-lazyload'

createApp(App)
  .use(store)
  .use(router)
  .use(VueLazyLoad,{
    loading: require('./assets/img/lazyload.png'),
    preLoad:1
  })
  .mount('#app')
