import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import Row from '../Row/index.js';

import {boardStyles} from '../../styles/index.js';

// Game board
const Board = ({matrix}) => {
  _renderItem = ({item, index}) => <Row key={index} row={item}/>;
  _keyExtractor = (item, index) => index;
  return (
    <View style={boardStyles.container}>
      <View style={boardStyles.board}>
        {
          matrix.map((row, idx) => <Row key={idx} row={row} />)
        }
      </View>
    </View>
  );
  return (
    <View style={boardStyles.container}>
      <FlatList
        data={matrix}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
        contentContainerStyle={boardStyles.board}
      />
    </View>
  );
}

Board.propTypes = {
  matrix: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Board;
