// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { Button, Cell, Header } from 'mint-ui'
import router from './router'
import 'lib-flexible/flexible.js'

Vue.config.productionTip = false
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
