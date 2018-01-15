import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

import { setItem } from './utils/manageStorage';

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

  // console.log(JSON.stringify(state), 'APP_STATE');

  setItem('APP_STATE', state);
});

export default store;
