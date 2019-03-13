
/*
 * object to contain all items accessable to all control functions
 */


/*
 * choosing difficulty level (onclick span.level) behavior and control
 * when a level is clicked, it becomes highlighted and the "ai.level" variable
 * is set to the chosen level
 */
$(".level").each(function() {
	var $this = $(this);
	$this.click(function() {
		$(".selected").toggleClass("not-selected");
		$(".selected").toggleClass("selected");
		$this.toggleClass("not-selected");
		$this.toggleClass("selected");
	});
});

/*
 * start game (onclick div.start) behavior and control
 * when start is clicked and a level is chosen, the game status changes to "running"
 * and UI view to swicthed to indicate that it's human's trun to play
 */

/*
 * click on cell (onclick div.cell) behavior and control
 * if an empty cell is clicked when the game is running and its the human player's trun
 * get the indecies of the clickd cell, craete the next game state, upadet the UI, and
 * advance the game to the new created state
 */
$(".cell").each(function() {
	var $this = $(this);
	$this.click(function() {
		if (globals.game.status === "running" && globals.game.currentState.turn === globals.game.playerToken && !$this.hasClass("occupied")) {
			var indx = parseInt($this.data("indx"));

			var next = new State(globals.game.currentState);
			next.board[indx] = globals.game.playerToken;

			ui.insertAt(indx, globals.game.playerToken, globals.game.playerToken);

			next.advanceTurn();

			globals.game.advanceTo(next);
		}
	});
});



