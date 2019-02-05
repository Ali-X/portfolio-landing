;(function() {
  let offset = document.getElementsByClassName('header')[0].offsetHeight;

  window.onscroll = function() {
    if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
      document.getElementById("scroll-to-top").style.opacity = "1";
    } else {
      document.getElementById("scroll-to-top").style.opacity = "0";
    }
  }
})();