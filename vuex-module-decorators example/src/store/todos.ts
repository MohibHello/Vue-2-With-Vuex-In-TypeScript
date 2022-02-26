import { Todo as TodoType } from './types';
import {
  Module,
  VuexModule,
  Mutation,
  MutationAction,
  getModule,
} from 'vuex-module-decorators';
import store from '../store/';

@Module({ dynamic: true, name: 'Todos', namespaced: true, store })
class TodoModule extends VuexModule {
  //state
  todos = [
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
  ];

  //getter
  get getTodos() {
    return this.todos.filter((todo) => !todo.checked);
  }

  //getter
  get getDones() {
    return this.todos.filter((todo) => todo.checked);
  }

  @Mutation
  addTodo(newTodo: TodoType) {
    const todoCopy: TodoType = Object.assign({}, newTodo);
    this.todos.push(todoCopy);
  }

  @Mutation
  toggleTodo(todo: TodoType) {
    todo.checked = !todo.checked;
  }

  @MutationAction({ mutate: ['todos'] })
  async addTodoAsync(id: any): Promise<any> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
      .then((data) => data.json())
      .then((item) => {
        const todo = {
          checked: false,
          text: item.title,
          // text: rootState.login.user + ':' + item.title,
        };
        return todo;
      });
    // Note: when you return it reinitialize the todo memeber
    return {
      todos: [...this.todos, res],
    };
  }
}

export default getModule(TodoModule);
