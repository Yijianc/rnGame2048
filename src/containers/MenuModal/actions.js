import * as types from './actionTypes';

const createAction = type => () => ({type});

export const showMenuModal = createAction(types.SHOW_MENU_MODAL);
export const closeMenuModal = createAction(types.CLOSE_MENU_MODAL);
