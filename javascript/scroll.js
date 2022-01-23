$(window).scroll(function () {
    if(($(this).scrollTop()+window.innerHeight) > window.innerHeight+1000) {
       $('.scroll-top').fadeIn();
    } else {
        $('.scroll-top').fadeOut();
    };
});
$('.scroll-top').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 900);
   return false;
});
