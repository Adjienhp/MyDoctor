import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Styles from './style';
import {IInput} from './constants';
import {colors} from '../../utils';

const Input = ({title}: IInput) => {
  const [border, setBorder] = useState(colors.border.lightGray);

  const focus = () => {
    setBorder(colors.border.blue);
  };

  const blur = () => {
    setBorder(colors.border.lightGray);
  };

  return (
    <View>
      <Text style={Styles.title}>{title}</Text>
      <TextInput
        style={StyleSheet.flatten([Styles.input, {borderColor: border}])}
        onFocus={focus}
        onBlur={blur}
      />
    </View>
  );
};

export default Input;
