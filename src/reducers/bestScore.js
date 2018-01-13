import { BEST_SCORE } from '../actions';

const defaultBestScore = 0;

export default (state = defaultBestScore, action) => {
  const {type, bestScore, score} = action;
  switch (type) {
    case BEST_SCORE.INIT:
      console.log(action);
      return bestScore;
    case BEST_SCORE.UPDATE:
      console.log(action);
      return score > bestScore ? score : bestScore;
    case BEST_SCORE.RESET:
      console.log(action);
      return defaultBestScore;
    default:
      return state;
  }
}
