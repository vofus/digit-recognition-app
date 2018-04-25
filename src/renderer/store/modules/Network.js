const state = {
	network: null,
	inLerning: false
};

const mutations = {
	SET_NETWORK($state, network) {
		$state.network = network;
	}
};

export default {
	namespaced: true,
	state,
	mutations
};
