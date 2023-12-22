import {Text, StyleProp, TextStyle} from 'react-native';
import React, {useContext} from 'react';

interface Props {
  text: string | any;
  align?: string | any;
  color?: string;
  size?: number;
  flex?: number;
  styles?: StyleProp<TextStyle>;
  font?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
}

const TextComponent = (props: Props) => {
  const {text, color, size, flex, styles, font, align} = props;
  return (
    <Text
      style={[
        {
          color: color ?? 'black',
          fontSize: size ?? 15,
          flex: flex ?? 0,
          fontWeight: font,
          textAlign: align,
        },
        styles,
      ]}>
      {text}
    </Text>
  );
};

export default TextComponent;
