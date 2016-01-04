define(function(){
    var shapeDef = {
        L: "001"+"111"+"000",
		I: "0000 1111 0000 0000",
		T: "010 111 000",
		S: "011 110 000",
		Z: "110 011 000",
		O: "011 011 000",
		J: "100 111 000"
    };
    
    var IDs = [];
    
    for (var sd in ShapeDef) {
		ShapeDef[sd] = ShapeDef[sd].replace(/\s+/g, "");
		IDs.push(sd);
	}
	
	var Tetramino = Class.extend({
	    init : function(id, x, y){
	    	this._shapes = [];
	    	this.rotation = 0;
	    	this.ID = id.toUpperCase();
	    	
	    	this.x = x || 0;
			this.y = y || 0;
			
			var shape = ShapeDef[this.ID];
			
			var s = [],
				n = Math.sqrt(shape.length);
			
			for(var i = 0; i < n; i++){
				s[i] = [];
				for (var j = 0; j < n; j++) {
					s[i][j] = parseInt(shape[j + i*n]);
				}
			}
			
			this._shapes.push(s);
			
			var r = 3, t;
			while (this.ID !== "O" && r-- !== 0) {
				t = [];
				for (var i = 0; i < n; i++) {
					t[i] = [];
					for (var j = 0; j < n; j++) {
						t[i][j] = s[n - j - 1][i];
					}
				}
				s = t.slice(0);
				this._shapes.push(s);
			}
	    }
	});
    
    return Tetramino;
})