import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './style';

const LARGE_NUMBER = 10000;

const Score = ({text, score}) => {
  const _socre = score > LARGE_NUMBER ? 'largeScore' : 'score';
  return (
    <View style={styles.bandScore}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles[_socre]}>{score}</Text>
    </View>
  );
};

Score.defaultProps = {
  text: 'SCORE',
  score: 0,
};

Score.propTypes = {
  text: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default Score;
