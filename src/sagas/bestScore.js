import { put, takeEvery, call } from 'redux-saga/effects';

import { fetchTopRank } from '../utils/manageStorage';
import { parseArrayJSON } from '../utils/helpers';
import { SWIPE, BEST_SCORE, bestScoreActions } from '../actions/';

export default function* dispatchBestScore() {
  const topRankJSON = yield call(fetchTopRank);
  const topRank = yield call(parseArrayJSON, topRankJSON);
  const bestScore = topRank.length !== 0 ? Math.max(...topRank) : 0;

  yield put(bestScoreActions.init(bestScore));
}

// export default function* watchBestScore() {
//   yield takeEvery(BEST_SCORE.FETCH, dispatchBestScore);
// }
