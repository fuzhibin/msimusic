import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue3-lazyload'

//已安装事件总线类代码
const app=createApp(App);
  app.use(store).use(router)
  .use(VueLazyLoad, {
    loading: require('./assets/img/lazyload.png'),
    preLoad: 1
  }).mount('#app')

