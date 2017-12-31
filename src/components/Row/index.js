import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import Cell from '../Cell';

const Row = ({row}) => {
  return (
    <View style={style.row}>
      {
        row.map((num, idx) => <Cell value={num} key={idx} />)
      }
    </View>
  );
}

const style = StyleSheet.create({
  row: {
    // display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  }
});

Row.propTypes = {
  row: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Row;
