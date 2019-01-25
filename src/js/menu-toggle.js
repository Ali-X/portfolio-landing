function toggleClick(elem) {
  let menuElemStyle = document.getElementById("menu");

  if (menuElemStyle.classList.contains("hidden")) {
    menuElemStyle.classList.remove("hidden");
  } else {
    menuElemStyle.classList.add("hidden");
  }

  elem.classList.toggle("change");
}