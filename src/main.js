import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'

import VueLodash from 'vue-lodash'

// import Lodash from 'lodash'



window._ = require('lodash');

Vue.use(VueLodash)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')