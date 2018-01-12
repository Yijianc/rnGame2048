import { RANK } from '../actions';

const MAX_RANK_COUNT = 5;

export default (state = [1,3,4,5,2], action) => {
  switch (action.type) {
    case RANK.INIT:
      return [...action.topRank];
    case RANK.UPDATE:
      return [...action.topRank];
    // case RANK.UPDATE:
    //   const {score} = action;
    //   let nextState = [...state];
    //
    //   if (nextState.findIndex(item => score === item) < 0) {
    //     nextState.push(score);
    //     nextState = nextState.sort((prev, next) => next - prev);
    //
    //     if (nextState.length > MAX_RANK_COUNT) {
    //       nextState.splice(MAX_RANK_COUNT);
    //     }
    //   }
    //   return nextState;
    default:
      return state;
  }
}
