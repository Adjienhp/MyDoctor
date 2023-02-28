import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {ICLogo} from '../../assets';
import images from '../../assets/images';
import {Button, Gap} from '../../components';
import Styles from './style';

const GetStarted = () => {
  return (
    <ImageBackground source={images.get_started} style={Styles.container}>
      <View>
        <ICLogo />
        <Text style={Styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button title="Get Started" />
        <Gap height={16} />
        <Button title="Sign In" type="secondary" />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;
