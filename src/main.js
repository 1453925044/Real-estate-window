import Vue from 'vue'
import App from './App'
import router from './router'
import http from './http/http';

// 引入vant ui框架
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// 全局组件的引用
import tabarTop from './components/tabar/tabbar-window-top';
import tabarBottom from './components/tabar/tabbar-window-bottom';
Vue.component('tabarTop', tabarTop);
Vue.component('tabarBottom', tabarBottom);


// 设置rem基准值
import 'lib-flexible/flexible'

Vue.prototype.$http = http;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
