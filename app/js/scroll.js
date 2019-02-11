;(function() {
  let offset = document.getElementsByClassName('header')[0].offsetHeight;

  window.onscroll = function() {
    if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
      document.getElementsByClassName("scroll-to-top")[0].style.opacity = "1";
    } else {
      document.getElementsByClassName("scroll-to-top")[0].style.opacity = "0";
    }
  }
})();