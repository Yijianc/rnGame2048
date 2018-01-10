import React from 'react';
import PropTypes from 'prop-types';
import { Modal, View, Text } from 'react-native';

import Button from '../Button';

import styles from './style';

const ModalHelper = ({children, header, animationType, visible, onRequestClose, onModalClose}) => {
  return (
    <Modal
      animationType={animationType}
      transparent={false}
      visible={visible}
      onRequestClose={() => onRequestClose()}>
      <View style={styles.container}>
        <View style={styles.nav}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{header}</Text>
          </View>
          <Button
            onPress={() => onModalClose()}
            styles={styles}
            btnText={"X"}
          />
        </View>
        {children}
      </View>
    </Modal>
  );
};

ModalHelper.propTypes = {
  header: PropTypes.string,
  animationType: PropTypes.string,
  visible: PropTypes.bool,
  onRequestClose: PropTypes.func,
  onModalClose: PropTypes.func,
};

ModalHelper.defaultProps = {
  children: null,
  header: '',
  animationType: 'fade',
  visible: false,
  onRequestClose: () => {},
  onModalClose: () => {},
};

export default ModalHelper;
