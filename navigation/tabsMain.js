import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import FoodDetail from '../screens/FoodDetail';
import Cart from '../screens/Cart';
import Like from '../screens/Like';

const Stack = createNativeStackNavigator();

export default function tabsMain({route}) {
  const {email} = route.params;
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        initialParams={{email:email}}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FoodDetail"
        component={FoodDetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Rate"
        component={Like}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
