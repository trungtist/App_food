import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const TabUser = createMaterialTopTabNavigator();

export default function User() {
  return (
    <TabUser.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name == 'Login') {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/images/icon_img/tabs_top/login.png')}
                  style={{
                    width: 80,
                    height: 80,
                  }}
                  resizeMode="contain"
                />
              </View>
            );
          } else if (route.name == 'SignUp') {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/images/icon_img/tabs_top/signup.png')}
                  style={{
                    width: 80,
                    height: 80,
                  }}
                  resizeMode="contain"
                />
              </View>
            );
          }
        },
        tabBarShowLabel: false,
        tabBarPressColor: '#98fb98',
        tabBarItemStyle: {
          paddingBottom: 32,
          paddingTop: 18,
        },
        lazy: true,
      })}>
      <TabUser.Screen name="Login" component={Login} />
      <TabUser.Screen name="SignUp" component={SignUp} />
    </TabUser.Navigator>
  );
}

const styles = StyleSheet.create({});
