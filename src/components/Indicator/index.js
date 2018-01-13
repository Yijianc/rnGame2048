import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ActivityIndicator } from 'react-native';

const Indicator = ({animating, indicOptions, text}) => {
  return (
    <View>
      <ActivityIndicator
        animating={animating}
        hidesWhenStopped={!text && !animating}
        {...indicOptions}
      />
      {
        text ? <Text>{text}</Text> : null
      }
    </View>
  );
};

Indicator.propTypes = {
  animating: PropTypes.bool.isRequired,
  indicOptions: PropTypes.shape({
    size: PropTypes.string,
    style: PropTypes.object,
    color: PropTypes.string,
  }).isRequired,
  text: PropTypes.string,
};

Indicator.defaultProps = {
  animating: false,
  indicOptions: {
    size: 'small',
    style: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 8,
    },
    color: 'gray',
  },
};

export default Indicator;
