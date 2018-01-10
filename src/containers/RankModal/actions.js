import * as types from './actionTypes';

const createAction = type => () => ({type});

export const showRankModal = createAction(types.SHOW_RANK_MODAL);
export const closeRankModal = createAction(types.CLOSE_RANK_MODAL);
