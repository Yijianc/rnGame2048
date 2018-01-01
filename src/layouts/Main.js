import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import Board from '../components/Board/index.js';
import Scores from '../components/Scores/index.js';
import Brand from '../components/Brand/index.js';

import {layoutStyles} from '../styles/index.js';

// Application entry
const Main = ({matrix, bestScore, score}) => {
  return (
    <View style={layoutStyles.app}>
      <View style={layoutStyles.header}>
        <Brand />
        <View>
          <View style={layoutStyles.scorePanel}>
            <Scores text={'SCORE'} score={score} />
            <Scores text={'BEST'} score={bestScore} />
          </View>
          <View style={layoutStyles.controller}></View>
        </View>
      </View>
      <Board matrix={matrix} />
    </View>
  );
};

export default Main;
