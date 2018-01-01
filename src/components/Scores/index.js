import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import {scoreStyles} from '../../styles/index.js';

const Scores = ({text, score}) => {
  return (
    <View style={scoreStyles.bandScore}>
      <Text style={scoreStyles.text}>{text}</Text>
      <Text style={scoreStyles.score}>{score}</Text>
    </View>
  );
  // return (
  //   <View style={scoreStyles.scorePanel}>
  //     <View style={scoreStyles.bandScore}>
  //       <Text style={scoreStyles.text}>{text}</Text>
  //       <Text style={scoreStyles.score}>{score}</Text>
  //     </View>
  //     <View style={scoreStyles.bandScore}>
  //       <Text style={scoreStyles.best}>最佳</Text>
  //       <Text style={scoreStyles.text}>{bestScore}</Text>
  //     </View>
  //   </View>
  // );
};

Scores.defaultProps = {
  text: '得分',
  score: 0,
  // bestScore: 0,
};

Scores.propTypes = {
  text: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  // bestScore: PropTypes.number.isRequired
};

export default Scores;
