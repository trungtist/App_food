import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, ScrollView} from 'react-native';
import {FormSignup} from '../components';
import * as Animatable from 'react-native-animatable';

import {CustomButton, ButtonReturn} from '../components';

export default function SignUp({navigation}) {
  //----------------------------Main----------------------------//
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        {/* Button Return */}
        <ButtonReturn
          returnStyle={{
            position: 'absolute',
            top: 20,
            left: 20,
          }}
          Press={() => navigation.replace('Onboarding')}
        />
        <Animatable.Text
          style={styles.textTop}
          animation="fadeInRight"
          duration={1500}>
          Create a Account!
        </Animatable.Text>
      </View>

      <View style={styles.bottom}>
        {/* Form Account */}
        <Image
          // animation="tada"
          // fadeDuration={2500}
          // iterationCount='infinite'
          source={require('../assets/images/system/chicken.png')}
          style={{
            width: 150,
            height: 150,
            position: 'absolute',
            bottom: 60,
            left: '60%',
          }}
          blurRadius={4}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.form}>
            <FormSignup
              formStyle={{
                marginTop: 0,
              }}
            />
          </View>
          <CustomButton
            Press={() => navigation.navigate('Login')}
            buttonText="Create Account"
            buttonContainerStyle={{
              marginVertical: 30,
              marginLeft: 30,
              width: '60%',
              paddingVertical: 12,
              borderRadius: 20,
              alignSelf: 'flex-start',
            }}
            colors={['#4682b4', '#f5fffa']}
            iconBtn={require('../assets/images/icon_img/iconBtn/left.png')}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imgContainer: {
    flex: 1,
  },
  top: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bottom: {
    flex: 5,
    backgroundColor: '#87ceeb',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  textTop: {
    fontFamily: 'Little Comet Bubling Demo Version',
    fontSize: 40,
    color: '#000',
    position: 'absolute',
    left: 20,
    top: '60%',
  },
  form: {
    paddingHorizontal: 20,
    marginTop: '5%',
  },
});
