import React, {useState, useEffect} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Header, CustomButton} from '../components';
import api from '../apis/api';
import RenderHtml from 'react-native-render-html';
import * as Animatable from 'react-native-animatable';

export default function FoodDetail({route, navigation: {goBack}, navigation}) {
  const {data} = route.params;
  const {width} = useWindowDimensions();
  const [infoPro, setInfoPro] = useState({});

  const source = {
    html: `<div style="font-size:16px"> ` + data.content + `</div>`,
  };

  const [quantity, setQuantity] = useState(1);
  const plusQuantity = () => {
    if (quantity < 100) {
      setQuantity(quantity + 1);
    }
  };

  const minusQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  //Header
  const RenderHeader = () => {
    return (
      <View style={{paddingHorizontal: 20, marginBottom: '30%'}}>
        <Header
          pressLeft={() => goBack()}
          imgLeft={require('../assets/images/icon_img/tabs_top/back2.png')}
          titleHeader="Food Details"
          pressRight={() => navigation.navigate('Rate',{
            data: data,
          })}
          imgRight={require('../assets/images/icon_img/tabs_bottom/heart.png')}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 30,
            marginBottom: 10,
          }}>
          <Animatable.Text
            animation="fadeInRight"
            duration={1800}>
            <Text style={styles.Heading}>{data.name}</Text>
          </Animatable.Text>
        </View>
        <RenderHtml contentWidth={width} source={source}></RenderHtml>
      </View>
    );
  };

  //Content
  const RenderFooter = () => {
    return (
      <View style={[styles.footer, {position: 'relative'}]}>
        <View
          style={{
            position: 'absolute',
            bottom: '75%',
            left: 0,
            right: 0,
            alignItems: 'center',
            borderRadius: 50,
          }}>
          <Image
            style={{
              width: 250,
              height: 180,
              borderRadius: 20,
            }}
            source={{uri: data.image}}
            resizeMode="contain"
          />
        </View>

        <View
          style={{
            marginTop: '25%',
          }}>
          <Animatable.Text
            animation="fadeInRight"
            duration={1800}>
            <Text style={styles.Heading}>Delicious Foods</Text>
          </Animatable.Text>
          <Text style={[styles.info, {fontSize: 20, marginBottom: 18}]}>
            Delivery Time 40 min
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={plusQuantity} style={styles.add_minus}>
              <FontAwesome5 name="plus" size={20} color="#fff" />
            </TouchableOpacity>

            <Text style={[styles.info, {paddingHorizontal: 10, fontSize: 20}]}>
              {quantity}
            </Text>

            <TouchableOpacity onPress={minusQuantity} style={styles.add_minus}>
              <FontAwesome5 name="minus" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginVertical: 25,
          }}>
          <CustomButton
            Press={() => navigation.navigate('Rate',{
              data: data,
            })}
            buttonContainerStyle={{
              paddingVertical: 10,
              paddingHorizontal: 10,
              borderRadius: 20,
              alignSelf: 'center',
            }}
            colors={['#ffe4b5', '#778899']}
            iconBtn={require('../assets/images/icon_img/iconBtn/rate.png')}
          />
          <CustomButton
            Press={() => navigation.navigate('Cart')}
            buttonText="Add To Cart"
            buttonContainerStyle={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 20,
              alignSelf: 'center',
            }}
            colors={['#ffe4b5', '#778899']}
            iconBtn={require('../assets/images/icon_img/iconBtn/addcart.png')}
          />
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 20,
              alignSelf: 'center',
              backgroundColor: 'rgba(0,0,0,0.9)',
            }}>
            <Text style={[styles.info, {color: '#fff'}]}>$55.00</Text>
          </View>
        </View>
      </View>
    );
  };

  //----------------------------Main----------------------------//
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          paddingTop: 10,
          backgroundColor: '#f4a460',
          flex: 1,
        }}>
        <RenderHeader />
        <RenderFooter />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Heading: {
    fontFamily: 'Little Comet Bubling Demo Version',
    fontSize: 26,
    color: '#000',
    letterSpacing: 1,
    marginRight: 8,
  },
  info: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    marginBottom: 5,
    color: 'rgba(0,0,0,0.7)',
    lineHeight: 30,
  },
  footer: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 20,
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
  },
  add_minus: {
    backgroundColor: '#f4a460',
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginHorizontal: 8,
  },
});
