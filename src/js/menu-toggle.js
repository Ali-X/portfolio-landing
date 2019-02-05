function toggleClick(elem) {
  let menuElemStyle = document.getElementById("menu");
  menuElemStyle.classList.toggle("menu--hidden");
  elem.classList.toggle("change");
}