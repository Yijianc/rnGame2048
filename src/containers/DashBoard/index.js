import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Brand, Score } from '../../components';

import styles from './style';

const DashBoard = ({score, bestScore}) => {
  return (
    <View style={styles.header}>
      <Brand />
      <View>
        <View style={styles.scorePanel}>
          <Score text={'SCORE'} score={score} />
          <Score text={'BEST'} score={bestScore} />
        </View>
        <View style={styles.controller}></View>
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
    score: state.score,
    bestScore: state.bestScore,
  };
};

export default connect(mapStateToProps)(DashBoard);
