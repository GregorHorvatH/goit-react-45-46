import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducer';

const loggerMiddleware = (store) => (next) => (action) => {
  // your code
  // console.log(action);

  next(action);
};

const secondMiddleware = (store) => (next) => (action) => {
  // your code
  // console.log('second middleware:', action.type);

  next(action);
};

const middlewares = [loggerMiddleware, secondMiddleware, thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
