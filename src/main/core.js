import {ipcMain, dialog} from "electron";
import {Network, DigitRecognition} from "digits-recognition-neural-network";

let digitNetwork = null;

ipcMain.on("save-dialog-request", saveDialogOpen);
ipcMain.on("load-dialog-request", loadDialogOpen);
ipcMain.on("create-network-request", createNetwork);
ipcMain.on("auto-test-request", autoTest);
ipcMain.on("recognize-request", recognize);

const MessageTypes = {
	SUCCESS: "success",
	ERROR: "error"
};

class Message {
	type = null;
	data = null;

	constructor(type, data) {
		this.type = type;
		this.data = data;
	}
}

function saveDialogOpen(event) {
	const {SUCCESS, ERROR} = MessageTypes;

	dialog.showSaveDialog({
		title: "Сохранение модели нейронной сети",
		buttonLabel: "Сохранить",
		filters: [{name: "JSON", extensions: ["json"]}]
	}, async (fileName) => {
		if (!digitNetwork) {
			return event.sender.send("save-dialog", new Message(ERROR, {message: "Необходимо задать сеть"}));
		}

		if (!Boolean(fileName)) {
			return event.sender.send("save-dialog-response", null);
		}

		try {
			await Network.serialize(digitNetwork.network, fileName);
			event.sender.send("save-dialog-response", new Message(SUCCESS, {message: "Сеть успешно сохранена"}));
		} catch (err) {
			console.error(err);
			event.sender.send("save-dialog-response", new Message(ERROR, {message: "Произошла ошибка при сохранении сети"}));
		}
	});
}

function loadDialogOpen(event) {
	const {SUCCESS, ERROR} = MessageTypes;

	dialog.showOpenDialog({
		title: "Загрузка модели нейронной сети",
		buttonLabel: "Загрузить",
		filters: [{name: "JSON", extensions: ["json"]}],
		properties: ["openFile"]
	}, async (filePaths = []) => {
		if (!Boolean(filePaths[0])) {
			return event.sender.send("load-dialog-response", null);
		}

		try {
			const network = await Network.deserialize(filePaths[0]);
			digitNetwork = new DigitRecognition(network);
			event.sender.send("load-dialog-response", new Message(SUCCESS, {message: "Сеть успешно загружена"}));
		} catch (err) {
			event.sender.send("load-dialog-response", new Message(ERROR, {message: "Произошла ошибка при загрузке сети"}));
		}
	});
}

async function createNetwork(event, config) {
	const {hiddenSize, learningRate, epochs, trainingSize} = config;
	const {SUCCESS, ERROR} = MessageTypes;

	try {
		digitNetwork = new DigitRecognition(hiddenSize, learningRate);
		await digitNetwork.train(trainingSize, epochs);
		event.sender.send("create-network-response", new Message(SUCCESS, {message: "Сеть успешно создана"}));
	} catch (err) {
		event.sender.send("create-network-response", new Message(ERROR, {message: "Произошла ошибка при создании сети"}));
	}
}

async function autoTest(event, eachDigitCount) {
	const {SUCCESS, ERROR} = MessageTypes;

	if (!digitNetwork) {
		return event.sender.send("auto-test-response", new Message(ERROR, {message: "Необходимо задать сеть"}));
	}

	try {
		console.log("is number: ", typeof eachDigitCount === "number");
		console.log("each: ", eachDigitCount);
		const result = await digitNetwork.autoTest(parseInt(eachDigitCount, 10) || 50);

		// for (let i = 0; i < result.length; ++i) {
		// 	console.log(result[i]);
		// }

		event.sender.send("auto-test-response", new Message(SUCCESS, result));
	} catch (err) {
		console.error(err);
		event.sender.send("auto-test-response", new Message(ERROR, {message: "Произошла ошибка при тестировании сети"}));
	}
}

async function recognize(event, inputs) {
	const {SUCCESS, ERROR} = MessageTypes;

	if (!digitNetwork) {
		return event.sender.send("recognize-response", new Message(ERROR, {message: "Необходимо задать сеть"}));
	}

	try {
		const result = await digitNetwork.manualTest(inputs);
		event.sender.send("recognize-response", new Message(SUCCESS, result));
	} catch (err) {
		event.sender.send("recognize-response", new Message(ERROR, {message: "Произошла ошибка при опросе сети"}));
	}
}