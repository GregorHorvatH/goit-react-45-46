import types from './types';

export const setFilter = (payload) => ({ type: types.SET_FILTER, payload });

export const addCartItem = (payload) => ({
  type: types.CART_ADD_ITEM,
  payload,
});
