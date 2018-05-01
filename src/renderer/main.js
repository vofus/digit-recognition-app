import Vue from "vue";
import axios from "axios";

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import App from "./App";
import router from "./router";
import store from "./store";

if (!process.env.IS_WEB) {
	Vue.use(require("vue-electron"));
}
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.filter("toPercent", (value) => value * 100);

/* eslint-disable no-new */
new Vue({
	components: {App},
	router,
	store,
	template: "<App/>"
}).$mount("#app");
