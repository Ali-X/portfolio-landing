;(function() {
  document.getElementById('menu').onclick = function(event) {
    let target = event.target;

    while (target.id !== 'menu') {
      if (target.classList.contains('menu__element')) {
        let items = document.getElementsByClassName('menu__element');

        for (let i = 0; i < items.length; i++) {
          items[i].classList.remove('menu__element--hovered');
        }

        target.classList.add('menu__element--hovered');
        break;
      }

      target = target.parentNode;
    }
  };
})();