import {
  fetchItemsRequest,
  fetchItemsSuccess,
  fetchItemsFailure,
  fetchItemRequest,
  fetchItemSuccess,
  fetchItemFailure,
} from './shop';

const BASE_URL = 'https://61ddd77df60e8f0017668aa9.mockapi.io/api/v1/shop';

export const fetchItems = () => (dispatch, getState) => {
  dispatch(fetchItemsRequest());

  fetch(BASE_URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      return res.json();
    })
    .then((data) => dispatch(fetchItemsSuccess(data)))
    .catch((error) => dispatch(fetchItemsFailure(error.message)));
};

export const fetchItem = (id) => (dispatch, getState) => {
  dispatch(fetchItemRequest());

  fetch(`${BASE_URL}/${id}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      return res.json();
    })
    .then((data) => dispatch(fetchItemSuccess(data)))
    .catch((error) => dispatch(fetchItemFailure(error.message)));
};
