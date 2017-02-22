$(document).ready(function() {
  //Responsive Menu
  var pull = $('.menu');
  menu = $('.categories');
 
  $(pull).on('click', function(e) {
    e.preventDefault();
    menu.toggle();
  });
  $(window).resize(function(){
    var w = $(window).width();
    if(w > 768 && menu.is(':hidden')) { 
      menu.removeAttr('style');
    }
  });
});
