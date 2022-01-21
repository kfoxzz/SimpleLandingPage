const items = document.querySelectorAll('.carousel-item');
const buttons = document.querySelectorAll('.carousel-nav-button');

buttons.forEach((button, i) => {
  button.onclick = function () {
    items.forEach(item => item.classList.remove('carousel-item-active'));
    buttons.forEach(button => button.classList.remove('carousel-nav-button-active'));
    items[i].classList.add('carousel-item-active');
    button.classList.add('carousel-nav-button-active');
  };
});

items[0].classList.add('carousel-item-active');
buttons[0].classList.add('carousel-nav-button-active');
