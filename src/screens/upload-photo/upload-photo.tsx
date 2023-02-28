import {View, Text, Image} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Link} from '../../components';
import images from '../../assets/images';
import {ICAddPhoto} from '../../assets';
import Styles from './style';

const UploadPhoto = ({navigation}: {navigation: any}) => {
  return (
    <View style={Styles.container}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={Styles.section}>
        <View style={Styles.profile}>
          <View style={Styles.avatarWrapper}>
            <Image source={images.user_photo} style={Styles.avatar} />
            <ICAddPhoto style={Styles.addPhoto} />
          </View>
          <View>
            <Text style={Styles.name}>Shayna Melinda</Text>
            <Text style={Styles.profession}>Product Designer</Text>
          </View>
        </View>
        <View>
          <Button
            title="Upload and Continue"
            onPress={() => navigation.replace('MainApp')}
          />
          <Gap height={30} />
          <Link
            title="Skip for this"
            align="center"
            size={16}
            onPress={() => navigation.replace('MainApp')}
          />
          <Gap height={64} />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;
