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
    //open & close fullscreen
    $('.toggle-fullscreen').on('click', function () {
        $(this).toggleClass("fullscreen");
        if($(this).hasClass("fullscreen")){
            openFullscreen();
        }else{
            closeFullscreen();
        }

    });
});




//open fullscreen
var elem = document.documentElement;

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}
//close fullscreen
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}
