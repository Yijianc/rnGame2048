import { RANK } from '../actions';

const MAX_RANK_COUNT = 5;

// const defaulState = [];
const defaulState = [1,3,4,5,2];

export default (state = defaulState, action) => {
  switch (action.type) {
    case RANK.INIT:
      console.log(action);
      return [...action.topRank];
    case RANK.UPDATE:
      console.log(action);
      return [...action.topRank];
    case RANK.RESET:
      console.log(action);
      return [...defaulState];
    default:
      return state;
  }
}
