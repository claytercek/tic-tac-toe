/*
 * ui object encloses all UI related methods and attributes
 */
var ui = {};

//holds the state of the intial controls visibility
ui.intialControlsVisible = true;

//holds the current visible view
ui.currentView = "";

ui.switchViewTo = function(turn) {
	console.log("turn", turn);
	switch (turn) {
		case "won":
			setButton("Rematch");
			setStatus("You Win!  ");
			break;
		case "lost":
			setButton("Rematch");
			setStatus("You Lose  ");
			break;
		case "human":
			setButton("");
			setStatus("Your Turn");
			break;
		case "robot":
			setButton("");
			setStatus("My Turn");
			break;
		case "draw":
			setButton("Rematch");
			setStatus("Draw!  ");
			break;
		default:
			break;
	}
};

ui.insertAt = function(indx, symbol, playerToken) {
	var board = $(".cell");
	var targetCell = $(board[indx]);

	if (!targetCell.hasClass("occupied")) {
		targetCell.html(symbol);
		//Phase 1
		/*targetCell.addClass(
          
            symbol == playerToken ? "green" : "red"
        );*/

		//Phase 2 : Set color class and symbol class
		targetCell.addClass(symbol + " " + (symbol == playerToken ? "green" : "red"));

		targetCell.addClass("occupied");
	}
};

ui.clear = function() {
	$(".cell").removeClass("occupied");
	$(".cell").removeClass("X");
	$(".cell").removeClass("O");
	$(".cell").removeClass("red");
	$(".cell").removeClass("green");
	$(".cell").html("");
};

$(".start").click(function() {
	console.log("HELLO");
	start("blind", "X");
});

function setButton(string) {
	$(".start").text(string);
}
function setStatus(string) {
	$(".status").text(string);
}
