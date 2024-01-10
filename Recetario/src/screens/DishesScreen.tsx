import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  ContainerComponent,
  FabButtonComponent,
  RowComponent,
  TextComponent
} from '../components';
import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNav';

interface Props extends StackScreenProps<RootStackParams, 'DishesScreen'> {}

interface Recipe {
  id: string;
  name: string;
  picture: String;
  ingredients: string[];
  portions: string[];
}

const DishesScreen = ({navigation, route}: Props): React.JSX.Element => {
  const navigator = useNavigation();
  const {simpleDishes: dishes} = route.params;

  //  pruebas data
  const recipes: Recipe[] = [
    {
      id: "1",
      name: "Peperoni Pizza Pockets",
      picture: require('../img/food-1.jpg'),
      ingredients: ['puff pastry', 'peperoni', 'marinara sauce', 'mozzarella cheese', 'egg'],
      portions: ['1 sheet', '15 slices', '1 cup', '1/2 cup', '1']
    },
    // Otras recetas...
  ];

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={dishes.picture}
        style={styles.image}
        imageStyle={{opacity: 0.4}}>
        <FabButtonComponent
          iconName="close-sharp"
          iconSize={25}
          onPress={() => navigator.goBack()}
          pTop={30}
          pLeft={20}
        />
        <FabButtonComponent
          iconName="share-outline"
          iconSize={24}
          onPress={() => {}}
          pRight={70}
          pTop={30}
        />
        <FabButtonComponent
          iconName="heart-outline"
          iconSize={24}
          onPress={() => {}}
          pRight={20}
          pTop={30}
        />

        <ContainerComponent styles={styles.titleContainer}>
          <TextComponent text="TREADING" font="400" size={25} color="white" />
          <TextComponent
            text={dishes.name}
            font="400"
            size={30}
            color="white"
          />
        </ContainerComponent>
      </ImageBackground>

      <ContainerComponent styles={{paddingTop: 20}}>
        <TextComponent
          styles={{paddingLeft: 5, marginBottom: 10}}
          text="Ingredientes"
          size={20}
          color="white"
        />
        {/* {
              dishes.ingredients.map((ingredient) =>(
                <>
                <TextComponent key={dishes.id} styles={{padding: 4, marginTop: 10}} text={ingredient} size={17} color='white'/>
                <View style={{width: '100%', height: 2, backgroundColor: '#303030'}}/>
                </>
                ))

            } */}

        {/* pruebas */}

        {/* <ContainerComponent>
                    {recipes.ingredients.map((ingredient, index) => (
                      <View key={index} style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                        <View >
                          <Text>{ingredient}</Text>
                        </View>
                        <View >
                          <Text>{dishes.portions[index]}</Text>
                        </View>
                        <View
                          style={{width: '100%', height: 2, backgroundColor: '#303030'}}
                        />
                      </View>
                    ))}
                  </ContainerComponent> */}
              
              <View>
          {recipes.map((recipe, index) => (
            <View key={index}>
              {/* Mapea dinámicamente los ingredientes y portions */}
              {recipe.ingredients.map((ingredient, i) => (
                <View
                  key={i}
                  >
                  <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    paddingTop: 10,
                    paddingLeft: 4
                  }}>
                    <View >
                      <Text style={{color: 'white'}}>{ingredient}</Text>
                    </View>

                    <View>
                      <Text style={{color: 'white'}}>{recipe.portions[i]}</Text>
                    </View>
                  </View>
                  <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', paddingTop: 10 }} />
                  
                </View>
              ))}
            </View>
          ))}
        </View>
                  

      </ContainerComponent>
    </View>
  );
};

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 370,
  },
  titleContainer: {
    transform: [{translateY: +270}],
    padding: 4,
  },

  descriptionContainer: {
    flexDirection: 'row',
    flex: 1,
    top: '60%',
    justifyContent: 'space-between',
  },
  description: {
    flexDirection: 'row',
  },
});

export default DishesScreen;
