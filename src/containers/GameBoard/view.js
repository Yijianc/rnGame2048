import React from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, PanResponder } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as matrixActions from './actions';

import { Board } from '../../components';
import styles from './style';

import swipeDetect from '../../utils/swipeDetect';

class GameBoard extends React.PureComponent {
  constructor(props) {
    super(props);
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        console.log('# onPanResponderGrant');
      },
      onPanResponderMove: (evt, gestureState) => {
        console.log('# onPanResponderMove');
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        console.log('# onPanResponderRelease');

        swipeDetect({distX: gestureState.dx, distY: gestureState.dy}, this.detectDirection);
      },
    });
  }
  componentDidMount() {
    StatusBar.setHidden(true);  // hide StatusBar
    this.props.onInitMatrix();
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
    setTimeout(() => this.props.onRandomTile(), 100);
  }
  render() {
    return (
      <View style={styles.container} {...this._panResponder.panHandlers}>
        <Board matrix={this.props.matrix} />
      </View>
    );
  }
}

GameBoard.propTypes = {
  matrix: PropTypes.arrayOf(PropTypes.array).isRequired,
  // onInitMatrix: PropTypes.func.isRequired,
  // onResetMatrix: PropTypes.func.isRequired,
  onRandomTile: PropTypes.func.isRequired,
  onSwipeUp: PropTypes.func.isRequired,
  onSwipeDown: PropTypes.func.isRequired,
  onSwipeLeft: PropTypes.func.isRequired,
  onSwipeRight: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    matrix: state.matrix,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitMatrix: bindActionCreators(matrixActions.initMatrix, dispatch),
    onResetMatrix: bindActionCreators(matrixActions.resetMatrix, dispatch),
    onRandomTile: bindActionCreators(matrixActions.placeRandomTile, dispatch),
    onSwipeUp: bindActionCreators(matrixActions.swipeUp, dispatch),
    onSwipeDown: bindActionCreators(matrixActions.swipeDown, dispatch),
    onSwipeLeft: bindActionCreators(matrixActions.swipeLeft, dispatch),
    onSwipeRight: bindActionCreators(matrixActions.swipeRight, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
