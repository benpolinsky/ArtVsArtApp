import React, {Component} from 'react';
import {View, Text, Image, Button} from 'react-native';

export default class Art extends Component {
  render(){
    return (
      <View style={{marginBottom: 10}}>
        <Text>Category Goes Here</Text>
        <Image
          style={{width: '100%', height: 100}}
          source={{uri: 'https://placehold.it/500x500'}} />
        <Text>{this.props.art.title} by Art Creator</Text>
        <Button
          onPress={() => alert('Info about me!')} 
          title="Info"
          accessibilityLabel="Find Out More About This Art!"
          />
          
        <Button
          onPress={() => alert(`You picked ${this.props.art.title} as the winner!`)} 
          title="Pick!"
          accessibilityLabel="Click to Pick the Winner!"
          />
      </View>
    )
  }
}

Art.propTypes = {
  art: React.PropTypes.object.isRequired
}