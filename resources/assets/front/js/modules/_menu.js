/*------------------------------------*\
  #MENU
\*------------------------------------*/
var $ = require("jquery");
var menuDisplay = false;

$(".icon--menu").click(function(e){
  if ( menuDisplay === false ) {
    $(".menu").show();
    menuDisplay = true;
  } else if ( menuDisplay === true ) {
    $(".menu").hide();
    menuDisplay = false;
  }
  e.preventDefault;
});

$(document).bind('click', function(e) {
  if($(e.target).closest('#header').length === 0) {
    $(".menu").hide();
    menuDisplay = false;
  }
});
