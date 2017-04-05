import React, {Component} from 'react';
import {Text, View} from 'react-native';

import Art from '../art/art.js';

export default class Competition extends Component {
  render(){
    return (
      <View>
        <Text>Hi I am a competition</Text>
        <Art art={{title: "Michaelangelo's David"}}/>
        <Art art={{title: "Seinfeld Season 3"}}/>
      </View>
    )
  }
  
}