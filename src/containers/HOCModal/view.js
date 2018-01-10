import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as modalActions from './actions';

import { Modal } from '../../components';
import styles from './style';

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
    onModalClose: bindActionCreators(modalActions.closeModal, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HOCModal);
