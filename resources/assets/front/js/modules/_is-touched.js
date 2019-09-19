/*------------------------------------*\
  is-touched
\*------------------------------------*/

document.body.classList.add('no-touchevents');
window.addEventListener('touchstart', function onFirstTouch() {
  document.body.classList.remove('no-touchevents');
  window.removeEventListener('touchstart', onFirstTouch, false);
}, false);
