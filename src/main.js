import Vue from 'vue'
import App from './App.vue'
import vuetify from './config/vuetify'
import i18n from './config/i18n'

//import Vuetify from 'vuetify'
//import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import router from './router'

Vue.config.productionTip = false


import Vuex from 'vuex'
import store from './store/index'

Vue.use(Vuex)

import VueChartkick from 'vue-chartkick';
import Chart from 'chart.js';
Vue.use(VueChartkick, { adapter: Chart });

/*import VueGoogleCharts from 'vue-google-charts'

Vue.use(VueGoogleCharts)

Vue.config.productionTip = false

import AuthApi from './api/auth-api'
import RequestApi from './api/request-api'
import Func from './api/global-functions'

Vue.prototype.$authApi = new AuthApi(store)
Vue.prototype.$requestApi = new RequestApi(store)
Vue.prototype.$GFunctions = new Func(store)*/

new Vue({
  router,
  vuetify,
  i18n,
  store,
  render: h => h(App),
}).$mount('#app')

