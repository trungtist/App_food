import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import api from '../apis/api';
import {images} from '../constants';

export default function Search({navigation}) {
  //Data
  const [foodList, setFoodList] = useState([]);
  const [query, setQuery] = useState('');
  const currencyFormat = num => {
    return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  const [start, setSart] = useState(0);
  const [distance, setDistance] = useState(10);
  const changeTotalFind = () => {
    setDistance(distance+10);
  };

  const chageTextFind = ()=>{
    setDistance(10);
  }

  useEffect(() => {
    api.productCate(query, start, distance).then(data => {
      setFoodList(data.searchResults[0].results);
    });
  }, [query, distance]);

  const RenderFood = data => {
    const renderItem = item => {
      return (
        <TouchableOpacity
          key={item.id}
          onPress={() =>
            navigation.navigate('FoodDetail', {
              data: item,
            })
          }
          style={{
            flex: 1,
            marginRight: 28,
            marginBottom: 30,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,

            elevation: 9,
          }}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Image
                source={{uri: item.image}}
                resizeMode="cover"
                style={{
                  width: 200,
                  height: 150,
                  borderBottomRightRadius: 50,
                  borderTopRightRadius: 50,
                  borderTopLeftRadius: 50,
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  padding: 10,
                  backgroundColor: '#fff',
                  borderTopRightRadius: 30,
                }}>
                <Text style={styles.infor}>30 - 35min</Text>
              </View>

              <View
                style={{
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                }}>
                <Text
                  ellipsizeMode="tail"
                  numberOfLines={1}
                  style={[
                    styles.infor,
                    {fontSize: 30, fontFamily: 'Wigglye', width: 150},
                  ]}>
                  {item.name}
                </Text>
                <View
                  style={{
                    justifyContent: 'center',
                  }}>
                  <Text style={styles.infor}>Food</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../assets/images/icon_img/iconBtn/rate.png')}
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: 5,
                    }}
                  />
                  <Text style={styles.infor}>4.8</Text>
                </View>
                <Text style={styles.infor}>
                  {currencyFormat(item.relevance)}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    };

    const Empty = () => {
      if (data.data.length < 1) {
        return (
          <View>
            <View
              style={{
                flex: 1,
              }}>
              <Image
                source={images.fork}
                resizeMode="contain"
                style={{
                  width: 130,
                  height: 130,
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  padding: 10,
                  backgroundColor: '#ccc',
                  borderTopRightRadius: 30,
                }}>
                <Text
                  style={[styles.infor, {fontSize: 30, fontFamily: 'Wigglye'}]}>
                  No food
                </Text>
              </View>
            </View>
          </View>
        );
      } else {
        return (
          <View>
            {data.data.map(item => {
              return renderItem(item);
            })}
            <TouchableOpacity onPress={changeTotalFind}>
              <Text style={[styles.infor, {textAlign: 'center'}]}>More...</Text>
            </TouchableOpacity>
          </View>
        );
      }
    };
    return <Empty></Empty>;
  };

  //----------------------------Main----------------------------//
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Text style={[styles.heading, {color: '#000'}]}>Discover</Text>
          <Animatable.Text animation="fadeInRight" duration={1800}>
            <Text style={[styles.heading]}>Suitable Food</Text>
          </Animatable.Text>
        </View>

        <View style={styles.textInput}>
          <Image
            source={require('../assets/images/icon_img/tabs_top/search.png')}
            style={{
              width: 30,
              height: 30,
              marginLeft: 10,
            }}
            resizeMode="stretch"
          />
          <TextInput
            placeholder="Search Here"
            underlineColorAndroid="transparent"
            onChangeText={setQuery}
            onChange={chageTextFind}
            value={query}
            style={{
              flex: 1,
              marginLeft: 10,
              paddingVertical: 20,
              fontSize: 20,
              fontFamily: 'Roboto-Medium',
              letterSpacing: 1,
            }}
          />
        </View>
        <View style={{marginTop: 30}}>
          <RenderFood data={foodList}></RenderFood>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 35,
  },
  heading: {
    fontFamily: 'Little Comet Bubling Demo Version',
    fontSize: 50,
    letterSpacing: 1,
  },
  textInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#2e8b57',
    borderRadius: 20,
    marginTop: 10,
  },
  infor: {
    color: '#000',
    fontSize: 18,
    marginVertical: 2,
    fontFamily: 'Roboto-Medium',
  },
});
