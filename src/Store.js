import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { multiSet } from './utils/manageStorage';

import rootReducer from './reducers';

import rootSaga from './sagas';

const win = window;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
// if (process.env.NODE_ENV !== 'production') {
//   middlewares.push(require('redux-immutable-state-invariant')());
// }

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

const store = createStore(rootReducer, {}, storeEnhancers);
sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  const state = store.getState();
  console.log(JSON.stringify(state), 'state');
  const multiPairs = [
    ['state', state],
    // ['topRank', state.topRank],
    // ['boardState', state.boardState],
  ];
  multiSet(multiPairs);
});

export default store;
