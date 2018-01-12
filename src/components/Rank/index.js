import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

import styles from './style';

const Rank = ({list}) => {
  return (
    <View style={styles.rankBoard}>
      {
        list.length === 0
          ? (<Text style={styles.header}>No record.</Text>)
          : (
            list.sort((prev, next) => next - prev).map((score, idx) => {
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
          )
      }
    </View>
  );
};

Rank.propTypes = {
  list: PropTypes.array,
};

Rank.defaultProps = {
  list: [],
};

export default Rank;
