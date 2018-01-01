import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Board from '../components/Board/index.js';
import Scores from '../components/Scores/index.js';
import Brand from '../components/Brand/index.js';

import {layoutStyles} from '../styles/index.js';

const { scale, width, height, fontScale } = Dimensions.get('window');
console.log(Dimensions.get('window'), 'Dimensions', Dimensions);

// Application entry
const App = ({matrix, bestScore, score}) => {
  return (
    <View style={layoutStyles.app}>
      <View style={layoutStyles.header}>
        <Brand />
        <View style={layoutStyles.scorePanel}>
          <Scores text={'得分'} score={score} />
          <Scores text={'最佳'} score={bestScore} />
        </View>
      </View>
      <Board matrix={matrix} />
    </View>
  );
};

export default App;
