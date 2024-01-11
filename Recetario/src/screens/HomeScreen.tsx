import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {
  ContainerComponent,
  DishesCardComponent,
  TextComponent,
} from '../components';
import SearchInputComponent from '../components/SearchInputComponent';

import {DishesData} from '../data/DishesData';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  return (
    <ContainerComponent styles={{marginTop: top + 20}}>
      <SearchInputComponent />
      <TextComponent
        text="TREADING"
        font="400"
        size={27}
        color="#c03370"
        styles={{marginTop: 25}}
      />
      <View style={{marginVertical: 30}}>
        <FlatList
          data={DishesData}
          keyExtractor={dishes => dishes.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <DishesCardComponent dishes={item} />}
        />
      </View>
      <TextComponent
        text="RECENT"
        font="400"
        size={27}
        color="#c03370"
        styles={{marginTop: 25}}
      />
      <View style={{marginVertical: 30}}>
        <FlatList
          data={DishesData}
          keyExtractor={dishes => dishes.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <DishesCardComponent
              dishes={item}
              imageHeight={200}
              imageWidth={165}
              CardHeight={220}
              CardWidth={165}
            />
          )}
        />
      </View>
    </ContainerComponent>
  );
};

export default HomeScreen;
