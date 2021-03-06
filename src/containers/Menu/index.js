import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Menu } from '../../components';
import AlertDialog from '../AlertDialog';

import { modalActions, matrixActions, newGameAction } from '../../actions';

const MenuWrapper = (props) => {
  return (
    <Menu {...props}>
      <AlertDialog />
    </Menu>
  );
};

MenuWrapper.propTypes = {
  onModalClose: PropTypes.func.isRequired,
  onMatrixReset: PropTypes.func.isRequired,
  onGameRestart: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    onModalClose: bindActionCreators(modalActions.close, dispatch),
    onMatrixReset: bindActionCreators(matrixActions.reset, dispatch),
    onGameRestart: bindActionCreators(newGameAction, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(MenuWrapper);
