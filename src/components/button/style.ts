import {StyleSheet} from 'react-native';
import {fonts} from '../../utils';

const Styles = StyleSheet.create({
  btnCustom: {
    paddingVertical: 10,
    borderRadius: 10,
  },
  title: {
    fontFamily: fonts.nunito[600],
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Styles;
