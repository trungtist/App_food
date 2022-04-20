import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Header from '../components/Header';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {CustomButton} from '../components';

export default function Cart({route, navigation: {goBack}, navigation}) {
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

  //Quantity
  const Quantity = () => {
    const HandleRemove = () => {
      setQuantity(1);
      // Alert.alert(
      //   //Header
      //   'Confirm',
      //   //Body
      //   'Do you want to remove?',
      //   [
      //     {
      //       text: 'Yes',
      //       onPress: () => navigation.replace('Home'),
      //     },
      //     {
      //       text: 'No',
      //       style: 'cancel',
      //     },
      //   ],
      //   //Click out side of alert will be cancel
      //   {cancelable: true},
      // );
    };

    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          right: 0,
          marginTop: 10,
          bottom: 0,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            right: 0,
            left: 17,
            bottom: 0,
            marginBottom: 20,
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

        <TouchableOpacity
          onPress={HandleRemove}
          style={{
            // backgroundColor: 'rgba(255,255,255,0.8)',
            backgroundColor: 'red',
            padding: 5,
            borderRadius: 8,
          }}>
          <Image
            source={require('../assets/images/icon_img/iconBtn/remove.png')}
            style={{
              width: 25,
              height: 25,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    );
  };

  //Header
  const RenderHeader = () => {
    return (
      <View>
        <Header
          pressLeft={() => goBack()}
          imgLeft={require('../assets/images/icon_img/tabs_top/back2.png')}
          titleHeader="Orders Detail"
          imgRight={require('../assets/images/icon_img/tabs_top/more.png')}
        />
      </View>
    );
  };

  //Heading
  const Heading = ({title}) => {
    return (
      <View
        style={{
          marginVertical: 15,
        }}>
        <Text
          style={{
            fontFamily: 'Little Comet Bubling Demo Version',
            fontSize: 24,
            color: '#000',
          }}>
          {title}
        </Text>
      </View>
    );
  };

  //ContentMyCart
  const ContentMyCart = ({imgLeft, title, subTitle, styleImg, styleInfor}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {/* Img */}
        <View
          style={{
            backgroundColor: 'rgba(255,255,255,0.6)',
            padding: 10,
            borderRadius: 30,
          }}>
          <Image source={imgLeft} style={styleImg} resizeMode="contain" />
        </View>

        {/* Info */}
        <View style={styleInfor}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
    );
  };

  //ContentLocation_Payment
  const ContentLocation_Payment = ({
    imgLeft,
    title,
    subTitle,
    styleImg,
    styleInfor,
  }) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {/* Icon */}
        <View
          style={{
            backgroundColor: 'rgba(255,255,255,0.6)',
            padding: 10,
            borderRadius: 30,
          }}>
          <Image source={imgLeft} style={styleImg} resizeMode="contain" />
        </View>

        {/* Info */}
        <View style={styleInfor}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>

        {/* Next */}
        <Image
          source={require('../assets/images/icon_img/iconBtn/next1.png')}
          style={{
            width: 25,
            height: 25,
            alignSelf: 'center',
          }}
        />
      </TouchableOpacity>
    );
  };

  //ContentInfo
  const ContentInfo = ({subTitle, subPrice}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={[styles.subTitle, {marginVertical: 5}]}>{subTitle}</Text>
        <Text style={styles.subTitle}>${subPrice}</Text>
      </View>
    );
  };

  //My Cart
  const RenderMyCart = () => {
    return (
      <View>
        <Heading title="My Cart" />
        <ContentMyCart
          imgLeft={require('../assets/images/system/detail1.png')}
          styleImg={{
            width: 150,
            height: 150,
          }}
          title="Burgers Story"
          subTitle="$55.000"
          styleInfor={{
            marginLeft: '10%',
          }}
        />
        <Quantity />
      </View>
    );
  };

  //Delivery Location
  const RenderLocation = () => {
    return (
      <View>
        <Heading title="Delivery Location" />
        <ContentLocation_Payment
          imgLeft={require('../assets/images/icon_img/iconBtn/location.png')}
          styleImg={{
            width: 30,
            height: 30,
          }}
          title="Tân Triều, Hà Nội"
          subTitle="Số 18"
          styleInfor={{
            marginLeft: '10%',
          }}
        />
      </View>
    );
  };

  //Payment
  const RenderPayment = () => {
    return (
      <View>
        <Heading title="Payment Method" />
        <ContentLocation_Payment
          imgLeft={require('../assets/images/icon_img/iconBtn/visa.png')}
          styleImg={{
            width: 40,
            height: 40,
          }}
          title="Visa Classic"
          subTitle="****-0921"
          styleInfor={{
            marginLeft: '10%',
          }}
        />
      </View>
    );
  };

  //Order Infor
  const RenderInfor = () => {
    return (
      <View>
        <Heading title="Order Info" />
        <ContentInfo subTitle="Subtotal" subPrice="55.00" />
        <ContentInfo subTitle="Shipping Cost" subPrice="10.00" />
        <ContentInfo subTitle="Total" subPrice="65.00" />
      </View>
    );
  };

  //Checkout
  const HandleCheckout = () => {
    Alert.alert(
      //Header
      'Confirm',
      //Body
      'Do you want to checkout?',
      [
        {
          text: 'Yes',
          onPress: () => navigation.replace('Home'),
        },
        {
          text: 'No',
          style: 'cancel',
        },
      ],
      //Click out side of alert will be cancel
      {cancelable: true},
    );
  };

  //----------------------------Main----------------------------//
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Animatable.View
        style={styles.container}
        animation="fadeInUpBig"
        duration={1800}>
        <LinearGradient
          colors={['#f0ffff', '#e8e8e8']}
          style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
          start={{
            x: 0,
            y: 1,
          }}
          end={{x: 0, y: 0}}>
          <RenderHeader />
          <View>
            <RenderMyCart />

            <RenderLocation />

            <RenderPayment />

            <RenderInfor />

            <CustomButton
              Press={HandleCheckout}
              buttonText="Checkout"
              colors={['#fff', '#4682b4']}
              buttonContainerStyle={{
                marginTop: 25,
                marginBottom: 20,
                width: '100%',
                paddingVertical: 12,
                borderRadius: 20,
                textAlign: 'center',
              }}
              iconBtn={require('../assets/images/icon_img/iconBtn/checkout.png')}
            />
          </View>
          {/* <View style={{
              top:0,
              bottom:0,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Text style={styles.info}>No Food!</Text>
            </View> */}
        </LinearGradient>
      </Animatable.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 22,
    marginBottom: 10,
    color: '#000',
  },
  subTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
  },
  footer: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 20,
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
  },
  add_minus: {
    backgroundColor: '#4682b4',
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginHorizontal: 8,
  },
  info: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    marginBottom: 5,
    color: 'rgba(0,0,0,0.7)',
    lineHeight: 30,
  },
});
