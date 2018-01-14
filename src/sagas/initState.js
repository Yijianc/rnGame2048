import { put, call } from 'redux-saga/effects';

import { matrixActions, topRankActions, bestScoreActions } from '../actions/';
import { fetchAppState } from '../utils/manageStorage';
import { detectJSONStr, detectArray } from '../utils/helpers';

export default function* fetchStorageState() {
  const appStateJSON = yield call(fetchAppState);

  const isJSON = yield call(detectJSONStr, appStateJSON);

  console.log(typeof appStateJSON, '<= #appStateJSON #isJSON =>', isJSON);

  const appState = appStateJSON && isJSON ? JSON.parse(appStateJSON) : {};

  console.log(appStateJSON, '<= #appStateJSON @fetchStorageState #appState =>', appState);

  if (appState) {
    const {bestScore = 0, boardState, topRank} = appState;

    let initBestScofe = bestScore;
    let initTopRank = [];

    if (yield call(detectArray, topRank)) {
      initTopRank = topRank;

      if (topRank.length !== 0) {
        const maxScore = Math.max(...topRank);
        initBestScofe = maxScore > initBestScofe ? maxScore : initBestScofe;
      }
    }

    yield put(bestScoreActions.init(initBestScofe));
    yield put(matrixActions.init(boardState));
    yield put(topRankActions.init(initTopRank));
  }
}
