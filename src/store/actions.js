import types from './types';

export const setFilter = (payload) => ({ type: types.SET_FILTER, payload });

export const addCartItem = (payload) => ({
  type: types.CART_ADD_ITEM,
  payload,
});

export const fetchItemsRequest = () => ({
  type: types.FETCH_ITEMS_REQUEST,
});

export const fetchItemsSuccess = (payload) => ({
  type: types.FETCH_ITEMS_SUCCESS,
  payload,
});

export const fetchItemsFailure = (payload) => ({
  type: types.FETCH_ITEMS_FAILURE,
  payload,
});
