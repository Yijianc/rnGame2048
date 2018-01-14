import { put, call } from 'redux-saga/effects';

import { matrixActions, topRankActions, bestScoreActions } from '../actions/';
import { fetchAppState } from '../utils/manageStorage';
import { detectJSONStr, detectArray } from '../utils/helpers';

export default function* fetchStorageState() {
  const appStateJSON = yield call(fetchAppState);

  const isJSON = yield call(detectJSONStr, appStateJSON);

  console.log('#isJSON =>', isJSON);

  const appState = isJSON ? JSON.parse(appStateJSON) : null;

  console.log(appStateJSON, '<= #appStateJSON @fetchStorageState #appState =>', appState);

  if (appState) {
    const {bestScore, boardState, topRank} = appState;

    let initBestScofe = bestScore;

    if (boardState) {
      yield put(matrixActions.init(boardState));
    }

    if (yield call(detectArray, topRank)) {

      initBestScofe = topRank.length !== 0 ? Math.max(...topRank) : initBestScofe;

      yield put(topRankActions.init(topRank));
    }

    yield put(bestScoreActions.init(initBestScofe));
  }
}
