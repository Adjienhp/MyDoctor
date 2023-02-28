import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {ICLogo} from '../../assets';
import Styles from './style';

const SplashScreen = ({navigation}: {navigation: any}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  }, [navigation]);

  return (
    <View style={Styles.container}>
      <ICLogo />
      <Text style={Styles.title}>My Doctor</Text>
    </View>
  );
};

export default SplashScreen;
