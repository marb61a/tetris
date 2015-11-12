var canvas, content, input;

(function(){
    canvas = (function(){
        var c = {},
            frame = document.getElementsByTagName("canvas")[0],
			_fctx = frame.getContext("2d"),
			
			view = document.createElement("canvas"),
			ctx = view.getContext("2d"),

			_fw, _fh, _vw, _vh, _scale = 1;

		c.frame = frame;
		c.view = view;
		c.ctx = ctx;
        
        return c;
    })();
})();