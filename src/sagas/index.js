import { put, take, takeEvery, select, all, call } from 'redux-saga/effects';

import { getItem, fetchTopRank, fetchBestScore } from '../utils/manageStorage';
import {
  RANK, BEST_SCORE, GAME_OVER,
  MATRIX, bestScoreActions, topRankActions,
  modalActions, matrixActions
} from '../actions/';
import { getScore, getBestScore, getTopRank } from '../reducers/selectors';

const MAX_RANK_COUNT = 5;

function* getInitBestScore() {
  const bestScore = yield call(fetchBestScore);
  // const topRank = yield call(fetchTopRank);

  // console.log(bestScore, '#fetchBestScore');
  yield put(bestScoreActions.init(JSON.parse(bestScore)));
}

function* watchBestScoreInit() {
  yield takeEvery(BEST_SCORE.FETCH, getInitBestScore);
}

function* getInitTopRank() {
  const topRank = yield call(fetchTopRank);
  console.log(topRank, '#fetchTopRank');
  yield put(topRankActions.init(JSON.parse(topRank)));
}

function* watchTopRankInit() {
  yield takeEvery(RANK.FETCH, getInitTopRank);
}

function* getInitMatrix() {
  const initState = yield call(getItem, 'state');
  console.log(initState, '#initState');
  yield put(matrixActions.init(JSON.parse(initState)));
}

function* watchMatrixInit() {
  yield takeEvery(MATRIX.FETCH, getInitMatrix);
}

function* updateTopRank() {
  const score = yield select(getScore);
  const topRank = yield select(getTopRank);

  let newTopRank = [...topRank];

  console.log(newTopRank, '#updateTopRank', score);

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
    watchBestScoreInit(),
    watchTopRankInit(),
    watchMatrixInit(),
    watchGameOver(),
  ]);
}
