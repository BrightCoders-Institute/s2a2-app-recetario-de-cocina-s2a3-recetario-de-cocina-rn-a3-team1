import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { ContainerComponent, DishesCardComponent, TextComponent } from '../components';
import SearchInputComponent from '../components/SearchInputComponent';

import { DishesData } from '../data/DishesData';

const HomeScreen = () => {

  return (
    <ContainerComponent styles={{marginVertical: 25}}>
      <SearchInputComponent />
      <TextComponent text="TREADING" font='400' size={27} color='#c03370' styles={{marginTop: 25}} />
      <View style={{marginVertical: 30}}>
        <FlatList
          data={DishesData}
          keyExtractor={dishes => dishes.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <DishesCardComponent dishes={item} />}
        />
      </View>
      <TextComponent text="RECENT" font='400' size={27} color='#c03370' styles={{marginTop: 25}} />
      <View style={{marginVertical: 30}}>
        <FlatList
          data={DishesData}
          keyExtractor={dishes => dishes.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <DishesCardComponent dishes={item} imageHeight={200} imageWidth={150} cardRight={30} CardHeight={220} CardWidth={170}/>}
        />
        </View>
    </ContainerComponent>
  );
};

export default HomeScreen;
