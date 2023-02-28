import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {ICLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import Styles from './style';

const Login = () => {
  return (
    <View style={Styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={40} />
        <ICLogo />
        <Text style={Styles.title}>Masuk dan mulai berkonsultasi</Text>
        <Input title="Email Address" />
        <Gap height={24} />
        <Input title="Password" />
        <Gap height={10} />
        <Link title="Forgot My Password" size={12} />
        <Gap height={40} />
        <Button title="Sign In" />
        <Gap height={30} />
        <Link title="Create New Account" size={16} align="center" />
        <Gap height={40} />
      </ScrollView>
    </View>
  );
};

export default Login;
