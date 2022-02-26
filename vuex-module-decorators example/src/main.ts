import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

const load =true;

// load module at runtime
/* if(!load) {
  store.registerModule('login',login)
} */

//lazy load module
// inorder to make ts understand import function 
//change module:'esnext' in tsconfig.json 

// if (load) {
//   import('./store/modules/login').then((login:any) =>{
//     store.registerModule('login',login)
//   })
// }

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
