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
		},
		
		update : function(inpt){
			this.currentTetramino.setTo(this.blockControl, Block.NONE);
			
			if (inpt.pressed("up")) {
				this.moveRotate();
			}
			if (inpt.pressed("down")) {
				this.moveDown();
			}
			if (inpt.pressed("left")) {
				this.moveLeft();
			}
			if (inpt.pressed("right")) {
				this.moveRight();
			}
			if (inpt.pressed("space")) {
				this.hardDrop();
			}

			if (this.frames++ % 20 === 0) {
				this.moveDown();
			}
			
			this.currentTetramino.setTo(this.blockControl);
		}
		
    })
})