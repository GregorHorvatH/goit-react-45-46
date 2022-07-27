import { useState } from 'react';

const initialState = [
  {
    id: '1',
    name: 'Retro TV',
    price: 620.87,
    img: 'https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg',
  },
  {
    id: '2',
    name: 'Photo Camera',
    price: 599.99,
    img: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg',
  },
  {
    id: '3',
    name: 'Noname Phone',
    price: 300.27,
    img: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg',
  },
  {
    id: '4',
    name: 'Tennis Ball',
    price: 9.99,
    img: 'https://images.pexels.com/photos/47813/baseball-softball-clay-ball-47813.jpeg',
  },
  {
    id: '5',
    name: 'White Bicycle',
    price: 499.99,
    img: 'https://images.pexels.com/photos/255934/pexels-photo-255934.jpeg',
  },
  {
    id: '6',
    name: 'Books Collection',
    price: 99.99,
    img: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg',
  },
];

const useShopData = () => {
  const [items, setItems] = useState(initialState);

  return [items, setItems];
};

export default useShopData;
