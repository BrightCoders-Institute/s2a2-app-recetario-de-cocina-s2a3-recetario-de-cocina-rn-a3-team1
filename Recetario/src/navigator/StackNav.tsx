import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DishesScreen, HomeScreen} from '../screens';
import { SimpleDishes } from '../interfaces/dhisesInterface';

export type RootStackParams = {
  HomeScreen: undefined;
  DishesScreen: {simpleDishes: SimpleDishes}
}

const Stack = createStackNavigator<RootStackParams>();

export const  StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor:'#282828'
          }
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DishesScreen" component={DishesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
