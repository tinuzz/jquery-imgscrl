(function($){

	$.imgscrl = function() {
	}

	$.fn.imgscrl = function(width, options) {

		return this.each(function() {

			var $this = $(this);

			if (typeof(width) == 'undefined') {
				width = 640;
			}

			var settings = $.extend( {
				'class': ''
			}, options);

			// wrap the image in a div, giving it an optional extra class
			extraClass = '';
			if (settings.class) {
				extraClass = ' class="' + settings.class + '"';
			}
			var uniq = Math.floor( Math.random()*99999 );
			var div_id = "imgscrl_div" + String(uniq);
			$this.wrap('<div id="' + div_id + '"' + extraClass + ' />');

			// format the div
			$('#' + div_id).css({
				'width': width + 'px',
				'overflow': 'hidden',
			});

			// display the image in case it was hidden before
			$(this).css({
				'margin': 0,
				'display': 'block',
				'max-width': 'none'
			});

			// Check if image has dimensions; if not, it's probably not yet loaded.
			var deferred = $.Deferred();
			if ($this.width() == 0)
				$this[0].onload = deferred.resolve;
			else
				deferred.resolve();

			deferred.promise().then(function() {
				$this.data('containerWidth', width);
				$this.data('imgWidth', $(this).outerWidth(true));

				$this.mousemove(function(event){
					offset = $(this).parent().offset()
					var x = event.pageX - offset.left;

					var perc = (100 / ($(this).data('containerWidth') / x));
					$.imgscrl.posPicture($(this),perc);
				});
			}.bind($this));
		});
	}

	$.imgscrl.posPicture = function(p,x) {
		var full = p.data('imgWidth');
		full = full - p.data('containerWidth');
		var curX = full * (x / 100);

		if (curX < 0) {
			curX = 0;
		}

		p.css({
			'margin-left': '-' + curX + 'px'
		});
	}

})(jQuery);
