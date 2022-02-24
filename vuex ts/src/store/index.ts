// import { login } from './modules/login';
import { todos } from './todos';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
// state:{
//   count:'t'
// },
 modules:{
   todos
 }
});
