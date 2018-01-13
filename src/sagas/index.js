import { all } from 'redux-saga/effects';

import watchBestScore from './bestScore';
import watchMatrix from './matrix';
import { watchTopRank, watchGameOver, watchTopRankBS } from './topRank';

export default function* rootSaga() {
  yield all([
    watchMatrix(),
    watchTopRank(),
    watchBestScore(),
    watchTopRankBS(),
    watchGameOver(),
  ]);
}
