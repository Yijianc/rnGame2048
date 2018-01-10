import * as types from './actionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case types.SHOW_GAMEOVER_MODAL:
      return true;
    case types.CLOSE_GAMEOVER_MODAL:
      return false;
    default:
      return state;
  }
}
