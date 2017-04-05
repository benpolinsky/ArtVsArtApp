import React, {Component} from 'react';
import {View, Text, Image, Button, Modal, TouchableHighlight} from 'react-native';

import {InfoModal} from './infoModal'

export default class Art extends Component {
  
  state = {
    modalVisible: false
  }
  
  setModalVisible(visible){
    this.setState({modalVisible: visible});
  }
  
  render(){
    return (
      <View style={{marginBottom: 10}}>
        <Text>Category Goes Here</Text>
        <Image
          style={{width: '100%', height: 100}}
          source={{uri: 'https://placehold.it/500x500'}} />

        <Text>{this.props.art.title} by Art Creator</Text>

        <Button
          onPress={() => {
            this.setModalVisible(true); 
          }} 
          title="Info"
          accessibilityLabel="Find Out More About This Art!"
          />
          
        <Button
          onPress={() => alert(`You picked ${this.props.art.title} as the winner!`)} 
          title="Pick!"
          accessibilityLabel="Click to Pick the Winner!"
          />
          
        <InfoModal 
          modalVisible={this.state.modalVisible} 
          setModalVisible={(visibility) => this.setModalVisible(visibility) }
          />
      </View>
    )
  }
}

Art.propTypes = {
  art: React.PropTypes.object.isRequired
}