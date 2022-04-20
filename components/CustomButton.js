import React from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';

const CustomButton = ({
  buttonText,
  buttonContainerStyle,
  colors,
  Press,
  iconBtn,
}) => {
  if (colors.length > 0) {
    return (
      <TouchableOpacity onPress={Press}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={colors}
          style={{...buttonContainerStyle}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 25,
                lineHeight: 30,
                letterSpacing: 1,
                fontFamily: 'Wigglye',
                color: '#000',
                marginRight: 10,
              }}>
              {buttonText}
            </Text>
            <Image
              style={{
                width: 25,
                height: 25,
              }}
              source={iconBtn}
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={Press} style={buttonContainerStyle}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            letterSpacing: 1,
            fontFamily: 'Roboto-Bold',
            color: '#fff',
          }}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    );
  }
};

export default CustomButton;
