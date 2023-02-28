import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ICArrowBackDark} from '../../../assets';
import {IButtonIcon, IIcon} from '../constants';

const ButtonIcon = ({onPress, icon}: IButtonIcon) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon icon={icon} />
    </TouchableOpacity>
  );
};

const Icon = ({icon}: IIcon) => {
  if (icon === 'arrow-back-dark') {
    return <ICArrowBackDark />;
  }
  return null;
};

export default ButtonIcon;
