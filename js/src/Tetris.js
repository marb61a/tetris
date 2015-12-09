define(["src/GameBoard", "src/StatManager", "src/Tetramino", "src/Block", "src/Randomizer"], function(GameBoard, StatManager, 
	Tetramino, Block, Randomizer){
		
    var Tetris = Class.extend({
        
        init: function(cols, rows) {

			this.cols = cols;
			this.rows = rows;

			this.gameBoard = new GameBoard();
			this.stat = new StatManager();
			this.random = new Randomizer();

			this.blockControl = [];

			this.reset();
		},
		
		reset: function() {

			this.frames = 1;

			this.blockControl = [];
			for (var i = 0; i < this.cols; i++) {
				this.blockControl[i] = [];
				for (var j = 0; j < this.rows; j++) {
					this.blockControl[i][j] = new Block(Block.NONE);
				}
			}

			this.random.initialize();
			this.setNextTetramino();
		}
		
    })
})