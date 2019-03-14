var tree = {
	W: {
		dialogue: "Hah, I see what you were trying to do...try again",
		actions: [
			{
				type: "set difficulty",
				difficulty: "novice"
			}
		]
	},
	L: {
		dialogue: "Yeesh, cant win the simplest game known to man. You dont even deserve to play with someone of my stature",
		actions: []
	},
	LW: {
		dialogue: "Hah, I see what you were trying to do...try again",
		actions: []
	},
	LWW: {
		dialogue: "I bet you googled how to win at tic tac toe every time. Let me try again please!",
		actions: [
			{
				type: "set difficulty",
				difficulty: "master"
			},
			{
				type: "set history",
				hist: "WW"
			}
		]
	},
	WW: {
		dialogue: "I bet you googled how to win at tic tac toe every time. Let me try again please!",
		actions: [
			{
				type: "set difficulty",
				difficulty: "master"
			}
		]
	},
	WWW: {
		dialogue: "Yawn. Well this isn’t too interesting is it. Well you might as well play again",
		actions: []
	},
	WWL: {
		dialogue: "HAHAHA. You had to have done this on purpose just to prompt my response. Im more self aware than you think",
		actions: []
	},
	WL: {
		dialogue: "Yikes, you kind of stink at this. I guess you’ll have to play again to save your pride",
		actions: []
	},
	WLW: {
		dialogue: "hello world 123",
		actions: []
	},
	WLL: {
		dialogue: "Yawn. Well this isnt too interesting is it. Well you might as well play again",
		actions: []
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

function setDialogue(string) {
	$(".chat-box").text(string);
}

function readTree() {
	let currentItem = tree[globals.history];

	if (currentItem.dialogue) {
		// TODO: Print dialogue on screen
		setDialogue(currentItem.dialogue);
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
			case "set history":
				console.log("set history", action.hist);
				history = action.hist;
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
		readTree();
	} else if (outcome === aiToken) {
		globals.history += "L";
		readTree();
	} else {
		console.log("DRAW");
		setDialogue("Another draw? I havent even reached my my final form.");
	}
};
