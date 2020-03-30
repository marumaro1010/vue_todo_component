import Vue from 'vue'
import Apphaha from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false
window.bus = new Vue();

new Vue({
  render: h => h(Apphaha),
}).$mount('#app')
