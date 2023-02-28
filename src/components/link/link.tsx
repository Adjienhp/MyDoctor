import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ILink} from './constants';
import Styles from './style';

const Link = ({title, onPress, size, align}: ILink) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={StyleSheet.flatten([
          Styles.title,
          {fontSize: size, textAlign: align},
        ])}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Link;
