import React from 'react';
import { View } from 'react-native';

import { view as DashBoard } from './DashBoard';
import { view as GameBoard } from './GameBoard';
import { view as HOCModal } from './HOCModal';

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
