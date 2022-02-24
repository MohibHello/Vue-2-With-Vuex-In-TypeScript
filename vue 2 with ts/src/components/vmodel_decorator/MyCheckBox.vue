<template>
	<div class="hello">
		<input
			type="checkbox"
			:value="value"
			:checked="checked"
			@change="changed"
		/>
		{{ title }}
	</div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Prop, Component, Model } from "vue-property-decorator";

interface MyEvent {
	target: HTMLInputElement;
}

@Component({})
export default class MyCheckBox extends Vue {
	@Prop() title: string;
	@Prop() value: boolean;

	@Prop()
	@Model('change')
	checked: boolean;

	changed(e: MyEvent): void {
		this.$emit('change', e.target.checked);
	}
}
</script>