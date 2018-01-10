import * as types from './actionTypes';
import { getItem } from '../../utils/manageLocalStorage';

const createAction = type => () => ({type});

const setMatrix = initialState => {
  console.log(initialState, 'setMatrix');
  return {
    type: types.INIT_MATRIX,
    initialState: JSON.parse(initialState)
  };
};
// export const initMatrix = createAction(types.INIT_MATRIX);
export const resetMatrix = createAction(types.RESET_MATRIX);

export const placeRandomTile = createAction(types.RANDOM_TILE);

export const swipeUp = createAction(types.MOVE_UP);
export const swipeDown = createAction(types.MOVE_DOWN);
export const swipeLeft = createAction(types.MOVE_LEFT);
export const swipeRight = createAction(types.MOVE_RIGHT);


export const initMatrix = () => {
  return dispatch => {
    getItem('state', val => dispatch(setMatrix(val)));
  };
};
