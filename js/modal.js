const buttonsOrder = document.querySelectorAll('.product__button_order');
const overlayOrder = document.querySelector('.overlay__order');

buttonsOrder.forEach((buttonOrder) => {
  buttonOrder.addEventListener('click', () => {
    overlayOrder.classList.add('overlay_active');
    const order = overlayOrder.querySelector('.modal__order');
    order.value = buttonOrder.dataset.order;
  });
});

overlayOrder.addEventListener('click', (event) => {
  if (event.target === overlayOrder || event.target.closest('.modal__close')) {
    overlayOrder.classList.remove('overlay_active');
  }
});