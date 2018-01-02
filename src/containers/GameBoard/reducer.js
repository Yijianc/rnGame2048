import * as types from './actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.MOVE_UP:
      return state;
    case types.MOVE_DOWN:
      return state;
    case types.MOVE_LEFT:
      return state;
    case types.MOVE_RIGHT:
      return state;
    default:
      return state;
  }
}
