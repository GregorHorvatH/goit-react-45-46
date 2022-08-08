import types from './types';

const initialState = {
  shop: {
    items: [
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
    ],
  },
  cart: {
    items: [
      // {
      //   id: '323522',
      //   name: 'motherboard',
      //   price: 150,
      //   count: 1,
      //   extendedGuarantee: true,
      // },
      // {
      //   id: '434556',
      //   name: 'mouse',
      //   price: 15,
      //   count: 1,
      //   extendedGuarantee: false,
      // },
      // {
      //   name: 'CPU',
      //   price: 200,
      //   count: 7,
      //   extendedGuarantee: false,
      //   id: 'E6y7-sv',
      // },
      // {
      //   count: 11,
      //   name: 'dfbdgs',
      //   price: 123,
      //   extendedGuarantee: true,
      //   id: '2VIyrSq',
      // },
    ],
  },
  filter: {
    value: 'test filter',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FILTER:
      return {
        ...state,
        filter: {
          value: action.payload,
        },
      };

    case types.CART_ADD_ITEM:
      return {
        ...state,
        cart: {
          ...state.cart,
          items: [...state.cart.items, action.payload],
        },
      };

    default:
      return state;
  }
};

export default reducer;
