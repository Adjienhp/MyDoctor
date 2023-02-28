import React from 'react';
import {View} from 'react-native';
import {IGap} from './constants';

const Gap = ({width, height}: IGap) => {
  return <View style={{width: width, height: height}} />;
};

export default Gap;
