<template>
	<div>
		<button type="button" @click="sumUp">{{ count.acum }}</button>
	</div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";

@Component
export default class Count extends Vue {
	count: any = {
		acum: 0,
	};

	@Watch("count", { deep: true })
	watchCount(newVal: any, oldVal: any) {
		console.log("New-", newVal, " oldVal-", oldVal);
	}

	sumUp() {
		this.count.acum++;
	}
}
</script>
