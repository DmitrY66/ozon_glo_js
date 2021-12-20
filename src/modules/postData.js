
const postData = (cart) => {
  // return fetch('http://localhost:3000/goods', {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(cart),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((res) => res.json())
  // .then(data => console.log(data))
};

export default postData;
