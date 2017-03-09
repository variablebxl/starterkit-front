var screen_xs = 600,
    screen_sm = 800,
    screen_md = 1100,
    screen_lg = 1500;

jQuery(document).ready(function($) {

  mediaQueries();
  window.addEventListener('resize', mediaQueries, false);

  // fastclick
  $(function() {
    FastClick.attach(document.body);
  });

});

function mediaQueries() {
  if (matchMedia('only screen and (max-width: screen_sm)').matches) {
    // screen-sm-max

  }
  if (matchMedia('only screen and (min-width: screen_md)').matches) {
    // screen-md-min

  }
}
