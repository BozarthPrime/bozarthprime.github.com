(function ($) {
    $.fn.Gallery = function (options) {
        var settings = $.extend({
            height: 200,
            width: 100,
			heightIsPercent: false,
			widthIsPercent: true,
			nextImage: "",
			prevImage: "",
			closeImage: ""
        }, options);

        var element = $(this);
		var curImage;
		var curGallery;
		
		$('body').append("<div id='shadow'></div>");
		$('body').append("<div id='lightbox'></div>");
		$('#lightbox').append("<div id='img-cont'></div>");
		$('#lightbox').append("<div id='img-note'></div>");
		
		if (settings.closeImage != "") {
			$('#lightbox').append("<div id='img-close'><img src='" + settings.closeImage + "' /></div>");
		} else {
			$('#lightbox').append("<div id='img-close'>X</div>");
		}
		
		if (settings.nextImage != "") {
			$('#lightbox').append("<div id='img-next'><img src='" + settings.nextImage + "' /></div>");
		} else {
			$('#lightbox').append("<div id='img-next'>Next</div>");
		}
		
		if (settings.prevImage != "") {
			$('#lightbox').append("<div id='img-prev'><img src='" + settings.prevImage + "' /></div>");
		} else {
			$('#lightbox').append("<div id='img-prev'>Prev.</div>");
		}
		
		
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
			$('#lightbox').hide(0,function() {
				$('#img-note').hide();
				$('#shadow').slideUp(function(){
					$('#img-cont').html('');
					$('#img-note').html('');
				});
			});
			
			curImage = null;
		}
		
		function nextImage() {
			if (curImage < curGallery.length - 1) {
				curImage++;
			} else {
				curImage = 0;
			}
			
			setImage();
		}
		
		function prevImage() {
			if (curImage > 0) {
				curImage--;
			} else {
				curImage = curGallery.length - 1;
			}
			
			setImage();
		}
		
		function setImage() {
			var image = $(curGallery[curImage]).clone();

			if(image.attr('comment')) {
				$('#img-note').html(image.attr('comment'));
				$('#img-note').show();
			} else {
				$('#img-note').hide();
			}

			image.css('max-height', '100%');
			image.css('max-width', '100%');
			image.css('display', 'block');
			
			$('#img-cont').html(image);			
		}
		
		galleryImages.click(function() {
			curGallery = $(this).parent().children('img');
			var image = $(this).clone();
			
			for(var i = 0; i < curGallery.length; i++) {
				if ($(curGallery[i]).attr('src') == $(this).attr('src')) {
					curImage = i;
				}
			}
			
			$('#shadow').slideDown(function(){
				if(image.attr('comment')) {
					$('#img-note').html(image.attr('comment'));
					$('#img-note').show();
				} else {
					$('#img-note').hide();
				}
			});

			image.css('max-height', '100%');
			image.css('max-width', '100%');
			image.css('display', 'block');
			
			image.hide();
			$('#img-cont').html(image);

			$('#lightbox').show(function() {
				image.slideDown(200);
			});
		});
		
		$('#img-cont').click(function() {
			nextImage();
		});
		
		$('#img-next').click(function() {
			nextImage();
		});
		
		$('#img-prev').click(function() {
			prevImage();
		});
		
		$('#shadow').click(function() {
			close();
		});
		
		$('#img-close').click(function() {
			close();
		});
		
    }
})(jQuery); 