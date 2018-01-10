import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { TopRank } from '../../components';

import styles from './style';

const GameOver = ({score, list, onModalClose}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Your score is: {score}</Text>
      </View>
      <TopRank
        list={list}
        onModalClose={onModalClose}
      />
    </View>
  );
};

GameOver.propTypes = {
  score: PropTypes.number.isRequired,
};

GameOver.defaultProps = {
  score: 0,
};

const mapStateToProps = state => {
  return {
    score: state.boardState.score,
    list: state.boardState.list,
  };
};

export default connect(mapStateToProps)(GameOver);
