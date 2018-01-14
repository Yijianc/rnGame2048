import React from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, PanResponder } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Board } from '../../components';

import styles from './style';

import { matrixActions, swipeActions } from '../../actions';
import swipeDetect from '../../utils/swipeDetect';

const TILE_TIME_OUT = 50;

class GameBoard extends React.PureComponent {
  constructor(props) {
    super(props);

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {},
      onPanResponderMove: (evt, gestureState) => {},
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        swipeDetect({
          distX: gestureState.dx,
          distY: gestureState.dy
        }, this.detectDirection);
      },
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.board} {...this._panResponder.panHandlers}>
          <Board matrix={this.props.matrix} />
        </View>
      </View>
    );
  }
  componentDidMount() {
    StatusBar.setHidden(true);  // hide StatusBar
  }
  detectDirection = direction => {
    switch (direction) {
      case 'up':
        this.props.onSwipeUp();
        this.placeRandomTile();
        break;
      case 'down':
        this.props.onSwipeDown();
        this.placeRandomTile();
        break;
      case 'left':
        this.props.onSwipeLeft();
        this.placeRandomTile();
        break;
      case 'right':
        this.props.onSwipeRight();
        this.placeRandomTile();
        break;
      default:
        break;
    }
  }
  placeRandomTile() {
    setTimeout(() => this.props.onRandomTile(), TILE_TIME_OUT);
  }
}

GameBoard.propTypes = {
  matrix: PropTypes.arrayOf(PropTypes.array).isRequired,
  onRandomTile: PropTypes.func.isRequired,
  onSwipeUp: PropTypes.func.isRequired,
  onSwipeDown: PropTypes.func.isRequired,
  onSwipeLeft: PropTypes.func.isRequired,
  onSwipeRight: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    matrix: state.boardState.matrix,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRandomTile: bindActionCreators(matrixActions.placeRandomTile, dispatch),
    onSwipeUp: bindActionCreators(swipeActions.up, dispatch),
    onSwipeDown: bindActionCreators(swipeActions.down, dispatch),
    onSwipeLeft: bindActionCreators(swipeActions.left, dispatch),
    onSwipeRight: bindActionCreators(swipeActions.right, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
