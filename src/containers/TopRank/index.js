import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Rank } from '../../components';

import { topRankActions } from '../../actions';
// class TopRank extends React.Component {
//   shouldComponentUpdate(nextProps, nextState) {
//     return nextProps.gameOver;
//   }
//   componentWillReceiveProps(nextProps) {
//     console.log(this.props, '#componentWillReceiveProps', nextProps);
//     if (nextProps.gameOver) {
//       this.props.onTopRankUpdate(nextProps.score);
//     }
//   }
//   render() {
//     console.log('#render');
//     return (
//       <Rank list={this.props.topRank} />
//     );
//   }
//   componentDidMount() {
//     console.log('#componentDidMount');
//     this.props.onTopRankInit();
//   }
// }

const TopRank = ({topRank}) => {
  console.log(topRank, '#TopRank');
  return (
    <Rank list={topRank} />
  );
};

TopRank.propTypes = {
  topRank: PropTypes.array.isRequired,
  // score: PropTypes.number.isRequired,
  // gameOver: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    topRank: state.topRank,
    // score: state.boardState.score,
    // gameOver: state.boardState.gameOver,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onTopRankUpdate: bindActionCreators(topRankActions.updateTopRank, dispatch),
//     onTopRankInit: bindActionCreators(topRankActions.initTopRank, dispatch),
//   };
// };

export default connect(mapStateToProps)(TopRank);
// export default connect(mapStateToProps, mapDispatchToProps)(TopRank);
