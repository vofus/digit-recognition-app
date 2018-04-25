
<template>
	<div>
		<h1 class="title">{{title}}</h1>
		<button @click="startLearn">Learn</button>
		<router-link to="/">Back</router-link>
	</div>
</template>

<script>
	import {mapState, mapMutations} from "vuex";

	export default {
		name: "main-screen",
		data() {
			return {
				title: "MainScreen"
			};
		},
		computed: {
			...mapState("Network", {
				network: (state) => state.network
			})
		},
		methods: {
			...mapMutations("Network", {
				setNetwork: "SET_NETWORK"
			}),
			startLearn() {
				this.setNetwork({
					LR: 0.3,
					inputs: [],
					hidden: [],
					outputs: []
				});
			}
		}
	};
</script>

<style lang="css" scoped>
	.title {
		color: lightcoral;
	}
</style>
