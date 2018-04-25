<template>
	<div>
		<h1 class="title">{{title}}</h1>
		<router-link to="/">Back</router-link>
	</div>
</template>

<script>
	export default {
		name: "recognition-screen",
		data() {
			return {
				title: "RecognitionScreen"
			};
		}
	};
</script>

<style lang="css" scoped>
	.title {
		color: purple;
	}
</style>