import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Modal } from '../../components';

import { modalActions } from '../../actions';

const HOCModal = ({children, header, visible, onModalClose}) => {
  return (
    <Modal
      header={header}
      visible={visible}
      onModalClose={onModalClose}>
      {children}
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    children: state.modalState.modalChild,
    header: state.modalState.modalHeader,
    visible: state.modalState.modalVisible,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onModalClose: bindActionCreators(modalActions.close, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HOCModal);
