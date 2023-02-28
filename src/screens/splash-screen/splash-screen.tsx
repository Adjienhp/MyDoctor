import {View, Text} from 'react-native';
import React from 'react';
import {ICLogo} from '../../assets';
import Styles from './style';

const SplashScreen = () => {
  return (
    <View style={Styles.container}>
      <ICLogo />
      <Text style={Styles.title}>My Doctor</Text>
    </View>
  );
};

export default SplashScreen;
