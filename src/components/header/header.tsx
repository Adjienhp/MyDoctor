import {View, Text} from 'react-native';
import React from 'react';
import Button from '../button';
import {IHeader} from './constants';
import Styles from './style';
import Gap from '../gap';

const Header = ({onPress, title}: IHeader) => {
  return (
    <View style={Styles.container}>
      <Button onPress={onPress} type="button-icon" icon="arrow-back-dark" />
      <Text style={Styles.title}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;
