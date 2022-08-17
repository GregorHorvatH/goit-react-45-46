// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61ddd77df60e8f0017668aa9.mockapi.io/api/v1',
  }),
  tagTypes: ['Cart'],
  endpoints: (builder) => ({
    // useGetCartItemsQuery
    getCartItems: builder.query({
      query: () => '/cart',
      providesTags: ['Cart'],
    }),

    // useUpdateCartItemMutation
    updateCartItem: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/cart/${id}`,
        method: 'PUT',
        body: payload,
      }),
      invalidatesTags: ['Cart'],
    }),

    // useDeleteCartItemMutation
    deleteCartItem: builder.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cart'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetCartItemsQuery,
  useUpdateCartItemMutation,
  useDeleteCartItemMutation,
} = cartApi;
