import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {SimpleFished} from '../interface/fishedInterface';
import {useNavigation} from '@react-navigation/native';
import {TextComponent} from '.';

interface Props {
  fished: SimpleFished;
}

const DishesCardComponent = () => {
  const navigator = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigator.navigate('DishesScreen')}>
      <View style={styles.cardContainer}>
        <Image source={require('../img/food-1.jpg')} style={styles.image} />

        <View style={{top: 20}}>
          <TextComponent text="Burrito con Cum" font="600" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    height: 200,
    width: 120,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
});

export default DishesCardComponent;
