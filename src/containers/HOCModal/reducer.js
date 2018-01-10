import * as types from './actionTypes';

const initialState = {
  modalVisible: false,
  modalChild: null,
  modalHeader: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_MODAL:
      const {modalChild, modalHeader} = action.modalSetting || {};
      return {
        ...state,
        modalVisible: true,
        modalChild,
        modalHeader,
      };
    case types.CLOSE_MODAL:
      return {
        ...state,
        modalVisible: false,
        modalChild: null,
        modalHeader: '',
      };
    default:
      return state;
  }
}
