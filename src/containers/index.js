import React from 'react';
import { View } from 'react-native';

import DashBoard from './DashBoard';
import GameBoard from './GameBoard';
import HOCModal from './HOCModal';

import styles from './style';

const Main = () => {
  return (
    <View style={styles.container}>
      <DashBoard />
      <GameBoard />
      <HOCModal />
    </View>
  );
};

export default Main;
