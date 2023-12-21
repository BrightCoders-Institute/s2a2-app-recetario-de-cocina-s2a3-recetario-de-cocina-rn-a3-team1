import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  iconName: string;
  iconSize: number;
  onPress: () => void;
  background?: string;
  styles?: StyleProp<ViewStyle>;
}

const FabButtonComponent = (props: Props) => {
  const {iconName, iconSize, onPress, background, styles} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        {...stylesFab.fabButton, backgroundColor: background ?? 'white'},
      ]}>
      <Icon name={iconName} size={iconSize ?? 25} color="black" />
    </TouchableOpacity>
  );
};

export const stylesFab = StyleSheet.create({
  fabButton: {
    width: 50,
    aspectRatio: 1 / 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    zIndex: 100,
    position: 'absolute',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 4,
  },
});

export default FabButtonComponent;
