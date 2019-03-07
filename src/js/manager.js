var tree = {
	W: {
		dialogue: "hello world",
		actions: [
			{
				type: "popup",
				amount: 5
			},
			{
				type: "set difficulty",
				difficulty: "novice"
			}
		]
	},
	WW: {
		dialogue: "lorem ipsum",
		actions: []
	},
	WLWWL: {
		dialogue: "hello world",
		actions: [
			{
				type: "upgrade",
				state: 2
			}
		]
	},
	"": {
		dialogue: "hello world 123",
		actions: [
			{
				type: "init"
			}
		]
	}
};


var globals = {
	history: ""
};


var playerToken = "X";
var difficulty = "blind";

function start() {
	console.log("starting game - difficulty: " + difficulty + " playerToken: " + playerToken);
	ui.clear();
	var aiPlayer = new AI(difficulty, playerToken);
	globals.game = new Game(aiPlayer);
	aiPlayer.plays(globals.game);
	globals.game.start();
}



function readTree() {
	let currentItem = tree[globals.history];

	if (currentItem.dialogue) {
		// TODO: Print dialogue on screen
		console.log("dialogue", currentItem.dialogue);
	}

	for (let action of currentItem.actions) {
		switch (action.type) {
			case "upgrade":
				console.log("Upgrade");
				break;
			case "set difficulty": 
				console.log("set difficulty", action.difficulty);
				difficulty = action.difficulty;
				break;
			default:
				console.log("unknown action", action.type);
		}
	}
}

globals.onWin = function(outcome) {
	let aiToken = globals.game.playerToken === "X" ? "O" : "X";
	if (outcome === globals.game.playerToken) {
		globals.history += "W";
	} else if (outcome === aiToken) {
		globals.history += "L";
	}
	readTree();
};