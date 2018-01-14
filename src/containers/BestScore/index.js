import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Score } from '../../components';

import { bestScoreActions } from '../../actions';

class BestScore extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.bestScore !== this.props.bestScore;
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.score > this.props.bestScore) {
      this.props.onBestScoreUpdate(nextProps.score, this.props.bestScore);
    }
  }
  render() {
    return (
      <Score text={'BEST'} score={this.props.bestScore} />
    );
  }
}

BestScore.propTypes = {
  bestScore: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  onBestScoreUpdate: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    bestScore: state.bestScore,
    score: state.boardState.score,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onBestScoreUpdate: bindActionCreators(bestScoreActions.update, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BestScore);
