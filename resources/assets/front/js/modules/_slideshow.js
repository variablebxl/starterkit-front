/*------------------------------------*\
  #SLIDESHOW
\*------------------------------------*/
var $ = require("jquery");
var Flickity = require('flickity');
require('flickity-imagesloaded');

const carousel = document.querySelector('.gallery--slideshow');
let carouselSelector = '.gallery--slideshow';
let cellSelector = '.gallery__item';

if (carousel) {
  const flktySelector = carouselSelector;
  const flktyOptions = {
    // options
    imagesLoaded: true,
    prevNextButtons: true,
    pageDots: false,
    contain: true,
    percentPosition: true
  };
  let flkty = new Flickity(flktySelector, flktyOptions);
  window.addEventListener('resize', (ev) => {
    if ('destroy' in flkty) {
      flkty.destroy();
      flkty = new Flickity(flktySelector, flktyOptions);
    }
  });
  window.addEventListener('load', (ev) => {
    flkty.resize();
    flkty = new Flickity(flktySelector, flktyOptions);
  });
}
