const state = {
	main: 0
};

const mutations = {
	DECREMENT_MAIN_COUNTER($state) {
		$state.main--;
	},
	INCREMENT_MAIN_COUNTER($state) {
		$state.main++;
	}
};

const actions = {
	someAsyncTask({commit}) {
		// do something async
		setTimeout(() => {
			commit("INCREMENT_MAIN_COUNTER");
		}, 3000);
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions
};
