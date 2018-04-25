<template>
	<div id="app">
		<nav>
			<router-link to="/main">main</router-link>
			<router-link to="/test">test</router-link>
			<router-link to="/recognition">recognition</router-link>
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: "digit-recognition-app"
	};
</script>
