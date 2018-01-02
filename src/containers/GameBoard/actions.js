import {
  MOVE_UP,
  MOVE_DOWN,
  MOVE_LEFT,
  MOVE_RIGHT,
} from './actionTypes';

const createAction = type => () => ({type});

export const moveUp = createAction(MOVE_UP);
export const moveDown = createAction(MOVE_DOWN);
export const moveLeft = createAction(MOVE_LEFT);
export const moveUpRight = createAction(MOVE_RIGHT);
