import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

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

DashBoard.defaultProps = {
  score: 0,
  bestScore: 0,
};

DashBoard.propTypes = {
  score: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired,
};

export default DashBoard;
