import {
  fetchItemsRequest,
  fetchItemsSuccess,
  fetchItemsFailure,
} from './actions';

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
