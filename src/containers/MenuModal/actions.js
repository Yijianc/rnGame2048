import * as types from './actionTypes';

const createAction = type => () => ({type});

export const showModal = createAction(types.SHOW_MODAL);
export const closeModal = createAction(types.CLOSE_MODAL);
