import { all } from 'redux-saga/effects';

import watchBestScore from './bestScore';
// import dispatchMatrix from './matrix';
import watchMatrix from './matrix';
import { watchTopRank, watchGameOver, watchTopRankBS } from './topRank';

export default function* rootSaga() {
  yield all([
    watchMatrix(),
    // dispatchMatrix(),
    watchTopRank(),
    watchBestScore(),
    watchTopRankBS(),
    watchGameOver(),
  ]);
}
