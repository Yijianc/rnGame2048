import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { Brand, Board, Scores } from '../components';

import styles from './style.main';

// Application entry
const Main = ({matrix, bestScore, score}) => {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Brand />
        <View>
          <View style={styles.scorePanel}>
            <Scores text={'SCORE'} score={score} />
            <Scores text={'BEST'} score={bestScore} />
          </View>
          <View style={styles.controller}></View>
        </View>
      </View>
      <Board matrix={matrix} />
    </View>
  );
};

export default Main;
