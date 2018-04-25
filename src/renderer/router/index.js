import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			redirect: "/main"
		},
		{
			path: "/main",
			name: "main",
			component: require("@/components/MainScreen").default
		},
		{
			path: "/test",
			name: "test",
			component: require("@/components/TestScreen").default
		},
		{
			path: "/recognition",
			name: "recognition",
			component: require("@/components/RecognitionScreen").default
		}
	]
});
