import { put, take, takeEvery, select, all, call } from 'redux-saga/effects';

import { getItem, fetchTopRank, fetchMatrix } from '../utils/manageStorage';
import { parseArrayJSON } from '../utils/helpers';
import {
  RANK, BEST_SCORE, GAME_OVER,
  MATRIX, bestScoreActions, topRankActions,
  modalActions, matrixActions
} from '../actions/';
import { getScore, getBestScore, getTopRank } from '../reducers/selectors';

const MAX_RANK_COUNT = 5;

function* getInitBestScore() {
  const topRankJSON = yield call(fetchTopRank);
  const topRank = yield call(parseArrayJSON, topRankJSON);
  const bestScore = topRank.length !== 0 ? Math.max(...topRank) : 0;

  yield put(bestScoreActions.init(bestScore));
}

function* watchBestScoreInit() {
  yield takeEvery(BEST_SCORE.FETCH, getInitBestScore);
}

function* getInitTopRank() {
  const topRankJSON = yield call(fetchTopRank);
  const topRank = yield call(parseArrayJSON, topRankJSON);

  yield put(topRankActions.init(topRank));
}

function* watchTopRankInit() {
  yield takeEvery(RANK.FETCH, getInitTopRank);
}

function* getInitMatrix() {
  // const initState = yield call(getItem, 'state');
  const matrixJSON = yield call(fetchMatrix);

  console.log(matrixJSON, '#matrixJSON');

  yield put(matrixActions.init(JSON.parse(matrixJSON)));
}

function* watchMatrixInit() {
  yield takeEvery(MATRIX.FETCH, getInitMatrix);
}

function* updateTopRank() {
  const score = yield select(getScore);
  const topRank = yield select(getTopRank);

  let newTopRank = [...topRank];

  // console.log(newTopRank, '#updateTopRank', score);

  if (newTopRank.findIndex(item => score === item) < 0) {
    newTopRank.push(score);
    newTopRank = newTopRank.sort((prev, next) => next - prev);

    if (newTopRank.length > MAX_RANK_COUNT) {
      newTopRank.splice(MAX_RANK_COUNT);
    }
  }

  yield put(topRankActions.update(newTopRank));
}

function* watchGameOver() {
  yield takeEvery(GAME_OVER, updateTopRank);
}

export default function* rootSaga() {
  yield all([
    watchMatrixInit(),
    watchBestScoreInit(),
    watchTopRankInit(),
    watchGameOver(),
  ]);
}
