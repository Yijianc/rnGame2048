import { put, takeEvery, select, call } from 'redux-saga/effects';

import { GAME_OVER, NEW_GAME, topRankActions } from '../actions/';
import { getScore, getTopRank } from '../reducers/selectors';

const TOP_RANK_LIMIT = 5;

function* updateTopRank() {
  const score = yield select(getScore);
  const topRank = yield select(getTopRank);

  let newTopRank = [...topRank];

  if (newTopRank.length === TOP_RANK_LIMIT && score < Math.min(...newTopRank)) return;

  if (newTopRank.findIndex(item => score === item) < 0) {
    newTopRank.push(score);
    newTopRank = newTopRank.sort((prev, next) => next - prev);

    if (newTopRank.length > TOP_RANK_LIMIT) {
      newTopRank.splice(TOP_RANK_LIMIT);
    }
  }

  yield put(topRankActions.update(newTopRank));
}

export default function* watchTopRankUpdate() {
  yield takeEvery([GAME_OVER, NEW_GAME], updateTopRank);
}
