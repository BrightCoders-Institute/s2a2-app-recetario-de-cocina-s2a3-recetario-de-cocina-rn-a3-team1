import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {
  ContainerComponent,
  FabButtonComponent,
  RowComponent,
  TextComponent,
} from '../components';
import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNav';

interface Props extends StackScreenProps<RootStackParams, 'DishesScreen'> {}

const DishesScreen = ({navigation, route}: Props): React.JSX.Element => {
  const navigator = useNavigation();
  const {simpleDishes: dishes} = route.params;

  const {height: windowsHeight, width: windowsWidth} = Dimensions.get('window');

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={dishes.picture}
        style={styles.image}
        imageStyle={{opacity: 0.4}}>
        {/* inicio buttons */}
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'space-between',
            width: '100%',
            height: 20,
            marginTop: 50,
            paddingLeft: 5,
            paddingRight: 5,
          }}>
          <View style={{width: '80%'}}>
            <FabButtonComponent
              iconName="close-sharp"
              iconSize={25}
              onPress={() => navigator.goBack()}
              // pTop={30}
              // pLeft={20}
            />
          </View>

          <View style={{flexDirection: 'row', width: '100%'}}>
            <FabButtonComponent
              iconName="share-outline"
              iconSize={24}
              onPress={() => {}}
              // pRight={70}
              // pTop={30}
            />
            <FabButtonComponent
              iconName="heart-outline"
              iconSize={24}
              onPress={() => {}}
              // pRight={20}
              // pTop={30}
            />
          </View>
        </View>
        {/* fin buttons */}

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
        <TextComponent
          styles={{paddingLeft: 5, marginBottom: 10}}
          text="for 3 servings"
          size={17}
          color="white"
        />

        <View>
          <View>
            {dishes.ingredients?.map((ingredient, i) => (
              <View key={i}>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    paddingTop: 15,
                    paddingLeft: 4,
                  }}>
                  <View>
                    <Text style={{color: 'white'}}>{ingredient}</Text>
                  </View>

                  <View>
                    <Text style={{color: 'white'}}>{dishes.portions[i]}</Text>
                  </View>
                </View>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#303030',
                    paddingTop: 15,
                  }}
                />
              </View>
            ))}
          </View>
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
    transform: [{translateY: +200}],
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
