$(document).ready(function(){
	
	$('.feature-item-big a, .feature-item-small a').hover(
					function(){
						if($(window).width() > 960){
							$(this).find('.f-i-border').animate({opacity:0},300).css({'display':'none'});
							$(this).find('.hover').animate({opacity:1},300).css({'display':'block'});
						}
					},
					function(){
						if($(window).width() > 960){
							$(this).find('.f-i-border').animate({opacity:1},300).css({'display':'block'});
							$(this).find('.hover').animate({opacity:0},300).css({'display':'none'});
						}
					}
				);
	
	$(window).resize(function(){
		if ($(window).width() < 960){
			$('.feature-item-big a, .feature-item-small a').find('.hover').removeAttr('style');
			$('.feature-item-big a, .feature-item-small a').find('.f-i-border').css({'display':'none'});
			$('.feature-item-big a, .feature-item-small a').find('.hover>button').css({'display':'block'});
		}
		else{
			$('.feature-item-big a, .feature-item-small a').find('.f-i-border').css({'display':'block'});
		}
	});

});