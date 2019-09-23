import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Directives from './directives'
import Vant from 'vant'
import 'vant/lib/index.css'
import '@vant/touch-emulator'
import loading from './components/loading/'
import vMessage from './components/message/'

Vue.use(vMessage)
Vue.use(loading)
Vue.use(Vant)
Vue.use(Directives)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
