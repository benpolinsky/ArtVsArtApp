import React, {Component} from 'react';
import {Modal, View, Text, TouchableHighlight} from 'react-native';

export const InfoModal = (props) => {
  return (
    <Modal
      animationType={"slide"}
      transparent={false}
      visible={props.modalVisible}
      onRequestClose={() => {alert("Modal has been closed")}}
      >
      <View style={{marginTop: 22}}>
        <Text>Here's some ore information about this art.</Text>

        <TouchableHighlight onPress={() => {props.setModalVisible(false)}}>
          <Text>Hide Modal</Text>
        </TouchableHighlight>
      </View>
    </Modal>
  )
}
