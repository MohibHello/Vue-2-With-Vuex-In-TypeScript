<template>
	<div id="app">
		<div v-if="loginState">
			<button v-if="!isLoggedIn" @click="loginState.login">Login</button>
			<p v-else>{{ loggedInUser }}</p>
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
				@keyup.enter="todoState.addTodo(newTodo)"
			/>
			Add Todo API<input
				type="text"
				v-model="id"
				@keyup.enter="todoState.addTodoAsync(id)"
			/>
		</div>

		<h1>Form</h1>
		<ul>
			<li v-for="todo in todos" :key="todo.text">
				<input
					type="checkbox"
					:checked="todo.checked"
					@change="todoState.toggleTodo(todo)"
				/>{{ todo.text }}
			</li>
		</ul>
		<hr />
		<ul>
			<li v-for="done in dones" :key="done.text">
				<input
					type="checkbox"
					:checked="done.checked"
					@change="todoState.toggleTodo(done)"
				/>{{ done.text }}
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Todo } from "./store/types";
import loginModule from "@/store/modules/login";
import todoModule from "@/store/todos";

@Component
export default class App extends Vue {

	newTodo: Todo = {
		text: "",
		checked: false,
	};

	id = "1";

	todoState = todoModule;
	loginState = loginModule;

	get todos() {
		return todoModule.getTodos;
	}

	get dones() {
		return todoModule.getDones;
	}

	get loggedInUser() {
		return loginModule.user;
	}

	get isLoggedIn() {
		return loginModule.isLoggedIn;
	}
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
