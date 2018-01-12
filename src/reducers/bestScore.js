import { BEST_SCORE } from '../actions';

export default (state = 0, action) => {
  const {type, bestScore, score} = action;
  switch (type) {
    case BEST_SCORE.INIT:
      console.log(action);
      return bestScore;
    case BEST_SCORE.UPDATE:
      console.log(action);
      return score > bestScore ? score : bestScore;
    default:
      return state;
  }
}
