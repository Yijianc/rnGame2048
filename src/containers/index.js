import React from 'react';
import { View } from 'react-native';

import { view as DashBoard} from './DashBoard';
import { view as GameBoard } from './GameBoard';
import { view as MenuModal } from './MenuModal';
import { view as RankModal } from './RankModal';

import styles from './style';

const Main = () => {
  return (
    <View style={styles.container}>
      <DashBoard />
      <GameBoard />
      <MenuModal />
      <RankModal />
    </View>
  );
};

export default Main;
