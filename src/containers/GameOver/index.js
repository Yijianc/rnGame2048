import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TopRank from '../TopRank';

import styles from './style';

import { topRankActions } from '../../actions';
// const GameOver = ({score}) => {
//   return (
//     <View style={styles.container}>
//       <View>
//         <Text style={styles.header}>Your score is: {score}</Text>
//       </View>
//       <TopRank />
//     </View>
//   );
// };

class GameOver extends React.Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.gameOver;
  // }
  // componentWillReceiveProps(nextProps) {
  //   console.log(this.props, '#componentWillReceiveProps', nextProps);
  //   if (nextProps.gameOver) {
  //     this.props.onTopRankUpdate(nextProps.score);
  //   }
  // }
  render() {
    // console.log('#render');
    const {score} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Your score is</Text>
          <Text style={styles.score}>{score}</Text>
        </View>
        <TopRank />
      </View>
    );
  }
  // async componentDidMount() {
  //   const {onTopRankInit, onTopRankUpdate, score} = this.props;
  //   let initAsync = await this.SetTopRank(onTopRankInit).then(() => onTopRankUpdate(score));
  //   console.log(initAsync, '#initAsync');
  //   // this.props.onTopRankUpdate(this.props.score);
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevProps, '#componentDidUpdate#', prevState);
  // }
  // SetTopRank(fn) {
  //   return new Promise((resolve, reject) => {
  //     resolve(fn());
  //   });
  // }
}

GameOver.propTypes = {
  score: PropTypes.number.isRequired,
  gameOver: PropTypes.bool.isRequired,
};

GameOver.defaultProps = {
  score: 0,
  gameOver: false,
};

const mapStateToProps = state => {
  return {
    score: state.boardState.score,
    gameOver: state.boardState.gameOver,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTopRankUpdate: bindActionCreators(topRankActions.update, dispatch),
    onTopRankInit: bindActionCreators(topRankActions.init, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
