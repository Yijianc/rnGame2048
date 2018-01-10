import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions as modalActions } from '../HOCModal';
import { actions as matrixActions } from '../GameBoard';

import { Brand, Score, Button, Menu, TopRank } from '../../components';

import styles from './style';

const MENU = 'Menu';
const RANK = 'Top 5';

const DashBoard = ({score, bestScore, list, onModalShow, onModalClose, onMatrixReset}) => {
  showMenuModal = () => {
    let modalSetting = {
      modalChild: (
        <Menu
          onModalClose={onModalClose}
          onMatrixReset={onMatrixReset}
        />
      ),
      modalHeader: MENU,
    };
    onModalShow(modalSetting);
  }
  showRankModal = () => {
    let modalSetting = {
      modalChild: (
        <TopRank
          list={list}
          onModalClose={onModalClose}
        />
      ),
      modalHeader: RANK,
    };
    onModalShow(modalSetting);
  }
  return (
    <View style={styles.header}>
      <Brand />
      <View>
        <View style={styles.scorePanel}>
          <Score text={'SCORE'} score={score} />
          <Score text={'BEST'} score={bestScore} />
        </View>
        <View style={styles.btnPanel}>
          <Button
            onPress={this.showMenuModal}
            styles={styles}
            btnText={MENU.toUpperCase()}
          />
          <Button
            onPress={this.showRankModal}
            styles={styles}
            btnText={RANK.toUpperCase()}
          />
        </View>
      </View>
    </View>
  );
};

DashBoard.propTypes = {
  score: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired,
  list: PropTypes.array.isRequired,
  onModalShow: PropTypes.func.isRequired,
  onModalClose: PropTypes.func.isRequired,
  onMatrixReset: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    score: state.boardState.score,
    bestScore: state.boardState.bestScore,
    list: state.boardState.list,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onModalShow: bindActionCreators(modalActions.showModal, dispatch),
    onModalClose: bindActionCreators(modalActions.closeModal, dispatch),
    onMatrixReset: bindActionCreators(matrixActions.resetMatrix, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
