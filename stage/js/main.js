$(function(){
    'use strict';
    $('.toggle-sidebar').on('click',function(){
        $(".content-area").toggleClass('no-sidebar');
        $(".sidebar").toggleClass('no-sidebar');
    });
});