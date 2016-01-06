define(function(){
    var Randomizer = Class.extend({
        init: function() {
			this._IDs = "LITSZOJ".split("");
			this._S_ID = this._IDs.indexOf("S");
			this._Z_ID = this._IDs.indexOf("Z");
			this.size = this._IDs.length;
			this.initialize();
		},

		initialize: function() {
			this.idx = 0;
			this.bag = new Array(this.size);

			for (var i = 0; i < this.size; i++) {
				this.bag[i] = i;
			}

			do {
				this.shuffle();
			} while (this.bag[0] === this._S_ID || this.bag[0] === this._Z_ID)
		},
		
		shuffle: function(array) {
			var array = array || this.bag,
				counter = array.length,
				temp,
				index;

			while (counter > 0) {
				index = Math.round(Math.random() * --counter);
				temp = array[counter];
				array[counter] = array[index];
				array[index] = temp;
			}

			return array;
		},
        
    });
    
})