;(function() {
  document.getElementsByClassName('menu__toggle')[0].addEventListener('click', () => {
    let elem = document.getElementsByClassName('menu__toggle')[0];
    let menuElemStyle = document.getElementById("menu");
    menuElemStyle.classList.toggle("menu--hidden");
    elem.classList.toggle("change");
  });
})();

