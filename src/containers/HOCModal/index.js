import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Modal } from '../../components';
import GameOver from '../GameOver';

import styles from './style';

import { modalActions, gameOverAction } from '../../actions';
// const HOCModal = ({children, header, visible, gameOver, onModalClose}) => {
//   let modalChild = gameOver ? <GameOver /> : children;
//
//   return (
//     <Modal
//       header={header}
//       visible={visible}
//       onModalClose={onModalClose}>
//       {modalChild}
//     </Modal>
//   );
// };

class HOCModal extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.gameOver && !this.props.visible && !nextProps.children) {
      this.props.onGameOver();
      this.props.onModalShow({
        modalChild: <GameOver onModalClose={this.props.onModalClose} />,
        modalHeader: 'Game Over!'
      });
    }
  }
  render() {
    const {children, header, visible, onModalClose} = this.props;

    return (
      <Modal
        header={header}
        visible={visible}
        onModalClose={onModalClose}>
        {children}
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    children: state.modalState.modalChild,
    header: state.modalState.modalHeader,
    visible: state.modalState.modalVisible,
    gameOver: state.boardState.gameOver,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onModalClose: bindActionCreators(modalActions.close, dispatch),
    onModalShow: bindActionCreators(modalActions.show, dispatch),
    onGameOver: bindActionCreators(gameOverAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HOCModal);
