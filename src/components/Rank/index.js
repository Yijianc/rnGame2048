import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import Button from '../Button';

import styles from './style';

const TopRank = ({list, onModalClose}) => {
  let isEmptyList = list.length === 0;
  const container = isEmptyList ? (
    <Text style={styles.header}>No record.</Text>
  ) : (
    list
    .sort((prev, next) => next - prev)
    .map((score, idx) => {
      return (
        <View key={idx} style={styles.list}>
          <View style={styles[idx > 0 ? 'firstSeq' : 'seq']}>
            <Text style={styles.text}>{idx + 1}</Text>
          </View>
          <View style={styles.score}>
            <Text style={styles.text}>{score}</Text>
          </View>
        </View>
      );
    })
  );

  return (
    <View style={styles.rankBoard}>
      {container}
    </View>
  );
};

TopRank.propTypes = {
  list: PropTypes.array,
  onModalClose: PropTypes.func,
};

TopRank.defaultProps = {
  list: [],
  onModalClose: () => {}
};

export default TopRank;
