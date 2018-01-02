import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { reducer as matrixReducer } from './containers/GameBoard';

const win = window;

const reducer = combineReducers({
  matrix: matrixReducer,
});

const middlewares = [];
// if (process.env.NODE_ENV !== 'production') {
//   middlewares.push(require('redux-immutable-state-invariant')());
// }

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

const initialState = {
  // matrix: Array(4).fill(Array(4).fill(0)),
  matrix: [[2, 0, 0, 0], [0, 0, 0, 0], [0, 0, 4, 0], [0, 0, 0, 0]],
};

export default createStore(reducer, initialState, storeEnhancers);
