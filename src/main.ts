import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue'
import Icon from '@/components/Icon.vue'
import Button from '@/components/Money/Button.vue'




Vue.config.productionTip = false

Vue.component('Nav', Nav) 
Vue.component('Layout', Layout)
Vue.component('Icon', Icon)
Vue.component('Button', Button)


// record store


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
