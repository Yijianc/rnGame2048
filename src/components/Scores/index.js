import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Scores = ({score, bestScore}) => {
  return (
    <View style={styles.index}>
      <View style={styles.board}>
        <Text style={styles.score}>得分</Text>
        <Text style={styles.text}>{score}</Text>
      </View>
      <View style={styles.board}>
        <Text style={styles.best}>最佳</Text>
        <Text style={styles.text}>{bestScore}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  index: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    flexDirection: 'row',
  },
  board: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:
    transform: [{ skewX: '20deg' }],
  },
  score: {
    // background: 'transparent',
  },
  text: {
    // color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  best: {},
});

Scores.propTypes = {
  score: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired
};

export default Scores;

// .index {
//   color: $gray;
//   display: flex;
//   font-size: 0.75rem;
//   // font-weight: 400;
//   justify-content: center;
//
//   .score {
//     background: transparent;
//     border-radius: 0;
//     border-width: 0;
//     font-weight: 400;
//     margin: 0;
//     padding: 1vw 2vw;
//     position: relative;
//     z-index: 0;
//
//     &::before {
//       // background: #fafafa;
//       background: rgba(29, 137, 255, 0.9);
//       content: '';
//       height: 100%;
//       left: 0;
//       position: absolute;
//       top: 0;
//       transform: skewX(20deg);
//       width: 100%;
//       z-index: -1;
//     }
//
//     &::after {
//       background: rgba(250, 250, 250, 0.3);
//       content: '';
//       height: 100%;
//       left: 0;
//       opacity: 0;
//       position: absolute;
//       top: 0;
//       transform: skewX(20deg);
//       width: 0;
//       z-index: -1;
//     }
//   }
//
//   .text {
//     color: $white;
//     display: block;
//     font-size: 1.25rem;
//     font-style: normal;
//     font-weight: 500;
//     margin-bottom: -0.3vw;
//     padding-top: 0.35vw;
//   }
//
//   .best {
//     margin-left: 1vw;
//   }
//
//   @media all and (max-width: $break-point) {
//     .score {
//       height: 11vw;
//       padding: 3vw 0 2vw;
//       width: 20vw;
//     }
//
//     .text {
//       padding-top: 1.35vw;
//     }
//
//     .best {
//       margin-left: 2vw;
//     }
//   }
// }
