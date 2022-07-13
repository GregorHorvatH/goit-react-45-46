import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

export const fetchCartItems = () => axios.get('/cart').then((res) => res.data);

export const deleteItem = (id) => axios.delete(`/cart/${id}`);

export const addItem = (newItem) =>
  axios.post('/cart', newItem).then((res) => res.data);

export const updateItem = (id, updatedItem) =>
  axios.patch(`/cart/${id}`, updatedItem).then((res) => res.data);

// const errorHandler = (res) => {
//   if (res.status !== 200) {
//     throw new Error(res.statusText);
//   } else {
//     return res.json();
//   }
// };

// export const fetchCartItems = () =>
//   fetch('http://localhost:8080/cart').then(errorHandler);

// export const deleteItem = (id) =>
//   fetch(`http://localhost:8080/cart/${id}`, {
//     method: 'DELETE',
//   });

// export const addItem = (newItem) =>
//   fetch('http://localhost:8080/cart', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newItem),
//   }).then(errorHandler);
