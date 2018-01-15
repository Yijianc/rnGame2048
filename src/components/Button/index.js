import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

const Button = ({onPress, styles, btnText}) => {
  return (
    <TouchableOpacity style={styles.btnWrapper || null} onPress={() => onPress()}>
      <View style={styles.controller || {}}>
        <Text style={styles.text || {}}>{btnText}</Text>
      </View>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired,
  btnText: PropTypes.string.isRequired
};

Button.defaultProps = {
  onPress: () => {},
  styles: {},
  btnText: ''
};

export default Button;
