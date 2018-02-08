/*------------------------------------*\
  #SCRIPTS
\*------------------------------------*/

var $ = require("jquery");

$( document ).ready(function() {
  // scripts
  var attachlazysizes = require('lazysizes');
  var viewport = require("viewport-utility").init({
    classPrefix: 'is-',
  });
  // modules
  require('./modules/_modernizr.js');
});
