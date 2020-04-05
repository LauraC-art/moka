$(function(){
    $('#readmore').click(function(){
        $('html,body').animate({
            scrollTop:$('#contenido').offset().top
        },
        'slow'
        );
    });
});
$(window).scroll(function(){
    $('nav,.menu').toggleClass('scrolled', $(this).scrollTop()>8)
});