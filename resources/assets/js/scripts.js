/*------------------------------------*\
  #SCRIPTS
\*------------------------------------*/

var $ = require("jquery");

$( document ).ready(function() {
  // scripts
  var FastClick = require('fastclick');
  FastClick.attach(document.body);
  var attachlazysizes = require('lazysizes');
  var viewport = require("viewport-utility").init({
    classPrefix: 'is-',
  });
  // modules
  // require('./modules/_module-name.js');
});
