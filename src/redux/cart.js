import { createSlice } from '@reduxjs/toolkit';
import { cartApi } from './cartApi';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // cart/addItem
    addItem: (state, { payload: item }) => {
      state.items = [...state.items, item];
    },
    // cart/removeItem
    removeItem: (state, { payload: itemId }) => {
      state.items = state.items.filter((item) => item.id !== itemId);
    },
    // cart/setCount
    setCount: (state, { payload: { id, step } }) => {
      state.items = state.items.map((item) => {
        return item.id === id
          ? {
              ...item,
              count: item.count + step,
            }
          : item;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      cartApi.endpoints.getCartItems.matchFulfilled,
      (state, { payload }) => {
        state.items = payload;
      }
    );
  },
});

// Action creators are generated for each case reducer function
export const { addItem, setCount, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
