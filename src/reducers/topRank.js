import { RANK } from '../actions';

const MAX_RANK_COUNT = 5;

const defaulState = [];

export default (state = defaulState, action) => {
  switch (action.type) {
    case RANK.INIT:
      return [...action.topRank];
    case RANK.UPDATE:
      return [...action.topRank];
    case RANK.RESET:
      return [...defaulState];
    default:
      return state;
  }
}
