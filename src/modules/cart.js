import getData from "./getData.js";
import postData from "./postData.js";
import renderGoods from "./renderGoods.js";

const cart = () => {

  const cartBtn = document.getElementById('cart');
  const cartModal = document.querySelector('.cart');
  const cartCloseBtn = cartModal.querySelector('.cart-close');

  // const openCart = () => {
  //   cartModal.style.display = 'flex'
  // };

  // const closeCart = () => {
  //   cartModal.style.display = '';
  // };

  // cartBtn.addEventListener('click', openCart);

  getData().then(data => console.log(data));

  

  
  cartBtn.addEventListener('click', () => {
    
  });
  
  

};

export default cart;






