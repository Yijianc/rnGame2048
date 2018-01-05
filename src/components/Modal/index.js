import React from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

const ModalHelper = (props) => {
  const {
    children = null,
    animationType = 'slide',
    visible = false,
    onRequestClose
  } = props || {};
  return (
    <Modal
      animationType={"slide"}
      transparent={false}
      visible={visible}
      onRequestClose={() => onRequestClose()}>
      {children}
    </Modal>
  );
};

export default ModalHelper;
