import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TextInput, StyleProp, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const SearchInputComponent = ({style}: Props) => {
  const [textValue, setTextValue] = useState('');

  return (
    <View style={{...styles.container, ...(style as any)}}>
      <View style={styles.textBackground}>
        <Icon name="search-outline" color="grey" size={30} />
        <TextInput
          placeholder="What do you want to eat?"
          placeholderTextColor='#bdbebe'
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
        />

      <Icon name="mic-outline" color="grey" size={30} />
      </View>
    </View>
  );
};

export default SearchInputComponent;

export const styles = StyleSheet.create({
  container: {},
  textBackground: {
    backgroundColor: '#343435',
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    top: 2,
    color: 'white',
    textDecorationLine: 'none',
  },
});

