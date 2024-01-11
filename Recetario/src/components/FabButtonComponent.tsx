import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {RowComponent, TextComponent} from '.';

interface Props {
  pTop?: number;
  pLeft?: number;
  pRight?: number;
  pBottom?: number;
  iconName: string;
  iconSize?: number;
  iconColor?: string;
  onPress?: () => void;
  background?: string;
  onRadius?: number;
}

const FabButtonComponent = (props: Props) => {
  const {
    iconName,
    iconSize,
    onPress,
    background,
    iconColor,
    pTop,
    pLeft,
    pRight,
    pBottom,
  } = props;

  return (
    <View
      style={{
        ...stylesFab.fabButton,
        backgroundColor: background ?? '',
        bottom: pBottom,
        right: pRight,
        left: pLeft,
        top: pTop,
      }}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <Icon
          name={iconName}
          color={iconColor ?? 'white'}
          size={iconSize ?? 25}
        />
      </TouchableOpacity>
    </View>
  );
};

export const stylesFab = StyleSheet.create({
  fabButton: {
    aspectRatio: 1 / 1,
    alignItems: 'center',
    width: 40,
    height: 40,
    justifyContent: 'center',
    borderRadius: 100,
    zIndex: 100,
  },
});

export default FabButtonComponent;
