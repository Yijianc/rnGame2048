import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions as modalActions } from '../MenuModal';

import { Brand, Score, Button } from '../../components';
import styles from './style';

const DashBoard = ({score, bestScore, onModalShow}) => {
  return (
    <View style={styles.header}>
      <Brand />
      <View>
        <View style={styles.scorePanel}>
          <Score text={'SCORE'} score={score} />
          <Score text={'BEST'} score={bestScore} />
        </View>
        <Button
          onPress={onModalShow}
          styles={styles}
          btnText={"MENU"}
        />
      </View>
    </View>
  );
};

DashBoard.propTypes = {
  score: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired,
};

const mapStateToProps = state => {
  return {
    score: state.boardState.score,
    bestScore: state.boardState.bestScore,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onModalShow: bindActionCreators(modalActions.showModal, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
