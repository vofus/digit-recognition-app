<template>
	<div class="wrapper">
		<div class="row">
			<div class="col s4">
				<div class="row">
					<div class="input-field col s12">
						<input id="lrField" type="number" v-model.number="learningRate">
						<label for="lrField">Скорость обучения</label>
					</div>

					<div class="input-field col s12">
						<input id="hiddenSizeField" type="number" v-model.number="hiddenSize">
						<label for="hiddenSizeField">Количество нейронов в скрытом слое</label>
					</div>

					<div class="input-field col s12">
						<input id="epochsField" type="number" v-model.number="epochs">
						<label for="epochsField">Количество эпох обучения</label>
					</div>

					<div class="input-field col s12">
						<input id="trainingSizeField" type="number" v-model.number="trainingSize">
						<label for="trainingSizeField">Размер тренировочного набора</label>
					</div>
				</div>

				<div class="row">
					<div class="col s12">
						<button @click="startLearn" class="btn orange waves-effect waves-light btn-small" :class="{'disabled': false}">Обучить</button>
					</div>
				</div>
			</div>

			<div class="col s8">
				<div class="row">
					<div v-show="inLearning" class="col s12">
						<div class="progress">
							<div class="indeterminate"></div>
						</div>
					</div>
					<div class="col s12">
						<button @click="save" class="btn orange waves-effect waves-light btn-small">Сохранить</button>
						<button @click="load" class="btn blue-grey waves-effect waves-light btn-small">Загрузить</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState, mapMutations, mapActions} from "vuex";
	import {ipcRenderer} from "electron";


	export default {
		name: "main-screen",
		data() {
			return {
				title: "MainScreen",
				learningRate: 0.3,
				hiddenSize: 100,
				epochs: 50,
				trainingSize: 1000
			};
		},
		computed: {
			...mapState("Network", {
				network: (state) => state.network,
				inLearning: (state) => state.inLearning
			})
		},
		methods: {
			...mapMutations("Network", {
				setNetwork: "SET_NETWORK"
			}),
			...mapActions("Network", [
				"setLearning"
			]),
			startLearn() {
				this.setLearning(true);

				ipcRenderer.send("create-network-request", {
					hiddenSize: this.hiddenSize,
					learningRate: this.learningRate,
					epochs: this.epochs,
					trainingSize: this.trainingSize
				});

				ipcRenderer.once("create-network-response", (event, res) => {
					if (res.type === "success") {
						console.log(res.data.message);
					}
					this.setLearning(false);
				});
			},
			save() {
				ipcRenderer.send("save-dialog-request");
				ipcRenderer.once("save-dialog-response", (event, res) => {
					console.log("EVENT: ", event);
					console.log("DATA: ", res);
				});
			},
			load() {
				ipcRenderer.send("load-dialog-request");
				ipcRenderer.once("load-dialog-response", (event, res) => {
					console.log("EVENT: ", event);
					console.log("DATA: ", res);
				});
			}
		}
	};
</script>

<style lang="css" scoped>
	.wrapper {
		padding: 24px;
	}
</style>
