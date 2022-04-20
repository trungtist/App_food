import React, {Profiler} from 'react';
import {StyleSheet, Text, Image, View, ImageBackground} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
// import Home from './tabsMain';
import Search from '../screens/Search';
// import Like from '../screens/Like';
import Profile from '../screens/Profile';
// import FoodDetail from '../screens/FoodDetail';
import TabsMain from './tabsMain';
import Cart from '../screens/Cart';
import {images} from '../constants';

const Tab = createBottomTabNavigator();

export default function Tabs({route}) {
  const {email} = route.params;
  return (
    <Tab.Navigator
      style={{
        backgroundColor: '#ccc',
      }}
      screenOptions={({route}) => ({
        header:()=>null,
        tabBarIcon: ({focused}) => {
          if (route.name == 'TabHome') {
            return (
              <ImageBackground
                source={focused ? images.cloud1 : {}}
                resizeMode="repeat">
                <View
                  style={
                    focused
                      ? {
                          top: -20,
                          padding: 10,
                          borderRadius: 40,
                          borderBottomColor: 'yellow',
                          borderRightColor: 'yellow',
                          borderBottomWidth: 10,
                          borderRightWidth: 10,
                          shadowColor: 'yellow',
                          shadowOffset: {
                            width: 6,
                            height: 6,
                          },
                          shadowOpacity: 0.1,
                          shadowRadius: 16.0,
                          elevation: 24,
                        }
                      : {}
                  }>
                  <Image
                    source={require('../assets/images/icon_img/tabs_bottom/home.png')}
                    style={[
                      {
                        width: 35,
                        height: 35,
                      },
                    ]}
                    resizeMode="contain"
                  />
                </View>
              </ImageBackground>
            );
          } else if (route.name == 'Search') {
            return (
              <ImageBackground
                source={focused ? images.cloud1 : {}}
                resizeMode="repeat">
                <View
                  style={
                    focused
                      ? {
                          top: -20,
                          padding: 10,
                          borderRadius: 40,
                          borderBottomColor: 'yellow',
                          borderRightColor: 'yellow',
                          borderBottomWidth: 10,
                          borderRightWidth: 10,
                          shadowColor: 'yellow',
                          shadowOffset: {
                            width: 6,
                            height: 6,
                          },
                          shadowOpacity: 0.1,
                          shadowRadius: 16.0,
                          elevation: 24,
                        }
                      : {}
                  }>
                  <Image
                    source={require('../assets/images/icon_img/tabs_bottom/search.png')}
                    style={[
                      {
                        width: 35,
                        height: 35,
                      },
                    ]}
                    resizeMode="contain"
                  />
                </View>
              </ImageBackground>
            );
          } else if (route.name == 'Cart') {
            return (
              <ImageBackground
                source={focused ? images.cloud1 : {}}
                resizeMode="repeat">
                <View
                  style={
                    focused
                      ? {
                          top: -20,
                          padding: 10,
                          borderRadius: 40,
                          borderBottomColor: 'yellow',
                          borderRightColor: 'yellow',
                          borderBottomWidth: 10,
                          borderRightWidth: 10,
                          shadowColor: 'yellow',
                          shadowOffset: {
                            width: 6,
                            height: 6,
                          },
                          shadowOpacity: 0.1,
                          shadowRadius: 16.0,
                          elevation: 24,
                        }
                      : {}
                  }
                  >
                  <Image
                    source={require('../assets/images/icon_img/tabs_top/cart.png')}
                    style={[
                      {
                        width: 35,
                        height: 35,
                      },
                    ]}
                    resizeMode="contain"
                  />
                </View>
              </ImageBackground>
            );
          } else if (route.name == 'Profile') {
            return (
              <ImageBackground
                source={focused ? images.cloud1 : {}}
                resizeMode="repeat">
                <View
                  style={
                    focused
                      ? {
                          top: -20,
                          padding: 10,
                          borderRadius: 40,
                          borderBottomColor: 'yellow',
                          borderRightColor: 'yellow',
                          borderBottomWidth: 10,
                          borderRightWidth: 10,
                          shadowColor: 'yellow',
                          shadowOffset: {
                            width: 6,
                            height: 6,
                          },
                          shadowOpacity: 0.1,
                          shadowRadius: 16.0,
                          elevation: 24,
                        }
                      : {}
                  }>
                  <Image
                    source={require('../assets/images/icon_img/tabs_bottom/user.png')}
                    style={[
                      {
                        width: 35,
                        height: 35,
                      },
                    ]}
                    resizeMode="contain"
                  />
                </View>
              </ImageBackground>
            );
          }
        },
        tabBarActiveTintColor: '#d2691e',
        tabBarInactiveTintColor: 'rgba(0,0,0,0.3)',
        tabBarStyle: {
          height: 62,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          backgroundColor: '#2e8b57',
        },
        tabBarLabel: ()=>null,
        // tabBarLabelStyle: {
          // display: 'none',
        // },
        // tabBarOptions: {
        //   style: {
        //     backgroundColor: '#000',
        //   },
        // },
      })}>
      <Tab.Screen
        name="TabHome"
        component={TabsMain}
        initialParams={{email:email}}
      />
      <Tab.Screen
        name="Search"
        component={Search}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
      />
      <Tab.Screen
        name="Profile"
        initialParams={{email: email}}
        component={Profile}
      />
    </Tab.Navigator>
  );
}
