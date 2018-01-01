import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import {scoreStyles} from '../../styles/index.js';

const Scores = ({text, score}) => {
  return (
    <View style={scoreStyles.bandScore}>
      <Text style={scoreStyles.text}>{text}</Text>
      <Text style={scoreStyles.score}>{score}</Text>
    </View>
  );
};

Scores.defaultProps = {
  text: 'SCORE',
  score: 0,
};

Scores.propTypes = {
  text: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default Scores;
