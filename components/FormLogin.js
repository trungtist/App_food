import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import * as Animatable from 'react-native-animatable';

const FormLogin = ({formStyle}) => {
  return (
    <View style={formStyle}>
      <Text style={styles.title}>Email</Text>
      <View style={[styles.action, {marginBottom: 30}]}>
        <Image
          source={require('../assets/images/icon_img/tabs_top/email.png')}
          style={styles.icon}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Email"
          autoCapitalize="none"
        />
      </View>

      <Text style={styles.title}>Password</Text>
      <View style={styles.action}>
        <Image
          source={require('../assets/images/icon_img/tabs_top/password.png')}
          style={styles.icon}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Password"
          secureTextEntry={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontFamily: 'Little Comet Bubling Demo Version',
    color: '#000',
  },
  action: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: '#000',
    width: '80%',
  },
});

export default FormLogin;
