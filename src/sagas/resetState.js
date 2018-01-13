import { put, takeEvery } from 'redux-saga/effects';

import { matrixActions, topRankActions, bestScoreActions, SMASH_CACHE } from '../actions/';

function* resetState() {
  yield put(matrixActions.reset());
  yield put(topRankActions.reset());
  yield put(bestScoreActions.reset());
}

export default function* watchStateReset() {
  yield takeEvery(SMASH_CACHE, resetState);
}
