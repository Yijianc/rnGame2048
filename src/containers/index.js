import React from 'react';
import { View } from 'react-native';

import DashBoard from './DashBoard';
import { view as GameBoard } from './GameBoard';

import styles from './style';

const Main = () => {
  return (
    <View style={styles.container}>
      <DashBoard />
      <GameBoard />
    </View>
  );
};

export default Main;
