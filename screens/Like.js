import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Image,
  ImageBase,
  ScrollView,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import Header from '../components/Header';
import * as Animatable from 'react-native-animatable';

export default function Like({route, navigation: {goBack}, navigation}) {
  const {data} = route.params;
  //Header
  const RenderHeader = () => {
    return (
      <View style={{paddingHorizontal: 20}}>
        <Header
          pressLeft={() => goBack()}
          imgLeft={require('../assets/images/icon_img/tabs_top/back2.png')}
          titleHeader="Rating"
          pressRight={() => navigation.navigate('Profile')}
          imgRight={require('../assets/images/icon_img/tabs_bottom/user.png')}
        />
      </View>
    );
  };

  const RenderRating = () => {
    const [rating, setRating] = useState(0);

    // Catch Rating value
    const handleRating = rate => {
      setRating(rate);
    };

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            marginTop: '35%',
            width: '70%',
          }}>
          <Image
            source={{uri: data.image}}
            style={{
              width: '100%',
              height: 180,
              borderRadius: 20,
            }}
            resizeMode="contain"
          />
        </View>
        <Animatable.Text
          style={{
            fontFamily: 'Wigglye',
            fontSize: 35,
            margin: 10,
            textAlign: 'center',
          }}
          animation="fadeInRight"
          duration={1800}>
          {data.name}
        </Animatable.Text>
        <StarRating
          rating={rating}
          selectedStar={handleRating}
          maxStars={5}
          half={true}
          fullStarColor="red"
          starStyle={{
            marginRight: 10,
          }}
          starSize={40}
        />
      </View>
    );
  };

  //----------------------------Main----------------------------//
  return (
    <ScrollView style={{flex: 1, paddingTop: 10, backgroundColor: '#ccc'}}>
      <View
        style={
          {
            // flex: 1,
          }
        }>
        <RenderHeader />

        <RenderRating />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  myStarStyle: {
    color: 'yellow',
    backgroundColor: '#000',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  },
});
