import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Score } from '../../components';

import { bestScoreActions } from '../../actions';

class BestScore extends React.Component {
  shouldComponentUpdate(nextProps) {
    // return nextProps.bestScore !== this.props.bestScore && nextProps.score <= this.props.bestScore;
    return nextProps.bestScore !== this.props.bestScore;
    // return nextProps.score > this.props.bestScore;
  }
  componentWillReceiveProps(nextProps) {
    // const {score, bestScore} = nextProps;
    // if (score > bestScore) {
    //   this.props.onBestScoreUpdate(score, bestScore);
    // }
    // if (nextProps.score > this.props.bestScore) {
    //   this.props.onBestScoreUpdate(nextProps.score, this.props.bestScore);
    // }
    console.log(JSON.stringify(nextProps), '<= #nextProps #this.props =>', JSON.stringify(this.props));
    if (nextProps.score > this.props.bestScore) {
      this.props.onBestScoreUpdate(nextProps.score, this.props.bestScore);
    }
  }
  render() {
    console.log('<= #BestScore #render =>');
    return (
      <Score text={'BEST'} score={this.props.bestScore} />
    );
  }
  // componentDidMount() {
  //   this.props.onBestScoreFetch();
  // }
}

BestScore.propTypes = {
  bestScore: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  onBestScoreUpdate: PropTypes.func.isRequired,
  // onBestScoreFetch: PropTypes.func.isRequired,
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
    // onBestScoreFetch: bindActionCreators(bestScoreActions.fetch, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BestScore);
