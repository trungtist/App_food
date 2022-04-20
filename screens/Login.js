import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import {ButtonReturn, CustomButton} from '../components';
import * as Animatable from 'react-native-animatable';
import api from '../apis/api';

export default function Login({navigation}) {
  const [dataUser, setDataUser] = useState({
    email: 'trung@gmail.com',
    password: 'people',
  });
  const [dataApi, setDataApi] = useState({});
  const emailChange = val => {
    setDataUser({
      ...dataUser,
      email: val,
    });
  };

  const passChange = val => {
    setDataUser({
      ...dataUser,
      password: val,
    });
  };

  const validate = text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      Alert.alert(
        //Header
        'Notification',
        //Body
        'Email is Not Correct!',
        [
          {
            text: 'Yes',
          },
        ],
        //Click out side of alert will be cancel
        {cancelable: true},
      );
      return false;
    }
    return true;
  };

  useEffect(() => {
    api.login(dataUser.email).then(data => {
      setDataApi(data.results[0].login);
    });
  }, [dataUser.email, dataUser.password]);

  const authenAccount = () => {
    if (validate(dataUser.email)) {
      if (dataApi.password == dataUser.password) {
        navigation.replace('Tabs',{
          email: dataUser.email,
        });
      } else {
        Alert.alert(
          //Header
          'Notification',
          //Body
          'Account is Not Correct!',
          [
            {
              text: 'Yes',
            },
          ],
          //Click out side of alert will be cancel
          {cancelable: true},
        );
      }
    }
  };
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
          duration={1800}>
          Welcome!
        </Animatable.Text>
      </View>

      <View style={styles.bottom}>
        {/* Form Account */}
        <Animatable.Image
          animation="tada"
          fadeDuration={2500}
          iterationCount="infinite"
          source={require('../assets/images/system/eat.png')}
          style={{
            width: 150,
            height: 150,
            position: 'absolute',
            top: -50,
            left: '60%',
          }}
        />
        <View style={styles.form}>
          <View>
            <Text style={styles.title}>Email</Text>
            <View style={[styles.action, {marginBottom: 30}]}>
              <Image
                source={require('../assets/images/icon_img/tabs_top/email.png')}
                style={styles.icon}
              />
              <TextInput
                style={styles.textInput}
                value={dataUser.email}
                onChangeText={val => emailChange(val)}
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
                value={dataUser.password}
                onChangeText={val => passChange(val)}
                style={styles.textInput}
                placeholder="Your Password"
                secureTextEntry={true}
              />
            </View>
          </View>
        </View>

        <CustomButton
          Press={authenAccount}
          buttonText="Login"
          buttonContainerStyle={{
            marginTop: 38,
            width: '50%',
            paddingVertical: 10,
            borderRadius: 20,
            alignSelf: 'center',
          }}
          colors={['#ffe4b5', '#778899']}
          iconBtn={require('../assets/images/icon_img/iconBtn/next1.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  top: {
    flex: 1,
    backgroundColor: '',
  },
  textTop: {
    fontFamily: 'Little Comet Bubling Demo Version',
    fontSize: 40,
    color: '#000',
    position: 'absolute',
    left: 20,
    top: '60%',
  },
  bottom: {
    flex: 4,
    backgroundColor: '#fffacd',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  form: {
    paddingHorizontal: 20,
    marginTop: '20%',
  },
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
    fontSize : 20
  },
});
