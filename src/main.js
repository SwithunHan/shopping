import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import './assets/css/main.css'
import api from './api'
import VueAreaLinkage from 'vue-area-linkage'
Vue.config.productionTip = false;
Vue.use(VueAreaLinkage);
// Vue.use(api);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
