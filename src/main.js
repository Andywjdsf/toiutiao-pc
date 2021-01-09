import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

//加载element的组件库
import ElementUI from 'element-ui'

//加载element的组件库的样式
import 'element-ui/lib/theme-chalk/index.css'


//加载全局样式文件
import './styles/index.less'

//全局注册 element 组件库
Vue.use(ElementUI)

Vue.config.productionTip = false

//创建Vue根实例
//把 router 配置到 根实例中
//通过 renter 方法把APP根组件渲染到#app 入口节点

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
