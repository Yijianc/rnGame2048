import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { AsyncStorage } from 'react-native';

import { getItem, setItem } from './utils/manageLocalStorage';

import { reducer as matrixReducer } from './containers/GameBoard';
import { reducer as menuReducer } from './containers/MenuModal';

const win = window;

const reducer = combineReducers({
  boardState: matrixReducer,
  modalVisible: menuReducer
});

const middlewares = [];
// if (process.env.NODE_ENV !== 'production') {
//   middlewares.push(require('redux-immutable-state-invariant')());
// }

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

const store = createStore(reducer, {}, storeEnhancers);

store.subscribe(() => {
  const state = store.getState();
  // console.log(state, 'state');
  setItem('state', state);
});

export default store;
