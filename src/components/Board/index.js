import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Row from '../Row/index.js';

import {boardStyles} from '../../styles/index.js';

// Game board
const Board = ({matrix}) => {
  return (
    <View style={boardStyles.container}>
      <View style={boardStyles.board}>
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
