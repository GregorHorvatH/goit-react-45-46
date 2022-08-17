import axios from 'axios';

export const getShopItems = () =>
  axios
    .get('https://61ddd77df60e8f0017668aa9.mockapi.io/api/v1/shop')
    .then(({ data }) => data);

export const getShopItem = (id) => () =>
  axios
    .get(`https://61ddd77df60e8f0017668aa9.mockapi.io/api/v1/shop/${id}`)
    .then(({ data }) => data);
