import Vue from 'vue'
import Apphaha from './App.vue'

Vue.config.productionTip = false
window.bus = new Vue();

new Vue({
  render: h => h(Apphaha),
}).$mount('#app')
