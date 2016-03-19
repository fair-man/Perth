;(function( window, undefined ){ 
 'use strict'; 
$('.js-open-menu').on('click', function(e) {
    e.preventDefault();
    $('.menu-block').slideToggle();
});
}( window ));