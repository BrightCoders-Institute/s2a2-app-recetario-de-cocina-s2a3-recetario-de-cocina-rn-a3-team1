import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import { SimpleDishes } from '../interfaces/dhisesInterface';
import { useNavigation } from '@react-navigation/native';
import { TextComponent } from '.';

interface Props {
  dishes: SimpleDishes;
  imageWidth?: number,
  imageHeight?: number,
  cardRight?: number,
  CardWidth?: number,
  CardHeight?: number,
}

const DishesCardComponent = (
  { dishes, imageHeight,imageWidth, cardRight, CardWidth, CardHeight}: Props
) => {
  const navigator = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={(): void => 
        navigator.navigate('DishesScreen', {
          simpleDishes: dishes
        })
      }>
      <View
        style={{...styles.cardContainer, marginRight: cardRight ?? 25, height: CardHeight ?? 200, width: CardWidth ?? 120  }}
      >
        <Image
          source={dishes.picture}
          style={{...styles.image, width: imageWidth ?? 120, height:imageHeight ?? 120 }}
        />

        <View style={{top: 8}}>
          <TextComponent text={dishes.name} font="600" color='white'  />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 10,

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
    borderRadius: 5,
  },
});

export default DishesCardComponent;
