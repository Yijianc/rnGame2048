import { all } from 'redux-saga/effects';

import dispatchBestScore from './bestScore';
// import watchBestScore from './bestScore';
import dispatchMatrix from './matrix';
// import watchMatrix from './matrix';
import { /*watchTopRank, */dispatchTopRank, watchGameOver, watchTopRankBS } from './topRank';
import watchStateReset from './resetState';

export default function* rootSaga() {
  yield all([
    // watchMatrix(),
    dispatchMatrix(),
    // watchTopRank(),
    dispatchTopRank(),
    // watchBestScore(),
    dispatchBestScore(),
    watchTopRankBS(),
    watchGameOver(),
    watchStateReset(),
  ]);
}
