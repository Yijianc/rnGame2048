import React from 'react';
import { Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as gameOverActions from './actions';

import { Button, Modal } from '../../components';

import styles from './style';

const GameOverModal = ({gameOver, score, onModalClose}) => {
  return (
    <Modal visible={gameOver}>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Button
            onPress={() => onModalClose()}
            styles={styles}
            btnText={"X"}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.header}>Game Over!</Text>
          <Text style={styles.header}>Your score is: {score}</Text>
        </View>
      </View>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    gameOver: state.boardState.gameOver,
    score: state.boardState.score,
    list: state.boardState.list,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onModalClose: bindActionCreators(gameOverActions.closeGameOverModal, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameOverModal);
