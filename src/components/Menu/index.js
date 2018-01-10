import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Button from '../Button';

import styles from './style';

const Menu = ({onModalClose, onMatrixReset}) => {
  return (
    <View style={styles.btnWrapper}>
      <Button
        onPress={onModalClose}
        styles={styles}
        btnText={"KEEP GOING"}
      />
      <Button
        onPress={() => {
          onMatrixReset();
          onModalClose();
        }}
        styles={styles}
        btnText={"NEW GAME"}
      />
    </View>
  );
};

Menu.propTypes = {
  onModalClose: PropTypes.func.isRequired,
  onMatrixReset: PropTypes.func.isRequired,
};

Menu.defaultProps = {
  onModalClose: () => {},
  onMatrixReset: () => {},
};

export default Menu;
