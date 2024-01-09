import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import { ContainerComponent, FabButtonComponent, RowComponent, TextComponent } from '../components';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNav';

interface Props extends StackScreenProps<RootStackParams, 'DishesScreen'> {}

const DishesScreen = ({navigation, route}: Props): React.JSX.Element => {

  const navigator = useNavigation()
  const {simpleDishes: dishes} = route.params

  return (
    <View style={{flex:1}}>
        <ImageBackground source={dishes.picture} style={styles.image} imageStyle={{opacity: 0.4}}>
          <FabButtonComponent
            iconName="close-sharp" iconSize={25}  onPress={() => navigator.goBack() } pTop={30} pLeft={20}
          />
            <FabButtonComponent
              iconName='share-outline' iconSize={24} onPress={() => {}} pRight={70} pTop={30}
            />
            <FabButtonComponent
              iconName='heart-outline' iconSize={24} onPress={() => {}} pRight={20}  pTop={30}
            />

        <ContainerComponent styles={styles.titleContainer}>
            <TextComponent text="TREADING" font='400' size={25} color='white'  />
            <TextComponent text={dishes.name} font='400' size={30} color='white'/>
        </ContainerComponent>

        <RowComponent styles={styles.descriptionContainer}>
          <View style={{backgroundColor: 'black', width:'30%'}}>
           {
              dishes.ingredients.map((ingredient) =>(
                <TextComponent  styles={{padding: 4}} text={ingredient} size={17} color='white'/>
              ))

            }
          </View>
          

          <View style={{backgroundColor: 'black', width:'100%'}}>
            {
              dishes.portions.map((portion) =>(
                <TextComponent styles={{padding: 4, textAlign: 'right'}} text={portion} font='400' size={17} color='white'/>
              ))

            }
          
          </View>
        </RowComponent>
        
      </ImageBackground>

    </View>

  );
};

export const styles = StyleSheet.create({
    image: {
      width: '100%',
      height: 370,
    },
    titleContainer: {
      left: '15%',
      transform: [{translateX: -50}, {translateY: +100}],
      top: '45%',
      
    },
    
    descriptionContainer:{
    backgroundColor: 'red',
    flex: 1,
     top: '60%',
     justifyContent: 'space-between'
    },
    description: {
      flexDirection: 'row',
    }
});

export default DishesScreen;
