import React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
  Modal,
  TextInput,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Header from '../components/Header';
import {CustomButton} from '../components';
import api from '../apis/api';

export default function Profile({route,navigation: {goBack}, navigation}) {
  const {email} = route.params;
  const [dataApi, setDataApi] = useState(null);
  //Heading
  useEffect(() => {
    api.login(email).then(data => {
      setDataApi(data.results[0]);
    });
  }, []);

  const Heading = ({title}) => {
    return (
      <View
        style={{
          marginVertical: 15,
        }}>
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 16,
          }}>
          {title}
        </Text>
      </View>
    );
  };

  //Header
  const RenderHeader = () => {
    return (
      <Header
        pressLeft={() => goBack()}
        imgLeft={require('../assets/images/icon_img/tabs_top/back2.png')}
        titleHeader="My Profile"
        imgRight={require('../assets/images/icon_img/tabs_top/more.png')}
      />
    );
  };

  //Render Info + Edit
  const RenderInfo = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
      <View style={styles.info}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View
            style={[styles.centeredView, {backgroundColor: 'rgba(0,0,0,0.7)'}]}>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
              <View style={styles.modalView}>
                {/* Close Btn */}
                <TouchableOpacity
                  style={{right: 10, top: 10, position: 'absolute'}}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <FontAwesome5 name="times-circle" size={30} color="red" />
                </TouchableOpacity>
                <Text
                  style={[styles.rightTitle, {marginTop: 20, fontSize: 40}]}>
                  Edit Profile
                </Text>
                {/* Form */}
                <View
                  style={{
                    marginTop: '5%',
                  }}>
                  <Text style={styles.title}>Name</Text>
                  <View style={[styles.action, {marginBottom: 20}]}>
                    <Image
                      source={require('../assets/images/icon_img/tabs_top/boy.png')}
                      style={styles.icon}
                    />
                    <TextInput
                      style={styles.textInput}
                      placeholder="Your Name"
                      autoCapitalize="none"
                    />
                  </View>

                  <Text style={styles.title}>Phone Number</Text>
                  <View style={[styles.action, {marginBottom: 20}]}>
                    <Image
                      source={require('../assets/images/icon_img/tabs_top/phone.png')}
                      style={styles.icon}
                    />
                    <TextInput
                      style={styles.textInput}
                      placeholder="Your Phone Number"
                      autoCapitalize="none"
                    />
                  </View>

                  <Text style={styles.title}>Email</Text>
                  <View style={[styles.action, {marginBottom: 20}]}>
                    <Image
                      source={require('../assets/images/icon_img/tabs_top/email.png')}
                      style={styles.icon}
                    />
                    <TextInput
                    value={email}
                      style={styles.textInput}
                      placeholder="Your Email"
                      autoCapitalize="none"
                    />
                  </View>

                  <Text style={styles.title}>Password</Text>
                  <View style={[styles.action, {marginBottom: 20}]}>
                    <Image
                      source={require('../assets/images/icon_img/tabs_top/password.png')}
                      style={styles.icon}
                    />
                    <TextInput
                      style={styles.textInput}
                      placeholder="Your Password"
                      secureTextEntry={true}
                    />
                  </View>

                  <Text style={styles.title}>Confirm Password</Text>
                  <View style={styles.action}>
                    <Image
                      source={require('../assets/images/icon_img/tabs_top/passwords.png')}
                      style={styles.icon}
                    />
                    <TextInput
                      style={styles.textInput}
                      placeholder="Confirm Password"
                      secureTextEntry={true}
                    />
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: '#000',
                    padding: 10,
                    borderRadius: 50,
                    backgroundColor: 'rgba(0,0,0,0.05)',
                    marginVertical: 20,
                  }}>
                  <Animatable.Text
                    animation="fadeInRight"
                    duration={1800}>
                    <Text style={styles.title}>Save</Text>
                  </Animatable.Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </Modal>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.05)',
            padding: 20,
            borderRadius: 50,
            backgroundColor: 'rgba(0,0,0,0.05)',
            marginRight: 20,
          }}>
          <Animatable.Image
            animation="rubberBand"
            duration={1900}
            source={ dataApi!=null?{uri: dataApi.picture.medium} : {}}
            style={{
              width: 60,
              height: 60,
              borderRadius: 50,
            }}
          />
        </TouchableOpacity>

        <Animatable.View
          animation="bounceInRight"
          delay={500}
          duration={1500}
          style={styles.infoName}>
          <Text
            style={{
              fontFamily: 'Little Comet Demo Version',
              fontSize: 24,
              color: '#000',
            }}>
            {dataApi!=null?dataApi.name.title+' '+dataApi.name.first+ " "+ dataApi.name.last: "No name"}
          </Text>
          <Text
            style={{
              marginTop: 5,
              fontFamily: 'Roboto-Medium',
              color: '#4682b4',
            }}>
            Diamond Member
          </Text>
        </Animatable.View>

        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            marginLeft: 20,
          }}>
          <Image
            source={require('../assets/images/icon_img/tabs_top/edit.png')}
            style={{
              width: 25,
              height: 25,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  //Render MyStatus
  const RenderMyStatus = () => {
    const [status, setStatus] = useState([
      {
        id: 1,
        emotion: require('../assets/images/icon_img/status/sad.png'),
        title: 'Sadly',
      },
      {
        id: 2,
        emotion: require('../assets/images/icon_img/status/work.png'),
        title: 'At Work',
      },
      {
        id: 3,
        emotion: require('../assets/images/icon_img/status/movie.png'),
        title: 'Movie',
      },
      {
        id: 4,
        emotion: require('../assets/images/icon_img/status/gaming.png'),
        title: 'Gaming',
      },
    ]);

    return (
      <View
        style={{
          marginTop: 25,
        }}>
        <Heading title="My Status" />
        <FlatList
          style={{
            paddingVertical: 10,
          }}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={status}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  padding: 12,
                  paddingHorizontal: 20,
                  backgroundColor: '#000',
                  marginRight: 20,
                  flexDirection: 'row',
                  borderRadius: 40,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 0.51,
                  shadowRadius: 13.16,
                  elevation: 20,
                }}>
                <Image
                  source={item.emotion}
                  style={{
                    width: 35,
                    height: 35,
                  }}
                />
                <Text
                  style={{
                    color: '#fff',
                    marginLeft: 10,
                    fontFamily: 'Wigglye',
                    fontSize: 20,
                  }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };
  //Render Dashboard
  const RenderDashboard = () => {
    return (
      <View>
        <Heading title="Dashboard" />
        <TouchableOpacity style={styles.touchableDashboard}>
          <View style={styles.containerTouchable}>
            <View style={[styles.left]}>
              <View style={[styles.leftBg]}>
                <Image
                  source={require('../assets/images/icon_img/status/pay.png')}
                  style={{
                    width: 40,
                    height: 40,
                    marginRight: 15,
                  }}
                />
              </View>
              <Text style={[styles.leftTitle]}>Payments</Text>
            </View>

            <View style={[styles.right]}>
              <Text style={[styles.rightTitle, {marginRight: 12}]}>2 New</Text>
              <FontAwesome5 name="chevron-right" size={25} color="#b0c4de" />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchableDashboard}>
          <View style={styles.containerTouchable}>
            <View style={[styles.left]}>
              <View style={[styles.leftBg]}>
                <Image
                  source={require('../assets/images/icon_img/status/achievement.png')}
                  style={{
                    width: 40,
                    height: 40,
                    marginRight: 15,
                  }}
                />
              </View>
              <Text style={[styles.leftTitle]}>Achievements</Text>
            </View>

            <View style={[styles.right, {backgroundColor: 'transparent'}]}>
              <FontAwesome5 name="chevron-right" size={25} color="#b0c4de" />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchableDashboard}>
          <View style={styles.containerTouchable}>
            <View style={[styles.left]}>
              <View style={[styles.leftBg]}>
                <Image
                  source={require('../assets/images/icon_img/status/privacy.png')}
                  style={{
                    width: 40,
                    height: 40,
                    marginRight: 15,
                  }}
                />
              </View>
              <Text style={[styles.leftTitle]}>Privacy</Text>
            </View>

            <View style={[styles.right, {backgroundColor: '#ff0000'}]}>
              <Text style={[styles.rightTitle, {marginRight: 12}]}>
                Actions Needed
              </Text>
              <FontAwesome5 name="chevron-right" size={25} color="#b0c4de" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  //Render Footer
  const RenderFooter = () => {
    const HandleLogout = () => {
      Alert.alert(
        //Header
        'Confirm',
        //Body
        'Do you want to log out?',
        [
          {
            text: 'Yes',
            onPress: () => navigation.replace('User'),
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

    return (
      <View>
        <Heading title="My Account" />
        <TouchableOpacity>
          <FontAwesome5 name="undo-alt" color="#00ced1" size={20}>
            <Text style={[styles.myAcc, {color: '#00bfff'}]}>
              {' '}
              Switch to Other Account
            </Text>
          </FontAwesome5>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 8,
          }}
          onPress={HandleLogout}>
          <FontAwesome5 name="sign-out-alt" color="#dc143c" size={20}>
            <Text style={[styles.myAcc, {color: '#ff0000'}]}> Log Out</Text>
          </FontAwesome5>
        </TouchableOpacity>
      </View>
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

          <RenderInfo />

          <RenderMyStatus />

          <RenderDashboard />

          <RenderFooter />
        </LinearGradient>
      </Animatable.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  info: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  myAcc: {
    fontFamily: 'Little Comet Demo Version',
    fontSize: 20,
    marginVertical: 10,
  },
  touchableDashboard: {
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  containerTouchable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#1e90ff',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 30,
  },
  leftTitle: {
    fontFamily: 'Roboto-Bold',
    color: '#000',
    fontSize: 20,
  },
  rightTitle: {
    fontFamily: 'Wigglye',
    fontSize: 20,
    color: '#b0c4de',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    height: '95%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
  },
});
