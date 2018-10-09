import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import './assets/css/main.css'
import {setCity} from "./utils/localStorge";
import VueAreaLinkage from 'vue-area-linkage'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText}
    from '@fortawesome/vue-fontawesome'

library.add(fas, far, fab);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);

Vue.config.productionTip = false;
Vue.use(VueAreaLinkage);
setCity(["110000"]);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
