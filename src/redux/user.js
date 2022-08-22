import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './userApi';

const initialState = {
  name: '',
  email: '',
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, { payload }) => {
      const { user, token } = payload;

      state.email = user.email;
      state.name = user.name;
      state.token = token;
    },
    // getCurrentSuccess: (state, { payload }) => {
    //   state.email = payload.email;
    //   state.name = payload.name;
    // },
  },
  extraReducers: (builder) => {
    // builder.addMatcher(
    //   // cartApi.endpoints.getCartItems.matchFulfilled,
    //   userApi.endpoints.login.matchFulfilled,
    //   (state, { payload }) => {
    //     const { user, token } = payload;

    //     state.email = user.email;
    //     state.name = user.name;
    //     state.token = token;
    //   }
    // );

    builder.addMatcher(
      userApi.endpoints.currentUser.matchFulfilled,
      (state, { payload }) => {
        state.email = payload.email;
        state.name = payload.name;
      }
    );
  },
});

// Action creators are generated for each case reducer function
export const { loginSuccess, getCurrentSuccess } = userSlice.actions;

export default userSlice.reducer;
