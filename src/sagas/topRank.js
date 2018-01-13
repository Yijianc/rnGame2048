import { put, takeEvery, select, call } from 'redux-saga/effects';

import { fetchTopRank } from '../utils/manageStorage';
import { parseArrayJSON } from '../utils/helpers';
import { BEST_SCORE, RANK, GAME_OVER, NEW_GAME, topRankActions } from '../actions/';
import { getScore, getBestScore, getTopRank } from '../reducers/selectors';

const MAX_RANK_COUNT = 5;

export function* dispatchTopRank() {
  const topRankJSON = yield call(fetchTopRank);
  const topRank = yield call(parseArrayJSON, topRankJSON);

  console.log(topRankJSON, '<= #topRankJSON #topRank =>', topRank);

  yield put(topRankActions.init(topRank));
}

// export function* watchTopRank() {
//   yield takeEvery(RANK.FETCH, dispatchTopRank);
// }

function* updateTopRankGO() {
  const score = yield select(getScore);
  const topRank = yield select(getTopRank);

  let newTopRank = [...topRank];

  console.log(newTopRank, '#updateTopRankGO', score);

  if (newTopRank.findIndex(item => score === item) < 0) {
    newTopRank.push(score);
    newTopRank = newTopRank.sort((prev, next) => next - prev);

    if (newTopRank.length > MAX_RANK_COUNT) {
      newTopRank.splice(MAX_RANK_COUNT);
    }
  }

  yield put(topRankActions.update(newTopRank));
}

export function* watchGameOver() {
  yield takeEvery([GAME_OVER, NEW_GAME], updateTopRankGO);
}

function* updateTopRankBS() {
  const bestScore = yield select(getBestScore);
  const topRank = yield select(getTopRank);

  let newTopRank = [...topRank];

  const maxScore = Math.max(...newTopRank);

  if (bestScore > maxScore) {
    newTopRank = newTopRank.sort((prev, next) => next - prev);
    newTopRank.shift();
    newTopRank = [bestScore, ...newTopRank];
  }

  yield put(topRankActions.update(newTopRank));
}

export function* watchTopRankBS() {
  yield takeEvery(BEST_SCORE.UPDATE, updateTopRankBS);
}
