import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { bestScoreActions } from '../../actions';

import { Score } from '../../components';

class BestScore extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.bestScore !== nextProps.bestScore;
  }
  componentWillReceiveProps(nextProps) {
    this.props.onBestScoreUpdate(nextProps.score, this.props.bestScore);
  }
  render() {
    return (
      <Score text={'BEST'} score={this.props.bestScore} />
    );
  }
  componentDidMount() {
    this.props.onBestScoreFetch();
  }
}

BestScore.propTypes = {
  bestScore: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  onBestScoreUpdate: PropTypes.func.isRequired,
  onBestScoreFetch: PropTypes.func.isRequired,
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
    onBestScoreFetch: bindActionCreators(bestScoreActions.fetch, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BestScore);
