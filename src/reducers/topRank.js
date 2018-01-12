import { RANK } from '../actions';

const MAX_RANK_COUNT = 5;

// const initRank = [];
const initRank = [1,3,4,5,2];

export default (state = initRank, action) => {
  switch (action.type) {
    case RANK.INIT:
      console.log(action);
      return [...action.topRank];
    case RANK.UPDATE:
      console.log(action);
      return [...action.topRank];
    default:
      return state;
  }
}
