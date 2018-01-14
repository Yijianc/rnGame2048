import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { Rank } from '../../components';

import styles from './style';

const TopRank = ({currScore, topRank}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Current score:</Text>
        <Text style={styles.score}>{currScore}</Text>
      </View>
      <Rank list={topRank} />
    </View>
  );
};

TopRank.propTypes = {
  topRank: PropTypes.array.isRequired,
  currScore: PropTypes.number.isRequired,
};

const mapStateToProps = state => {
  return {
    topRank: state.topRank,
    currScore: state.boardState.score,
  };
};

export default connect(mapStateToProps)(TopRank);
