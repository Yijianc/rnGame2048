import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Cell = ({value}) => {
  return (
    <View style={styles.cell}>
      <Text style={styles.number}>{value || null}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cell: {
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    margin: 1,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  number: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  }
});

Cell.propTypes = {
  value: PropTypes.number.isRequired
};

export default Cell;
