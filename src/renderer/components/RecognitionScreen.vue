<template>
	<div class="wrapper">
		<div class="row">
			<div class="col s6">
				<canvas id="sketchpad" width="280" height="280">Sorry, your browser is not supported.</canvas>
        <canvas id="thumbnail" width="28" height="28">Sorry, your browser is not supported.</canvas>
			</div>
			<div class="col s6">
				<div id="result">{{ result }}</div>
				<div>{{ percent }}</div>
			</div>
    </div>
    <div class="row">
			<div class="col s12">
    		<button @click="recognize" type="button" class="btn orange waves-effect waves-light btn-small">Распознать</button>
				<button @click="clear" type="button" class="btn blue-grey waves-effect waves-light btn-small">Очистить</button>
			</div>
		</div>
	</div>
</template>

<script>
	import {ipcRenderer} from "electron";
	import {Drawer} from "../utils/sketchpad";

	export default {
		name: "recognition-screen",
		data() {
			return {
				result: null,
				percent: null,
				drawer: null
			};
		},
		mounted() {
			this.drawer = new Drawer("sketchpad", "thumbnail");
		},
		methods: {
			clear(event) {
				event.preventDefault();
				this.result = null;
				this.percent = null;
				this.drawer.clear();
			},
			recognize(event) {
				const inputs = this.drawer.recognize(event);

				ipcRenderer.send("recognize-request", inputs);
				ipcRenderer.once("recognize-response", ($event, res) => {
					const {type, data} = res;

					if (type === "success") {
						this.result = data.digit;
						this.percent = data.percent;
					}

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

	#sketchpad {
		border: 4px solid #009688;
	}

	#thumbnail {
		border: 1px solid #009688;
	}

	#result {
		width: 120px;
		height: 280px;
		text-align: center;
		font-size: 160px;
		line-height: 1;
	}
</style>