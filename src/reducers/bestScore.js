import { BEST_SCORE } from '../actions';

export default (state = 0, action) => {
  const {type, bestScore, score} = action;
  switch (type) {
    case BEST_SCORE.INIT:
      return bestScore;
    case BEST_SCORE.UPDATE:
      return score > bestScore ? score : bestScore;
    default:
      return state;
  }
}
