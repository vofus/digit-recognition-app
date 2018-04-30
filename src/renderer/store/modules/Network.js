const state = {
	network: null,
	inLearning: false
};

const mutations = {
	SET_NETWORK($state, network) {
		$state.network = network;
	},
	SET_LEARNING($state, inLearning) {
		$state.inLearning = inLearning;
	}
};

const actions = {
	async setLearning({commit}, inLearning) {
		commit("SET_LEARNING", inLearning);
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions
};
