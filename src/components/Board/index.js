import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Row from '../Row/index.js';

import styles from './style.js';

// Game board
const Board = ({matrix}) => {
  _renderItem = ({item, index}) => <Row key={index} row={item}/>;
  _keyExtractor = (item, index) => index;
  return (
    <FlatList
      contentContainerStyle={styles.flexContainer}
      data={matrix}
      renderItem={this._renderItem}
      keyExtractor={this._keyExtractor}
    />
  );
}

// const styles = StyleSheet.create({
//   board: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'yellow'
//   }
// });

Board.propTypes = {
  matrix: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Board;
