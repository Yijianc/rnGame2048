import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Brand, Score, Button } from '../../components';
import BestScore from '../BestScore';
import Menu from '../Menu';
import TopRank from '../TopRank';

import styles from './style';

import { modalActions, gameOverAction } from '../../actions';

const MENU = 'Menu';
const RANK = 'Top 5';
const GAMEOVER = 'Game Over!';

class DashBoard extends React.PureComponent {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps, '<= #nextProps @DashBoard #this.props=>', this.props);
    if (nextProps.gameOver) {
      this.props.onGameOver();
      this.showRankModal(GAMEOVER);
    }
  }
  render() {
    const {score} = this.props;
    return (
      <View style={styles.header}>
        <Brand />
        <View>
          <View style={styles.scorePanel}>
            <Score text={'SCORE'} score={score} />
            <BestScore />
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
  }
  showMenuModal = () => {
    this.props.onModalShow({
      modalChild: <Menu />,
      modalHeader: MENU,
    });
  }
  showRankModal = (modalHeader = RANK) => {
    this.props.onModalShow({
      modalChild: <TopRank />,
      modalHeader,
    });
  }
}

DashBoard.propTypes = {
  score: PropTypes.number.isRequired,
  gameOver: PropTypes.bool.isRequired,
  onModalShow: PropTypes.func.isRequired,
  onGameOver: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    score: state.boardState.score,
    gameOver: state.boardState.gameOver,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onModalShow: bindActionCreators(modalActions.show, dispatch),
    onGameOver: bindActionCreators(gameOverAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
