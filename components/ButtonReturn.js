import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';

const ButtonReturn = ({iconstyle, returnStyle, Press}) => {
  return (
    <TouchableOpacity onPress={Press} style={returnStyle}>
      <Animatable.Image
        animation="bounceIn"
        iterationCount="infinite"
        duration={1500}
        source={require('../assets/images/icon_img/tabs_top/back.png')}
        style={{
          width: 25,
          height: 25,
        }}
      />
    </TouchableOpacity>
  );
};

export default ButtonReturn;
