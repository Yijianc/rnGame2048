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

import { modalActions, topRankActions } from '../../actions';

const MENU = 'Menu';
const RANK = 'Top 5';

class DashBoard extends React.PureComponent {
  showMenuModal = () => {
    this.props.onModalShow({
      modalChild: <Menu />,
      modalHeader: MENU,
    });
  }
  showRankModal = () => {
    this.props.onModalShow({
      modalChild: <TopRank />,
      modalHeader: RANK,
    });
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
  componentDidMount() {
    this.props.onTopRankFetch();
  }
}

DashBoard.propTypes = {
  score: PropTypes.number.isRequired,
  onModalShow: PropTypes.func.isRequired,
  onModalClose: PropTypes.func.isRequired,
  onTopRankFetch: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    score: state.boardState.score,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onModalShow: bindActionCreators(modalActions.show, dispatch),
    onModalClose: bindActionCreators(modalActions.close, dispatch),
    onTopRankFetch: bindActionCreators(topRankActions.fetch, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
