(function ($) {
    $.fn.Gallery = function (options) {
        var settings = $.extend({
            height: 200,
            width: 100,
			heightIsPercent: false,
			widthIsPercent: true
        }, options);

        var element = $(this);
		
		$('body,html').append("<div id='shadow'></div>");
		$('body,html').append("<div id='lightbox'></div>");
		$('#lightbox').append("<div id='img-cont'></div>");
		$('#lightbox').append("<div id='img-note'></div>");
		$('#lightbox').append("<div id='close-button' title='Close'>Close</div>");
		
		element.css('text-align', 'center');
		element.css('vertical-align', 'middle');
		element.css('overflow', 'auto');
		
		if (settings.heightIsPercent) {
			element.css('height', settings.height + '%');
		} else {
			element.css('height', settings.height + 'px');
		}
		
		if (settings.widthIsPercent) {
			element.css('width', settings.width + '%');
		} else {
			element.css('width', settings.width + 'px');
		}
		
		var galleryImages = element.children('img');
		
		galleryImages.css('max-height', '100%');
		galleryImages.css('max-width', '200px');
		galleryImages.css('display', 'inline-block');
		
		function close() {
			$('#lightbox').hide(function() {
				$('#shadow').slideUp(function(){
					$('#img-cont').html('');
					$('#img-note').html('');
				});
			});
		}
		
		galleryImages.click(function() {
			$('#shadow').slideDown();
			
			var image = $(this).clone();
			
			image.css('max-height', '85%');
			image.css('max-width', '100%');
			image.css('display', 'block');
			
			image.hide();
			$('#img-cont').html(image);
			
			if($(this).attr('comment')) {
				$('#img-note').html($(this).attr('comment'));
				$('#img-note').show();
			} else {
				$('#img-note').hide();
			}
			
			$('#lightbox').show(function() {
				image.slideDown(250);
			});
		});
		
		$('#close-button').click(function() {
			close();
		});
		
		$('#shadow').click(function() {
			close();
		});
		
    }
})(jQuery); 