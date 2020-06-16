import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//video.js全局引入
import Videojs from 'video.js';
import 'video.js/dist/video-js.css';

//flex布局样式
import './css/base.css'
//字体引入
import './css/font.css'

//自适应
// import 'lib-flexible'
import './flexible.js'
import './css/fit.css'

Vue.config.productionTip = false
Vue.prototype.$video = Videojs

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
