define(function(){
    var StatManager = Class.extend({
        init: function() {
			this.reset(0);
		},

		reset: function(startlvl) {

			this.tetraminos = {
				L: 0,
				I: 0,
				T: 0,
				S: 0,
				Z: 0,
				O: 0,
				J: 0,

				tot: 0
			};

			this._firstlvl = false;

			this.startlvl = startlvl || 0;
			this.lvl = this.startlvl;

			this.score = 0;
			this.lines = 0;
		}
    })
})