import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 可以忽略，生产环境时候是否有提示
Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
