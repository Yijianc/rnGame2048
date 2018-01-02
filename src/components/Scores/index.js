import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';

const Scores = ({text, score}) => {
  return (
    <View style={styles.bandScore}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.score}>{score}</Text>
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
