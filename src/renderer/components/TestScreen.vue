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
				<div v-if="results" class="row">
					<div class="col s12">
						<div class="final-result__title">
							<span>Итоговый результат:</span>
						</div>
						<div v-for="(item, index) in results" :key="index" class="final-result__cell">
							<span class="col s6">Цифра: {{ item.digit }}</span>
							<span class="col s6">{{ item.totalPercent | toPercent }}%</span>
						</div>
					</div>
				</div>
			</div>

			<div class="col s8">
				<div class="row">
					<div class="col s12">
						
					</div>
					<div v-if="results" class="col s12">
						<div v-for="(item, index) in results" :key="index">
							<table>
								<thead>
									<tr>
										<th>Номер тестового примера</th>
										<th>Ввод</th>
										<th>Результат</th>
										<th>Точность, %</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(digitItem, digitIndex) in item.results" :key="digitIndex">
										<td>{{ digitIndex + 1 }}</td>
										<td>{{ item.digit }}</td>
										<td>{{ digitItem.recognition }}</td>
										<td>{{ digitItem.recognitionPercent | toPercent }}</td>
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

	.final-result__title {
		height: 32px;
    border-bottom: 1px solid grey;
    margin-bottom: 8px;
    margin-top: 16px;
	}

	.final-result__cell {
		display: flex;
		align-items: center;
		height: 24px;
	}
</style>