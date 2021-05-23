import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCZjQKE0jqfkxZBP3hVjVeWb50jFohWOpY',
    libraries: 'places',
  }
});
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
