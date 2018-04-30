<template>
	<div class="wrapper">
		<div class="row">
			<div class="col s4">
				<div class="row">
					<div class="input-field col s12">
						<input id="eachDigit" type="number" v-model.number="eachDigitCount">
						<label for="eachDigit">Количество тестов для каждой цифры</label>
					</div>
				</div>

				<div class="row">
					<div class="col s12">
						<button @click="startTest" class="btn orange waves-effect waves-light btn-small" :class="{'disabled': false}">Тестировать</button>
					</div>
				</div>
			</div>

			<div class="col s8">
				<div class="row">
					<div class="col s12">

					</div>
					<div v-if="results" class="col s12">
						<div v-for="(item, index) in results" :key="index">
							<span>Цифра: {{ item.digit }}</span>
							<span>Процент распознавания: {{ item.totalPercent }}</span>
							<table>
								<thead>
									<tr>
										<th>Номер</th>
										<th>Распознано</th>
										<th>Точность, %</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(digitItem, digitIndex) in item.results" :key="digitIndex">
										<td>{{ digitIndex + 1 }}</td>
										<td>{{ digitItem.recognition }}</td>
										<td>{{ digitItem.recognitionPercent }}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {ipcRenderer} from "electron";

	export default {
		name: "test-screen",
		data() {
			return {
				eachDigitCount: 50,
				results: null
			};
		},
		methods: {
			startTest() {
				ipcRenderer.send("auto-test-request", {
					eachDigitCount: this.eachDigitCount
				});

				ipcRenderer.once("auto-test-response", (event, res) => {
					const {type, data} = res;
					console.log("RESPONSE: ", res);

					switch (type) {
						case "success": this.results = data; break;
						case "error": console.log(data.message); break;
						default: break;
					}
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