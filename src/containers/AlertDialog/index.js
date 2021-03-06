import React from 'react';
import PropTypes from 'prop-types';
import { Alert, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Button, Indicator } from '../../components';

import styles from './style';

import { smashCacheAction } from '../../actions';
import { clearData/*, getAllKeys*/ } from '../../utils/manageStorage';

const DELAY = 500;
const SMASH_CACHE = 'Smash Cache';
const ALERT_MSG = 'Are you sure you want to smash your cache to smithereens? All traces of your cache will be removed from the Earth.';

class AlertDialog extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      animating: false,
      text: ''
    };
  }
  render() {
    const {animating, text} = this.state;
    return (
      <View style={styles.dialogWrapper}>
        <Button
          styles={styles}
          btnText={SMASH_CACHE.toUpperCase()}
          onPress={() => this.onPressAlert()}
        />
        <Indicator
          animating={animating}
          text={text}
        />
      </View>
    );
  }
  onPressAlert = () => {
    Alert.alert(null, ALERT_MSG, [
      {
        text: 'Cancel',
        onPress: () => {}
      },
      {
        text: 'Smash it',
        onPress: () => this.onSmashConfirm()
      },
    ]);
  }
  onSmashConfirm = () => {
    this.setState({
      animating: true,
      text: 'Smashing...'
    }, () => this.onCacheSmash());
  }
  onCacheSmash = () => {
    clearData().then((response) => {
      console.log(response, '#clearData => #completed');
      this.onIndicChange();
      this.props.onStateReset();
    });
  }
  onIndicChange = () => {
    setTimeout(() => {
      this.setState({
        animating: false,
        text: 'Completed.'
      }, () => {
        setTimeout(() => this.setState({text: ''}), DELAY);
      });
      // getAllKeys().then((keys) => {
      //   console.log(keys, '#clearData => #completed => #getAllKeys');
      // });
    }, DELAY * 2);
  }
}

AlertDialog.propTypes = {
  onStateReset: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    onStateReset: bindActionCreators(smashCacheAction, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(AlertDialog);
