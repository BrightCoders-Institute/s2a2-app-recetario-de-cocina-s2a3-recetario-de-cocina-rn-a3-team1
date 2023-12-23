import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import { ContainerComponent, FabButtonComponent, TextComponent } from '../components';
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
            <TextComponent text={dishes.name} font='bold' size={30} color='white'/>
        </ContainerComponent>

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
      top: '50%',
      
    }
});

export default DishesScreen;
