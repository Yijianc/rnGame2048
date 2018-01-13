import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

import { getItem, multiSet, getAllKeys } from './utils/manageStorage';

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
  getAllKeys().then((value) => console.log(value, '<= #getAllKeys #store.subscribe'));
  const multiPairs = [
    ['STATE', state],
    ['TOP_RANK', state.topRank],
    ['MATRIX', state.boardState],
  ];
  multiSet(multiPairs);
});

export default store;
