import { MODAL } from '../actions';

const initialState = {
  modalVisible: false,
  modalChild: null,
  modalHeader: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MODAL.SHOW:
      console.log(action);
      const {modalChild, modalHeader} = action.modalSetting || {};
      return {
        ...state,
        modalVisible: true,
        modalChild,
        modalHeader,
      };
    case MODAL.CLOSE:
      console.log(action);
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
