import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './css'
import './assets/iconfont/iconfont.css'
import './directives'
import './scss'
import plugin_toast from './plugin/toast'
import plugin_themeColor from './plugin/themeColors'

Vue.use(plugin_toast)
Vue.use(plugin_themeColor)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
