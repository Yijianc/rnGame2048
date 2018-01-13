import { RANK } from '../actions';

const MAX_RANK_COUNT = 5;

const defaultRank = [];
// const defaultRank = [1,3,4,5,2];

export default (state = defaultRank, action) => {
  switch (action.type) {
    case RANK.INIT:
      console.log(action);
      return [...action.topRank];
    case RANK.UPDATE:
      console.log(action);
      return [...action.topRank];
    case RANK.RESET:
      console.log(action);
      return [...defaultRank];
    default:
      return state;
  }
}
