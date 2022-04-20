import React from 'react';
import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

import {CustomButton} from '../components';

export default function Onboarding({navigation}) {
  const RenderText = ({title, font}) => {
    return (
      <Animatable.Text animation="fadeInRight" duration={1500} style={font}>
        {title}
      </Animatable.Text>
    );
  };

  const renderHeader = () => {
    return (
      <Animatable.View
        animation="slideInDown"
        duration={1800}
        style={styles.headerContainer}>
        <ImageBackground
          resizeMode="cover"
          style={styles.headerImg}
          source={require('../assets/images/system/login-background.png')}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={['transparent', 'black']}
            style={{
              height: 200,
              justifyContent: 'flex-end',
              paddingHorizontal: 20,
            }}>
            <RenderText
              font={{
                width: '80%',
                color: '#fff',
                lineHeight: 45,
                fontSize: 40,
                fontFamily: 'Roboto-Bold',
              }}
              title="Đặt món ngon thật đơn giản"
            />
          </LinearGradient>
        </ImageBackground>
      </Animatable.View>
    );
  };

  const renderDetail = () => {
    return (
      <View style={styles.detailContainer}>
        {/* Description */}
        <RenderText
          font={{
            marginTop: 10,
            width: '70%',
            color: 'gray',
            fontSize: 20,
            fontFamily: 'Roboto-Medium',
          }}
          title="Đơn giản nhanh gọn và tiện lợi Khám phá các món ăn tại My App Food ngay!"
        />

        {/* Button */}
        <View style={styles.detailButton}>
          {/* Login */}
          <CustomButton
            iconStyle={{
              width: 30,
              height: 30,
            }}
            Press={() => navigation.replace('User')}
            buttonText="Get Started"
            buttonContainerStyle={{
              paddingVertical: 18,
              borderRadius: 20,
            }}
            colors={['#3AC978', '#31E0A2']}
            iconBtn={require('../assets/images/icon_img/iconBtn/next1.png')}
          />
        </View>
      </View>
    );
  };

  //----------------------------Main----------------------------//
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {/* Header */}
      {renderHeader()}
      {/* Details */}
      {renderDetail()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  headerContainer: {
    height: '65%',
  },
  headerImg: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  detailContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  detailButton: {
    flex: 1,
    justifyContent: 'center',
  },
});
