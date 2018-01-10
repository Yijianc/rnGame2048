import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './style';

const GameOver = ({score}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Your score is: {score}</Text>
      </View>
    </View>
  );
};

GameOver.propTypes = {
  score: PropTypes.number.isRequired,
};

GameOver.defaultProps = {
  score: 0,
};

export default GameOver;
