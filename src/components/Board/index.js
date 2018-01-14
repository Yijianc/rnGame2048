import React from 'react';
import PropTypes from 'prop-types';
import Row from '../Row';

const Board = ({matrix}) => matrix.map((row, idx) => <Row key={idx} row={row} />);

Board.propTypes = {
  matrix: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Board;
