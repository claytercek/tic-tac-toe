
 /*
 * ui object encloses all UI related methods and attributes
 */
var ui = {};

//holds the state of the intial controls visibility
ui.intialControlsVisible = true;

//holds the current visible view
ui.currentView = "";

ui.switchViewTo = function(turn) {
    // TODO:
    // show different classes/elements based on turn/win/lose
};

ui.insertAt = function(indx, symbol, playerToken) {
    var board = $('.cell');
    var targetCell = $(board[indx]);

    if(!targetCell.hasClass('occupied')) {
        targetCell.html(symbol);
        targetCell.css({
            color : symbol == playerToken ? "green" : "red"
        });
        targetCell.addClass('occupied');
    }
}

ui.clear = function() {
    $('.cell').removeClass("occupied");
    $('.cell').html("");
}


$('.start').click(function(){
    console.log("HELLO")
    start("blind", "X")
})