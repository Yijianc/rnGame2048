import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';

const Cell = ({value}) => {
  const _cell = value ? `cell${value}` : 'cell';
  const _number = [2, 4].indexOf(value) > -1 ? 'baseNumber' : 'number';
  return (
    <View style={styles[_cell]}>
      <Text style={styles[_number]}>{value || null}</Text>
    </View>
  );
}

Cell.propTypes = {
  value: PropTypes.number.isRequired
};

export default Cell;
