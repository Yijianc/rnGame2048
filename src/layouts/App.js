import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Board from '../components/Board/index.js';
import Scores from '../components/Scores/index.js';

// Application entry
const App = ({matrix, bestScore, score}) => {
  return (
    <View style={styles.app}>
      <View style={styles.head}>
        <View style={styles.title}>
          <Text style={styles.text}>2048</Text>
        </View>
        <Scores bestScore={bestScore} score={score} />
      </View>
      <Board matrix={matrix} />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    padding: 10,
  },
  head: {
    // flex: 1,
    height: 100,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  }
});

export default App;
