import { combineReducers } from 'redux';

import bestScoreReducer from './bestScore';
import matrixReducer from './matrix';
import modalReducer from './modal';
import topRankReducer from './topRank';

const rootReducer = combineReducers({
  bestScore: bestScoreReducer,
  boardState: matrixReducer,
  modalState: modalReducer,
  topRank: topRankReducer,
});

export default rootReducer;
