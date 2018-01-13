import { put, takeEvery, call } from 'redux-saga/effects';

import { fetchMatrix } from '../utils/manageStorage';
import { MATRIX, matrixActions } from '../actions/';

function* dispatchMatrix() {
  const matrixJSON = yield call(fetchMatrix);

  console.log(matrixJSON, '#matrixJSON');

  yield put(matrixActions.init(JSON.parse(matrixJSON)));
}

export default function* watchMatrix() {
  yield takeEvery(MATRIX.FETCH, dispatchMatrix);
}
