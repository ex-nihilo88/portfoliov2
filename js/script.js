function menuToggle () {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

var target = $('.intro-text');
var targetHeight = target.outerHeight();

$(document).scroll(function (e) {
  var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
  if (scrollPercent >= 0) {
    target.css('opacity', scrollPercent);
  }
});
