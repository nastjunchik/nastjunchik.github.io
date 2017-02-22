$(window).ready(function(){
    $(".home-link").on("click", function (event) {
        event.preventDefault();

        var href = $(this).attr('href'),
            top = $(href).offset().top;

        $('body,html').animate({scrollTop: top}, 800);
    });
});