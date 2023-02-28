import React from 'react';
import {ScrollView, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import Styles from './style';

const Register = ({navigation}: {navigation: any}) => {
  return (
    <View style={Styles.container}>
      <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
      <View style={Styles.section}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input title="Full Name" />
          <Gap height={24} />
          <Input title="Pekerjaan" />
          <Gap height={24} />
          <Input title="Email Address" />
          <Gap height={24} />
          <Input title="Password" />
          <Gap height={40} />
          <Button
            title="Continue"
            onPress={() => navigation.navigate('UploadPhoto')}
          />
          <Gap height={40} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Register;
