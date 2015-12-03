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
	    
	});
    
    return Tetramino;
})