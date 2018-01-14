import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Button from '../Button';

import styles from './style';

const KEEP_GOING = 'KEEP GOING';
const NEW_GAME   = 'NEW GAME';

const Menu = ({children, onModalClose, onMatrixReset, onGameRestart}) => {
  return (
    <View style={styles.btnWrapper}>
      <Button
        onPress={onModalClose}
        styles={styles}
        btnText={KEEP_GOING}
      />
      <Button
        onPress={() => {
          onGameRestart();
          onMatrixReset();
          onModalClose();
        }}
        styles={styles}
        btnText={NEW_GAME}
      />
      {children}
    </View>
  );
};

Menu.propTypes = {
  onModalClose: PropTypes.func.isRequired,
  onMatrixReset: PropTypes.func.isRequired,
  onGameRestart: PropTypes.func.isRequired,
};

Menu.defaultProps = {
  onModalClose: () => {},
  onMatrixReset: () => {},
  onGameRestart: () => {},
};

export default Menu;
