import { all } from 'redux-saga/effects';

import fetchStorageState from './initState';
import watchTopRankUpdate from './updateTopRank';
import watchStateReset from './resetState';

export default function* rootSaga() {
  yield all([
    fetchStorageState(),
    watchTopRankUpdate(),
    watchStateReset(),
  ]);
}
