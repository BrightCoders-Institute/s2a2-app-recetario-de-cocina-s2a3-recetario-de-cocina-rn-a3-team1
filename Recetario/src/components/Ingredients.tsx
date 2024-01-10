import React from 'react';
import {View, Text} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNav';
import { ContainerComponent } from '.';
import { DishesData } from '../data/DishesData'

const Ingredients: React.FC<RecipeComponentProps> =({recipe}) => { 
  
  return (
    <View>
      {/* Mapea dinámicamente los ingredientes y portions */}
      {recipe.ingredients.map((ingredient, index) => (
        <View key={index}>
          <Text>{`Ingredient: ${ingredient}, Portion: ${recipe.portions[index]}`}</Text>
        </View>
      ))}
      
      <View style={{ borderBottomWidth: 1, borderBottomColor: 'black' }} />
    </View>
  );
};

export default Ingredients;

