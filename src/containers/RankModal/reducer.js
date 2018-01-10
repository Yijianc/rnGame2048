import * as types from './actionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case types.SHOW_RANK_MODAL:
      return true;
    case types.CLOSE_RANK_MODAL:
      return false;
    default:
      return state;
  }
}
