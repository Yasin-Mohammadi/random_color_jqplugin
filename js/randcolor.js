(function ($) {
	
	$.fn.randcolor = function(options){
		var settings = $.extend({
			 color1 : {r:10, g:15, b:45},
			 color2 : {r:200, g:215, b:245},
			 bg: true,
			 color: true,
			 speed: 500
		}, options)

		function rand2num(n1, n2) {
			var s = Math.max(n1,n2);
			var e = Math.min(n1,n2);
			var rand = (e - s)*Math.random()+ s;
			return rand;
		}

		function randcolor(sc, ec) {
			var color = {r: rand2num(sc['r'], ec['r']), g: rand2num(sc['g'], ec['g']), b: rand2num(sc['b'], ec['b'])};
			return(color)				
		}

		
		return this.each(function () {
			setInterval(() => {
				var colorbg = randcolor(settings.color1, settings.color2);
				var color = randcolor(settings.color1, settings.color2);
				if(settings['bg']==true)
					$(this).css('background-color', 'rgb('+colorbg.r+','+colorbg.g+','+colorbg.b+')');
				if(settings['color'] == true)
					$(this).css('color', 'rgb('+color.r+','+color.g+','+color.b+')');
			}, settings['speed']);
		});
		
	}	
}(jQuery))


