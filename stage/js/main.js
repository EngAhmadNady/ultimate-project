$(function(){
    'use strict';
    $('.toggle-sidebar').on('click',function(){
        $(".content-area").toggleClass('no-sidebar');
        $(".sidebar").toggleClass('no-sidebar');
    });
    //toggle-submenu
    $(".toggle-submenu").on('click',function(){
        $(this).find(".fa-chevron-right").toggleClass("down");
        $(this).next(".child-links").slideToggle();
    });
});