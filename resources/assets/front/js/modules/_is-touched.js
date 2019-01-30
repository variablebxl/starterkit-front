/*------------------------------------*\
  #IS-TOUCHED
\*------------------------------------*/

window.addEventListener('touchstart', function onFirstTouch() {
  document.body.classList.add('is-touched');
  window.removeEventListener('touchstart', onFirstTouch, false);
}, false);
