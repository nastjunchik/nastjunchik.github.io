$(document).ready(function(){
	var touch = $('.touch-menu');
	var topBar = $('.menu');
	var wid = $(window).width();		

	var clickOutsideTheElement = function(){
		$(document).on('mouseup', function(event){
			if(!$(event.target).closest($('.menu, .touch-menu')).length){
				if(topBar.is(':visible') && touch.is(':visible')){
				topBar.css({'display':'none'});
				}
			}
		});
	};

	touch.click(function(e){
			e.preventDefault();
			topBar.slideToggle();
			clickOutsideTheElement();
		});
	$(window).resize(function(){
			if(topBar.is(':hidden')){
			topBar.removeAttr('style');
			}

		});
	

	
	
	
});












