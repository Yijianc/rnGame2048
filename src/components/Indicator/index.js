import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ActivityIndicator } from 'react-native';

const Indicator = ({}) => {
  return (
    <View style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: 100,
      width: 100,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#eee'
    }}>
      <ActivityIndicator
        animating={true}
        style={{alignItems: 'center', justifyContent: 'center', padding: 8}}
        size="small"
      />
      <Text>Smashing...</Text>
    </View>
  );
};

Indicator.propTypes = {
  // onPress: PropTypes.func.isRequired,
  // styles: PropTypes.object.isRequired,
  // btnText: PropTypes.string.isRequired
};

Indicator.defaultProps = {
  // onPress: () => {},
  // styles: {},
  // btnText: ''
};

export default Indicator;
