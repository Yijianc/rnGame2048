import { BEST_SCORE } from '../actions';

const defaulState = 0;

export default (state = defaulState, action) => {
  const {type, bestScore, score} = action;
  switch (type) {
    case BEST_SCORE.INIT:
      return bestScore;
    case BEST_SCORE.UPDATE:
      return score > bestScore ? score : bestScore;
    case BEST_SCORE.RESET:
      return defaulState;
    default:
      return state;
  }
}
