<template>
	<div class="wrapper">
		<div class="row">
			<div class="col s4">
				<div class="row">
					<div class="input-field col s12">
						<input id="lrField" type="number">
						<label for="lrField">Скорость обучения</label>
					</div>

					<div class="input-field col s12">
						<input id="epochsField" type="number">
						<label for="epochsField">Количество нейронов в скрытом слое</label>
					</div>

					<div class="input-field col s12">
						<input id="epochsField" type="number">
						<label for="epochsField">Количество эпох обучения</label>
					</div>
				</div>

				<div class="row">
					<div class="col s12">
						<button class="btn orange waves-effect waves-light btn-small" :class="{'disabled': false}">Обучить</button>
					</div>
				</div>
			</div>

			<div class="col s8">
				<div class="row">
					<div class="col s12">
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
	import {mapState, mapMutations} from "vuex";
	const {dialog} = require("electron").remote;


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
			},
			save() {
				dialog.showSaveDialog({
					title: "Сохранение модели нейронной сети",
					buttonLabel: "Сохранить",
					filters: [{name: "JSON", extensions: ["json"]}]
				}, (fileName) => {
					console.log("File: ", fileName);
				});
			},
			load() {
				dialog.showOpenDialog({
					title: "Загрузка модели нейронной сети",
					buttonLabel: "Загрузить",
					filters: [{name: "JSON", extensions: ["json"]}],
					properties: ["openFile", "openDirectory"]
				}, (fileNames = []) => {
					console.log("File: ", fileNames[0]);
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
