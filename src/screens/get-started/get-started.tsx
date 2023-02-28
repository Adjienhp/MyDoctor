import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {ICLogo} from '../../assets';
import images from '../../assets/images';
import {Button, Gap} from '../../components';
import Styles from './style';

const GetStarted = ({navigation}: {navigation: any}) => {
  return (
    <ImageBackground source={images.get_started} style={Styles.container}>
      <View>
        <ICLogo />
        <Text style={Styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          title="Sign In"
          type="secondary"
          onPress={() => navigation.replace('Login')}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;
