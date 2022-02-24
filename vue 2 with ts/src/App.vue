<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
		<!-- <Home /> -->
		<MyCheckBox :title="checkbox.title" v-model="checkbox.checked" />

    <Count/>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from './components/HelloWorld.vue';
// import Home from "@/components/Hello.vue";
import MyCheckBox from "@/components/vmodel_decorator/MyCheckBox.vue";
import Count from '@/components/watch-decorator/Count.vue'

@Component({
	components: {
		// Home,
		MyCheckBox,
    Count
	},
})
export default class App extends Vue {
	checkbox = {
		title: "Fancy checkbox",
		value: "checkbox-id",
		checked: true,
	};
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
