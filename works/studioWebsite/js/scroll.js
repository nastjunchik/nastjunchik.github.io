$(document).ready(function(){
    $("#menu, .home-link").on("click","a:not(li:last-child>a)", function (event) {
        event.preventDefault();

        var id = $(this).attr('href'),
            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 800);
    });
    $('nav').removeClass('default');
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('nav').addClass('default').fadeIn('fast');
        }else{
            $('nav').removeClass('default').fadeIn('fast');
        }
    });
});