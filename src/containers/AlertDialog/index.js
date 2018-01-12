import React from 'react';
import PropTypes from 'prop-types';
import { Alert, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Button, Indicator } from '../../components';

import styles from './style';

import { clearData, getAllKeys } from '../../utils/manageStorage';
import { bestScoreActions } from '../../actions';

const SMASH_CACHE = 'Smash Cache';
const ALERT_MSG = 'Are you sure you want to smash your cache to smithereens? All traces of your cache will be removed from the Earth.';

const AlertDialog = ({}) => {
  return (
    <View>
      <Button
        onPress={() => Alert.alert(
          null,
          ALERT_MSG,
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed!')
            },
            {
              text: 'Smash it',
              onPress: () => {
                getAllKeys();
                clearData();
              }
            },
          ]
        )}
        styles={styles}
        btnText={SMASH_CACHE.toUpperCase()}
      />
      <Indicator />
    </View>
  );
};

AlertDialog.propTypes = {
  // bestScore: PropTypes.number.isRequired,
  // score: PropTypes.number.isRequired,
  // onBestScoreUpdate: PropTypes.func.isRequired,
  // onBestScoreFetch: PropTypes.func.isRequired,
};

// const mapStateToProps = state => {
//   return {
//     bestScore: state.bestScore,
//     score: state.boardState.score,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onBestScoreUpdate: bindActionCreators(bestScoreActions.update, dispatch),
//     onBestScoreFetch: bindActionCreators(bestScoreActions.fetch, dispatch),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(AlertDialog);
export default AlertDialog;
