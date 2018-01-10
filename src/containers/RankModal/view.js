import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as rankActions from './actions';
import { actions as matrixActions } from '../GameBoard';

import { Button } from '../../components';

import styles from './style';

const RankModal = ({list, rankModalVisible, onModalClose}) => {
  let isEmptyList = list.length === 0;

  let headerText = isEmptyList ? 'No record found yet.' : 'Top 5';

  return (
    <Modal
      animationType={"fade"}
      transparent={false}
      visible={rankModalVisible}
      onRequestClose={() => console.log('######')}>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Button
            onPress={() => onModalClose()}
            styles={styles}
            btnText={"X"}
          />
        </View>
        <View style={styles.rankBoard}>
          <Text style={styles.header}>{headerText}</Text>
          {
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
          }
        </View>
      </View>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    rankModalVisible: state.rankModalVisible,
    list: state.list || [],
    // list: state.list || [16880, 3232, 323, 43, 15],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onModalClose: bindActionCreators(rankActions.closeRankModal, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RankModal);
