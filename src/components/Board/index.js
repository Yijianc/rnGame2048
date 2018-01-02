import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Row from '../Row';

import styles from './style';

// Game board
const Board = ({matrix}) => {
  return (
    <View style={styles.container}>
      <View style={styles.board}>
        {
          matrix.map((row, idx) => <Row key={idx} row={row} />)
        }
      </View>
    </View>
  );
}

Board.propTypes = {
  matrix: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Board;
