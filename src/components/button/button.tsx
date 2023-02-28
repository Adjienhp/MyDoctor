import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../utils';
import ButtonIcon from './button-icon';
import {IButton} from './constants';
import Styles from './style';

const Button = ({title, onPress, type, icon}: IButton) => {
  if (type === 'button-icon') {
    return <ButtonIcon onPress={onPress} icon={icon} />;
  }

  return (
    <TouchableOpacity
      style={StyleSheet.flatten([
        Styles.btnCustom,
        {
          backgroundColor:
            type === 'secondary'
              ? colors.button.secondary
              : colors.button.primary,
        },
      ])}
      onPress={onPress}>
      <Text
        style={StyleSheet.flatten([
          Styles.title,
          {color: type === 'secondary' ? colors.font.dark : colors.font.white},
        ])}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
