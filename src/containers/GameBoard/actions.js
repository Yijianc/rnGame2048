import * as types from './actionTypes';

const createAction = type => () => ({type});

export const initMatrix = createAction(types.INIT_MATRIX);
export const resetMatrix = createAction(types.RESET_MATRIX);

export const placeRandomTile = createAction(types.RANDOM_TILE);

export const swipeUp = createAction(types.MOVE_UP);
export const swipeDown = createAction(types.MOVE_DOWN);
export const swipeLeft = createAction(types.MOVE_LEFT);
export const swipeRight = createAction(types.MOVE_RIGHT);
