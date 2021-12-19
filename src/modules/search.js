import getData from "./getData.js";
import renderGoods from "./renderGoods.js";
import { searchFilter } from "./filters.js";

const search = () => {
  const searchWrapperInput = document.querySelector('.search-wrapper_input');

  searchWrapperInput.addEventListener('input', (e) => {

    const value = e.target.value;
    
    getData().then((data) => {
      renderGoods(searchFilter(data, value));
    });
  }) 
}

export default search;
