import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Onboarding from './screens/Onboarding';
import User from './navigation/user';
import Tabs from './navigation/tabs';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoute="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          initialParams={{email:''}}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
