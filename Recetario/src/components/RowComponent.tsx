import React, {ReactNode} from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';

interface Props {
  children: ReactNode;
  styles?: StyleProp<ViewStyle>;
}

const RowComponent = (props: Props) => {
  const {children, styles} = props;

  return (
    <View style={[stylesRow.rowCenter, styles]}>{children}</View>
  );
};

export const stylesRow = StyleSheet.create({
  rowCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default RowComponent;