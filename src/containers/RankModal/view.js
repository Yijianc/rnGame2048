import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as rankActions from './actions';
import { actions as matrixActions } from '../GameBoard';

import { Modal, TopRank } from '../../components';

import styles from './style';

const RankModal = ({list, rankModalVisible, onModalClose}) => {
  return (
    <Modal
      headerText={"Top 5"}
      visible={rankModalVisible}
      onModalClose={onModalClose}>
      <TopRank
        list={list}
        styles={styles}
        onModalClose={onModalClose}
      />
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    rankModalVisible: state.rankModalVisible,
    // list: [1232, 4323231, 423],
    list: state.boardState.list,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onModalClose: bindActionCreators(rankActions.closeRankModal, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RankModal);
