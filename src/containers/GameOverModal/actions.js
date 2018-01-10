import * as types from './actionTypes';

const createAction = type => () => ({type});

export const showGameOverModal = createAction(types.SHOW_GAMEOVER_MODAL);
export const closeGameOverModal = createAction(types.CLOSE_GAMEOVER_MODAL);
