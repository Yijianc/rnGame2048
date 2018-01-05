import React from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as menuActions from './actions';
import { actions as matrixActions } from '../GameBoard';

import { Button } from '../../components';
import styles from './style';

const MenuModal = ({modalVisible, onModalClose, onMatrixReset}) => {
  return (
    <Modal
      animationType={"slide"}
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => console.log('######')}>
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>Menu</Text>
        </View>
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
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    modalVisible: state.modalVisible,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onModalClose: bindActionCreators(menuActions.closeModal, dispatch),
    onMatrixReset: bindActionCreators(matrixActions.resetMatrix, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuModal);
