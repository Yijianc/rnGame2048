import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Cell from '../Cell';

import styles from './style';

const Row = ({row}) => {
  return (
    <View style={styles.row}>
      {
        row.map((num, idx) => <Cell value={num} key={idx} />)
      }
    </View>
  );
}

Row.propTypes = {
  row: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Row;
