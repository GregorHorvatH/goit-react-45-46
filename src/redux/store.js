import { configureStore } from '@reduxjs/toolkit';
import cart from './cart';
import shop from './shop';
import filter from './filter';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// ----- cart persistor -----
const cartPersistConfig = {
  key: 'cart',
  version: 1,
  storage,
  whitelist: ['items'],
};

const persistedCartReducer = persistReducer(cartPersistConfig, cart);

// ----- filter persistor -----
const filterPersistConfig = {
  key: 'filter',
  version: 1,
  storage,
};

const persistedFilterReducer = persistReducer(filterPersistConfig, filter);

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    shop,
    filter: persistedFilterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
