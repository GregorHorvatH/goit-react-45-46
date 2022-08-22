import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://goit-phonebook-api.herokuapp.com/users',
    prepareHeaders: (headers, { getState }) => {
      const { token = '' } = getState().user;

      headers.set('Authorization', token);

      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    // useLoginMutation
    login: builder.mutation({
      query: (payload) => ({
        url: '/login',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),

    // useCurrentUserQuery
    currentUser: builder.query({
      query: () => '/current',
    }),
  }),
});

export const { useLoginMutation, useCurrentUserQuery } = userApi;
