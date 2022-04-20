import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default function Header({
  titleHeader,
  imgLeft,
  imgRight,
  pressLeft,
  pressRight,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={pressLeft}>
        <Image
          source={imgLeft}
          style={{
            width: 40,
            height: 40,
          }}
        />
      </TouchableOpacity>

      <View
        style={{
          borderColor: 'rgba(0,0,0,0.1)',
          backgroundColor: '#f5f5f5',
          paddingHorizontal: 80,
          paddingVertical: 3,
          borderRadius: 12,
        }}>
        <Text
          style={{
            fontSize: 25,
            color: '#000',
            fontFamily: 'Wigglye',
          }}>
          {titleHeader}
        </Text>
      </View>

      <TouchableOpacity onPress={pressRight}>
        <Image
          source={imgRight}
          style={{
            width: 40,
            height: 40,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
