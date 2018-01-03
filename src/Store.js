import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { reducer/* as matrixReducer*/ } from './containers/GameBoard';

const win = window;

// const reducer = combineReducers({
//   matrix: matrixReducer,
//   // score: 0,
//   // bestScore: 0,
// });

const middlewares = [];
// if (process.env.NODE_ENV !== 'production') {
//   middlewares.push(require('redux-immutable-state-invariant')());
// }

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

const initialState = {
  matrix: Array(4).fill(Array(4).fill(0)),
  score: 0,
  bestScore: 2048,
  gameOver: false,
};

export default createStore(reducer, initialState, storeEnhancers);
