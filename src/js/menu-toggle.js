function toggleClick(elem) {
  let menuElemStyle = document.getElementById("menu");
  menuElemStyle.classList.toggle("hidden");
  elem.classList.toggle("change");
}