<template>
	<div>
		<h1 class="title">{{title}}</h1>
		<router-link to="/">Back</router-link>
	</div>
</template>

<script>
	export default {
		name: "test-screen",
		data() {
			return {
				title: "TestScreen"
			};
		}
	};
</script>

<style lang="css" scoped>
	.title {
		color: greenyellow;
	}
</style>