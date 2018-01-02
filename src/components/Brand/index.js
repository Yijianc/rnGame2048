import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';

const Brand = () => {
  return (
    <View style={styles.title}>
      <Text style={styles.text}>2048</Text>
    </View>
  );
};

export default Brand;
