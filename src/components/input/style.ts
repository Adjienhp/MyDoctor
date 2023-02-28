import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

const Styles = StyleSheet.create({
  title: {
    fontFamily: fonts.nunito[400],
    fontSize: 16,
    color: colors.font.darkGray,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    fontFamily: fonts.nunito[400],
    fontSize: 16,
    color: colors.font.dark,
  },
});

export default Styles;
