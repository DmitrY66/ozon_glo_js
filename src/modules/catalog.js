import getData from "./getData.js";
import renderGoods from "./renderGoods.js";
import { categoryFilter } from "./filters.js";

const catalog = () => {
  const catalogButton = document.querySelector('.catalog-button > button');
  const catalog = document.querySelector('.catalog');
  const catalogItems = document.querySelectorAll('.catalog li');

  let isOpen = false;

  catalogButton.addEventListener('click', () => {
    isOpen = !isOpen;

    if (isOpen) {
      catalog.style.display = 'block';
    } else {
      catalog.style.display = '';
    }


  });

  catalogItems.forEach((item) => {
    item.addEventListener('click', () => {
      const text = item.textContent;
      getData().then((data) => {
        renderGoods(categoryFilter(data, text));
      });
    })
  })

}

export default catalog;
