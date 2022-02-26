import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export interface IStoreType {
  todos: any,
  login:any
}

const Store = new Vuex.Store<IStoreType>({
  strict: false
});

export default Store;
