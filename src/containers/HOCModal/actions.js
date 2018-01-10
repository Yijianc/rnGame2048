import * as types from './actionTypes';

const createAction = type => () => ({type});

export const showModal = (modalSetting) => {
  return {
    type: types.SHOW_MODAL,
    modalSetting
  };
};
export const closeModal = createAction(types.CLOSE_MODAL);
