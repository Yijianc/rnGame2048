import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Board } from '../../components';

const GameBoard = ({matrix}) => <Board matrix={matrix} />;

GameBoard.propTypes = {
  matrix: PropTypes.arrayOf(PropTypes.array).isRequired,
};

const mapStateToProps = state => {
  return {
    matrix: state.matrix,
  };
};

export default connect(mapStateToProps)(GameBoard);
