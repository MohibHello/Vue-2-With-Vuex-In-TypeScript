import { ActionTree, GetterTree, MutationTree, Module } from 'vuex';
import { TodoState, RootState, Todo } from './types';

export const state: TodoState = {
  todos: [
    {
      text: 'Buy Milk',
      checked: false,
    },
    {
      text: 'Go Shopping',
      checked: true,
    },
    {
      text: 'Get Haircut',
      checked: true,
    },
  ],
};

export const getters: GetterTree<TodoState, RootState> = {
  todos: (state, getters, rootState) =>
    state.todos.filter((todo) => !todo.checked),
  dones: (state) => state.todos.filter((todo) => todo.checked),
};

export const mutations: MutationTree<TodoState> = {
  addTodo(state, newTodo) {
    const todoCopy = Object.assign({}, newTodo);
    state.todos.push(todoCopy);
  },
  toggleTodo(state, todo) {
    todo.checked = !todo.checked;
  },
};

export const actions: ActionTree<TodoState, RootState> = {
  addTodoAsync({ commit, rootState }, id) {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
      .then((data) => data.json())
      .then((item) => {
        const todo: Todo = {
          checked: false,
          text: rootState.login.user + ':' + item.title,
        };
        commit('addTodo', todo);
      });
  },
};

export const todos: Module<TodoState, RootState> = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
