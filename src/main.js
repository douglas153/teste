import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueResource from 'vue-resource'
import  { store } from './store/store'

Vue.config.productionTip = false
Vue.use(VueResource);

export const bus = new Vue(); 

new Vue({
  store, 
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')



