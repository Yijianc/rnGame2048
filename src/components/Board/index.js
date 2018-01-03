import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Row from '../Row';

// Game board
const Board = ({matrix}) => matrix.map((row, idx) => <Row key={idx} row={row} />);

Board.propTypes = {
  matrix: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Board;
