import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { AsyncStorage } from 'react-native';

import { getItem, setItem } from './utils/manageLocalStorage';

import { reducer as matrixReducer } from './containers/GameBoard';
import { reducer as menuReducer } from './containers/MenuModal';
import { reducer as rankReducer } from './containers/RankModal';

const win = window;

const reducer = combineReducers({
  boardState: matrixReducer,
  menuModalVisible: menuReducer,
  rankModalVisible: rankReducer,
});

const middlewares = [thunkMiddleware];
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
  console.log(JSON.stringify(state), 'state');
  setItem('state', state);
});

export default store;
