import { MODAL } from '../actions';

const defaulState = {
  modalVisible: false,
  modalChild: null,
  modalHeader: '',
};

export default (state = defaulState, action) => {
  switch (action.type) {
    case MODAL.SHOW:
      const {modalChild, modalHeader} = action.modalSetting || {};
      return {
        ...state,
        modalVisible: true,
        modalChild,
        modalHeader,
      };
    case MODAL.CLOSE:
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
