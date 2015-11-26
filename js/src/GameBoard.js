define(["src/Numfont"], function(Numfont){
    var GameBoard = Class.extend({
        
        init: function() {
			this.back = content.get("back");
			this.blocks = content.get("blocks");
			var num = content.get("numbers");

			this.font = {
				gray  : new Numfont(num,  0, 9),
				cyan  : new Numfont(num,  9, 9),
				red   : new Numfont(num, 18, 9),
				blue  : new Numfont(num, 27, 9),
				orange: new Numfont(num, 36, 9),
				green : new Numfont(num, 45, 9),
				yellow: new Numfont(num, 54, 9),
				purple: new Numfont(num, 63, 9)
			};
		}
    })
})