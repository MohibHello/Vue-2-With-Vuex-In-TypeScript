<template>
	<div id="app">
		<div v-if="login">
			<button v-if="!login.isLoggedIn" @click="loginMutation">Login</button>
			<p v-else>{{ login.user }}</p>
		</div>
		<h3>Todos</h3>
		<ul>
			<li v-for="todo in todos" :key="todo.text">{{ todo.text }}</li>
		</ul>
		<h3>Dones</h3>
		<ul>
			<li v-for="done in dones" :key="done.text">{{ done.text }}</li>
		</ul>

		<div>
			Add Todo<input
				type="text"
				v-model="newTodo.text"
				@keyup.enter="addTodo(newTodo)"
			/>
			Add Todo API<input
				type="text"
				v-model="id"
				@keyup.enter="addTodoAsync(id)"
			/>
		</div>

		<h1>Form</h1>
		<ul>
			<li v-for="todo in todos" :key="todo.text">
				<input
					type="checkbox"
					:checked="todo.checked"
					@change="toggleTodo(todo)"
				/>{{ todo.text }}
			</li>
		</ul>
		<hr />
		<ul>
			<li v-for="done in dones" :key="done.text">
				<input
					type="checkbox"
					:checked="done.checked"
					@change="toggleTodo(done)"
				/>{{ done.text }}
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Getter, Mutation, Action, namespace } from "vuex-class";
import { TodoState, LoginState, Todo } from "./store/types";

const TodoGetter = namespace("todos", Getter);
const TodoMutation = namespace("todos", Mutation);
const TodoAction = namespace("todos", Action);

const LoginMutation = namespace("login", Mutation);

@Component
export default class App extends Vue {
	// @State todos: Todo[]
	// @State('todos') piecieOfState: Todo[]
	// @State(state=>state.todos) piecieOfState: Todo[]
	@State login: LoginState;

	// without napespace
	/* 	@Getter todos: TodoState[];
	@Getter dones: TodoState[];

	@Mutation addTodo: any;
	@Mutation toggleTodo: any;

	@Mutation("login") loginMutation: any;

	@Action addTodoAsync: any; */

	//with namespace
	@TodoGetter todos: TodoState[];
	@TodoGetter dones: TodoState[];
	@TodoMutation addTodo: any;
	@TodoMutation toggleTodo: any;
	@TodoAction addTodoAsync: any;

	@LoginMutation('login') loginMutation: any;

	newTodo: Todo = {
		text: "",
		checked: false,
	};

	id = "1";
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
