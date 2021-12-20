import renderCart from "./renderCart.js";
import postData from "./postData.js";

const cart = () => {

  const cartBtn = document.getElementById('cart');
  const cartModal = document.querySelector('.cart');
  const cartCloseBtn = cartModal.querySelector('.cart-close');
  const cartTotal = cartModal.querySelector('.cart-total > span');
  const cartSendBtn = cartModal.querySelector('.cart-confirm');
  const goodsWrapper = document.querySelector('.goods');
  const cartWrapper = document.querySelector('.cart-wrapper');

  const openCart = () => {
    const cart = localStorage.getItem('cart') ?
      JSON.parse(localStorage.getItem('cart')) : [];

    cartModal.style.display = 'flex';

    renderCart(cart);

    cartTotal.textContent = cart.reduce((sum, goodItem) => {
      return sum + goodItem.price
    }, 0);
  };

  const closeCart = () => {
    cartModal.style.display = '';
  };

  cartBtn.addEventListener('click', openCart);

  cartCloseBtn.addEventListener('click', closeCart);

  goodsWrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-primary')) {
      const card = e.target.closest('.card');
      const key = card.dataset.key;
      const goods = JSON.parse(localStorage.getItem('keyGoods'));
      const cart = localStorage.getItem('cart') ?
        JSON.parse(localStorage.getItem('cart')) : [];
      const goodsItem = goods.find((item) => {
        return item.id === +key;
      });

      cart.push(goodsItem);

      localStorage.setItem('cart', JSON.stringify(cart));

    }
  });


  cartWrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-primary')) {
      const cart = localStorage.getItem('cart') ?
        JSON.parse(localStorage.getItem('cart')) : [];
      const card = e.target.closest('.card');
      const key = card.dataset.key;
      const index = cart.findIndex((item) => {
        return item.id === +key;
      });

      cart.splice(index, 1);

      localStorage.setItem('cart', JSON.stringify(cart));

      renderCart(cart);

      cartTotal.textContent = cart.reduce((sum, goodItem) => {
        return sum + goodItem.price;
      }, 0);
    }
  })

  cartSendBtn.addEventListener('click', () => {
    const cart = localStorage.getItem('cart') ?
      JSON.parse(localStorage.getItem('cart')) : [];

    postData(cart).then(() => {
      
      localStorage.removeItem('cart');

      renderCart([]);

      cartTotal.textContent = 0;

    });
  })
};

export default cart;






