$(document).ready(() => {
    $('.my-slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
    $( function() {
        $( "#tabs" ).tabs();
    } );
    $( function() {
        $( "#accordion" ).accordion();
    } );
});