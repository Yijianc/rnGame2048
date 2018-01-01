import React from 'react';
import { View, Text } from 'react-native';

import {brandStyles} from '../../styles/index.js';

const Brand = () => {
  return (
    <View style={brandStyles.title}>
      <Text style={brandStyles.text}>2048</Text>
    </View>
  );
};

export default Brand;
