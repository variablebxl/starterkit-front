/*------------------------------------*\
  positions
\*------------------------------------*/
var $ = require("jquery");

var positions = function() {
  var $subnavTop = $('#header').outerHeight();
  $('#subnav').css('top', $subnavTop);
}



positions();
$(window).resize(positions);
