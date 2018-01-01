import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import {cellStyles} from '../../styles/index.js';

const Cell = ({value}) => {
  const _cell = value ? `cell${value}` : 'cell';
  const _number = [2, 4].indexOf(value) > -1 ? 'baseNumber' : 'number';
  return (
    <View style={cellStyles[_cell]}>
      <Text style={cellStyles[_number]}>{value || null}</Text>
    </View>
  );
}

Cell.propTypes = {
  value: PropTypes.number.isRequired
};

export default Cell;
