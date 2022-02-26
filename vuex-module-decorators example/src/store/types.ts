export interface RootState {
  count: string
  todos: TodoState
  login: LoginState
}

export interface TodoState {
  todos: Todo[];
}

export interface Todo {
  text: string;
  checked: boolean;
}

export interface LoginState {
  user: string;
  isLoggedIn: boolean;
}
