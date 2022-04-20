import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Header from '../components/Header';
import api from '../apis/api';
import jsonData from '../json/jsonData.json';
import {images} from '../constants';

export default function Home({route,navigation}) {
  const {email} = route.params;
  const [dataSource, setdataSource] = useState([]);
  const [foodrecomend, setFoodrecomend] = useState([]);
  const [query, setQuery] = useState('Burger');
  const [color, setColor] = useState(1);
  const currencyFormat = num => {
    return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  useEffect(() => {
    api.productCate(query, 0, 10).then(data => {
      setdataSource(data.searchResults[0].results);
    });
  }, [query]);

  useEffect(() => {
    api.product(10, 10).then(data => {
      setFoodrecomend(data.searchResults[0].results);
    });
  }, []);

  //Header
  const RenderHeader = () => {
    return (
      <Header
        imgLeft={require('../assets/images/icon_img/tabs_top/line_menu.png')}
        titleHeader="Home"
        imgRight={require('../assets/images/icon_img/tabs_bottom/user.png')}
        pressRight={() => navigation.navigate('Profile',{
          email: email,
        })}
      />
    );
  };

  //Menu
  const RenderMenu = () => {
    const menuList = jsonData.menuData;

    const changeColor = (id, category) => {
      setColor(id);
      setQuery(category);
    };

    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          onPress={() => changeColor(item.id, item.title)}
          style={[
            color == item.id
              ? {
                  paddingVertical: 20,
                  paddingHorizontal: 12,
                  backgroundColor: '#3ea6f0',
                  borderRadius: 50,
                  marginRight: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.32,
                  shadowRadius: 5.46,

                  elevation: 9,
                }
              : {
                  paddingVertical: 20,
                  paddingHorizontal: 12,
                  backgroundColor: '#94add6',
                  borderRadius: 50,
                  marginRight: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.32,
                  shadowRadius: 5.46,

                  elevation: 9,
                },
          ]}>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 25,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={images[item.img]}
              style={{
                width: 40,
                height: 40,
              }}
              resizeMode="contain"
            />
          </View>
          <Text
            style={{
              marginTop: 10,
              color: '#fff',
              fontFamily: 'Wigglye',
              fontSize: 22,
            }}>
            {item.title}
          </Text>
        </TouchableOpacity>
      );
    };
    return (
      <View>
        <FlatList
          data={menuList}
          horizontal={true}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  //Food List
  const RenderFood = data => {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate('FoodDetail',{
            data: item,
          })}
          style={{
            flex: 1,
            marginRight: 28,
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
            <View>
              <Image
                source={{uri: item.image}}
                resizeMode="cover"
                style={{
                  width: 250,
                  height: 180,
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
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.infor}>{query}</Text>
              <Text
                ellipsizeMode="tail"
                numberOfLines={1}
                style={[
                  styles.infor,
                  {fontSize: 30, fontFamily: 'Wigglye', width: 170},
                ]}>
                {item.name}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
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
                <Text style={styles.infor}>4.7</Text>
              </View>
              <Text style={styles.infor}>{currencyFormat(item.relevance)}</Text>
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
            <FlatList
              horizontal={true}
              data={data.data}
              indicatorStyle="white"
              keyExtractor={item => item.id}
              renderItem={renderItem}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        );
      }
    };
    return <Empty></Empty>;
  };

  //Food List recomended
  const RenderRecomend = data => {
    const renderItem = item => {
      return (
        <TouchableOpacity
          key={item.id}
          onPress={() => navigation.navigate('FoodDetail',{
            data: item,
          })}
          style={{
            flex: 1,
            marginRight: 28,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,

            elevation: 9,
          }}>
          <View style={{flexDirection: 'row', marginVertical: 15}}>
            <View>
              <Image
                source={{uri: item.image}}
                resizeMode="cover"
                style={{
                  width: 180,
                  height: 140,
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
                  padding: 5,
                  backgroundColor: '#fff',
                  borderTopRightRadius: 25,
                }}>
                <Text style={styles.infor}>30 - 35min</Text>
              </View>
            </View>

            <View style={{marginLeft: 10,}}>
              <View>
                <Text style={styles.infor}>Food</Text>
                <Text
                  ellipsizeMode="tail"
                  numberOfLines={1}
                  style={[
                    styles.infor,
                    {fontSize: 30, fontFamily: 'Wigglye', width: 160},
                  ]}>
                  {item.name}
                </Text>
              </View>
              <View>
                <View
                  style={
                    {
                      flexDirection: 'row',
                      alignItems: 'center',
                    }
                  }>
                  <Image
                    source={require('../assets/images/icon_img/iconBtn/rate.png')}
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: 5,
                    }}
                  />
                  <Text style={styles.infor}>4.9</Text>
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
          </View>
        );
      }
    };
    return <Empty></Empty>;
  };

  //----------------------------Main----------------------------//
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Animatable.View
        style={styles.container}
        animation="fadeInUpBig"
        duration={1800}>
        {/* Header */}
        <RenderHeader />
        {/* Menu */}
        <Animatable.Text
          animation="fadeInRight"
          duration={2000}
          style={{
            fontSize: 35,
            fontFamily: 'Little Comet Bubling Demo Version',
            color: '#000',
            marginTop: 28,
            marginBottom: 8,
            letterSpacing: 2,
          }}>
          Menu
        </Animatable.Text>
        <RenderMenu />
        <View
          style={{
            marginVertical: 10,
          }}></View>
        {/* Food List */}
        <Animatable.Text
          animation="fadeInRight"
          duration={2000}
          style={{
            fontSize: 35,
            fontFamily: 'Little Comet Bubling Demo Version',
            color: '#2f4f4f',
            marginTop: 28,
            marginBottom: 8,
            letterSpacing: 2,
          }}>
          {query}
        </Animatable.Text>
        <RenderFood data={dataSource} />

        {/* Recomended */}
        <Animatable.Text
          animation="fadeInRight"
          duration={2000}
          style={{
            fontSize: 35,
            fontFamily: 'Little Comet Bubling Demo Version',
            color: '#2f4f4f',
            marginTop: 28,
            marginBottom: 8,
            letterSpacing: 2,
          }}>
          Recomended For You
        </Animatable.Text>
        {/* Food List */}
        <RenderRecomend data={foodrecomend} />
      </Animatable.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 35,
  },
  infor: {
    color: '#000',
    fontSize: 18,
    marginVertical: 2,
    fontFamily: 'Roboto-Medium',
  },
  icon: {
    marginRight: 8,
  },
});
