define(["src/GameBoard"], function(GameBoard){
    var Tetris = Class.extend({
        
        init: function(cols, rows) {

			this.cols = cols;
			this.rows = rows;

			this.gameBoard = new GameBoard();
			this.stat = new StatManager();
			this.random = new Randomizer();

			this.blockControl = [];

			this.reset();
		}
		
    })
})