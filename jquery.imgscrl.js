(function($){

	$.imgscrl = function() {
		var containerWidth = 0;
		var imgWidth = 0;
	}

	$.fn.imgscrl = function(width, options) {

		if (typeof(width) == 'undefined') {
			width = 640;
		}

		var settings = $.extend( {
			'class': ''
		}, options);

		// wrap the image in a div, giving it an optional extra class
		extraClass = '';
		if (settings.class) {
			extraClass = ' ' + settings.class;
		}
		this.wrap('<div class="imgscrl_div' + extraClass + '" />');

		// format the div
		$('.imgscrl_div').css({
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
    var deferred  = $.Deferred();
    if (this.width() == 0)
      this[0].onload = deferred.resolve;
    else
      deferred.resolve();

    deferred.promise().then(function() {
      $.imgscrl.containerWidth = width;
      $.imgscrl.imgWidth = $(this).outerWidth(true);

      this.mousemove(function(event){
        offset =  $(this).parent().offset()
        var x = event.pageX - offset.left;

        var perc = (100 / ($.imgscrl.containerWidth / x));
        $.imgscrl.posPicture($(this),perc);
      });
    }.bind(this));
	}

	$.imgscrl.posPicture = function(p,x) {
		var full = $.imgscrl.imgWidth;
		full = full - $.imgscrl.containerWidth;
		var curX = full * (x / 100);

		if (curX < 0) {
			curX = 0;
		}
		
		p.css({
			'margin-left': '-' + curX + 'px'
		});
	}

})(jQuery);
