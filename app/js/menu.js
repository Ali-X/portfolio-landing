;(function() {
  document.getElementById('menu').onclick = function(event) {
    let target = event.target;

    while (target.id !== 'menu') {
      if (target.classList.contains('menu-element')) {
        let items = document.getElementsByClassName('menu-element');

        for (let i = 0; i < items.length; i++) {
          items[i].classList.remove('menu-element--hovered');
        }

        target.classList.add('menu-element--hovered');
        break;
      }

      target = target.parentNode;
    }
  };
})();